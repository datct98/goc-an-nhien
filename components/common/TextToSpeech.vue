<template>
  <div v-if="isShow" class="text-to-speech" :class="{ 'is-open': isListOpen }">
    <div class="text-to-speech__list" role="region" aria-label="Danh sách" :aria-hidden="!isListOpen">
      <slot />
    </div>

    <button class="text-to-speech__toggle" type="button" :aria-expanded="isListOpen" aria-label="Mở hoặc đóng danh sách"
      @click="isListOpen = !isListOpen">
      <img src="/gomo/chervonRight.png" alt="" draggable="false">
    </button>
  </div>
</template>

<script setup>
import { onBeforeUnmount, ref, watch } from 'vue'

const props = defineProps({
  isShow: {
    type: Boolean,
    default: true
  },
  message: {
    type: String,
    default: ''
  },
  isStart: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['update:isStart', 'played', 'error'])

const isListOpen = ref(false)

let audio
let requestController
let playbackId = 0

function stopPlayback() {
  playbackId += 1
  requestController?.abort()
  requestController = undefined

  if (audio) {
    audio.pause()
    audio.src = ''
    audio = undefined
  }
}

async function playMessage(message) {
  const currentPlaybackId = ++playbackId
  requestController?.abort()
  requestController = new AbortController()

  if (audio) {
    audio.pause()
    audio.src = ''
    audio = undefined
  }

  // The message may be populated asynchronously after the component mounts.
  // Keep isStart enabled until there is actual text to synthesize. rebuild
  if (!message.trim()) return

  try {
    const response = await fetch('https://goc-an-nhien-backend.onrender.com/api/tts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text: message,
        voice: "vi-VN-HoaiMyNeural"
      }),
      signal: requestController.signal
    })

    if (!response.ok) throw new Error('Không thể tạo giọng nói.')

    const audioUrl = URL.createObjectURL(await response.blob())
    if (currentPlaybackId !== playbackId) {
      URL.revokeObjectURL(audioUrl)
      return
    }

    audio = new Audio(audioUrl)
    audio.addEventListener('ended', () => {
      URL.revokeObjectURL(audioUrl)
      if (currentPlaybackId === playbackId) {
        audio = undefined
        emit('played')
        emit('update:isStart', false)
      }
    }, { once: true })
    audio.addEventListener('error', () => {
      URL.revokeObjectURL(audioUrl)
      if (currentPlaybackId === playbackId) {
        audio = undefined
        emit('error', new Error('Không thể phát audio.'))
        emit('update:isStart', false)
      }
    }, { once: true })

    await audio.play()
  } catch (error) {
    if (error.name !== 'AbortError' && currentPlaybackId === playbackId) {
      emit('error', error)
      emit('update:isStart', false)
    }
  }
}

watch(() => [props.isStart, props.message], ([isStart, message]) => {
  if (isStart && message.trim()) playMessage(message)
  else if (!isStart) stopPlayback()
}, { immediate: true })

onBeforeUnmount(stopPlayback)
</script>

<style scoped>
.text-to-speech {
  --list-width: min(380px, 78vw, 58vh);

  position: fixed;
  z-index: 1000;
  inset: 0;
  pointer-events: none;
}

.text-to-speech__list {
  position: absolute;
  top: 50%;
  left: 0;
  display: flex;
  width: var(--list-width);
  max-height: 82vh;
  aspect-ratio: 1077 / 1450;
  flex-direction: column;
  background: url('/gomo/list.png') center / 100% 100% no-repeat;
  transform: translate(-100%, -50%);
  transition: transform 1s cubic-bezier(0.22, 1, 0.36, 1);
  pointer-events: none;
}

.is-open .text-to-speech__list {
  transform: translate(0, -50%);
  pointer-events: auto;
}

.text-to-speech__toggle {
  position: absolute;
  top: 50%;
  left: 0;
  display: block;
  width: 50px;
  margin: 0;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
  pointer-events: auto;
  transform: translateY(-50%);
  transition: left 1s cubic-bezier(0.22, 1, 0.36, 1), transform 1s cubic-bezier(0.22, 1, 0.36, 1);
}

.text-to-speech__toggle img {
  display: block;
  width: 100%;
  height: auto;
  user-select: none;
}

.is-open .text-to-speech__toggle {
  left: calc(var(--list-width) - 22px);
  transform: translateY(-50%) scaleX(-1);
}
</style>
