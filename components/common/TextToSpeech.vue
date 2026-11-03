<template>
  <div v-if="isShow" class="text-to-speech" aria-hidden="true"></div>
</template>

<script setup>
import { onBeforeUnmount, watch } from 'vue'

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
  // Keep isStart enabled until there is actual text to synthesize.
  if (!message.trim()) return

  try {
    const response = await fetch('/api/text-to-speech', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message }),
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
  width: 64px;
  height: 64px;
  background: #fff;
}
</style>
