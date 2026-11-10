<template>
  <div v-if="isShow" class="text-to-speech" :class="{ 'is-open': isListOpen }">
    <div class="text-to-speech__list" role="region" aria-label="Danh sách" :aria-hidden="!isListOpen">
      <h2 class="text-to-speech__title">Tụng kinh</h2>
      <div class="text-to-speech__inputs">
        <input v-for="(_, index) in listItems" :key="index" v-model="listItems[index]" type="text" maxlength="40"
          :aria-label="`Mục ${index + 1}`" :readonly="!isListOpen" autocomplete="off">
      </div>
      <slot />
    </div>

    <button class="text-to-speech__toggle" type="button" :aria-expanded="isListOpen" aria-label="Mở hoặc đóng danh sách"
      @click="toggleList">
      <img src="/gomo/chervonRight.png" alt="" draggable="false">
    </button>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'

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

const emit = defineEmits(['update:isStart', 'update:messages', 'played', 'error'])

const isListOpen = ref(false)
const listItems = ref(Array.from({ length: 6 }, () => ''))
const defaultMessages = [
  'Không được nói xấu đồng nghiệp',
  'Không được nói xấu sếp',
  'Đồng nghiệp lúc nào cũng tuyệt vời'
]

onMounted(() => {
  try {
    const storedValue = localStorage.getItem('talkMessages')
    const savedMessages = storedValue === null ? defaultMessages : JSON.parse(storedValue)
    if (!Array.isArray(savedMessages)) return

    savedMessages.slice(0, 6).forEach((message, index) => {
      listItems.value[index] = typeof message === 'string' ? message : ''
    })
    emit('update:messages', savedMessages.filter(message => typeof message === 'string' && message.trim()).slice(0, 6))
  } catch (error) {
    console.error('Không thể đọc talkMessages từ localStorage:', error)
  }
})

function toggleList() {
  if (isListOpen.value) {
    const messages = listItems.value.map(message => message.trim()).filter(Boolean)
    listItems.value = [...messages, ...Array.from({ length: 6 - messages.length }, () => '')]
    localStorage.setItem('talkMessages', JSON.stringify(messages))
    emit('update:messages', messages)
    isListOpen.value = false
    return
  }

  isListOpen.value = true
}

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
  top: 46%;
  left: 0;
  display: flex;
  width: var(--list-width);
  max-height: 82vh;
  aspect-ratio: 1077 / 1450;
  flex-direction: column;
  background: url('/gomo/blankList.png') center / 100% 100% no-repeat;
  transform: translate(-100%, -50%);
  transition: transform 1s cubic-bezier(0.22, 1, 0.36, 1);
  pointer-events: none;
}

.text-to-speech__inputs {
  position: absolute;
  top: 19%;
  right: 8%;
  bottom: 9%;
  left: 8%;
  display: grid;
  grid-template-rows: repeat(6, minmax(0, 1fr));
}

.text-to-speech__title {
  position: relative;
  top: 12%;
  margin: 0;
  color: #553d2e;
  font-family: 'Lora', serif;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
}

.text-to-speech__inputs input {
  width: 100%;
  min-width: 0;
  height: 100%;
  padding: 0;
  border: 0;
  border-radius: 0;
  outline: none;
  background: transparent;
  box-shadow: none;
  color: #553d2e;
  font-family: 'Lora', serif;
  font-size: 14px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 8' preserveAspectRatio='none'%3E%3Cpath d='M1 4.1 C18 3.3 27 4.7 43 4 C60 3.3 68 4.6 85 3.9 S111 4.4 128 3.8 S155 4.7 173 3.9 S202 4.4 220 3.7 S250 4.6 269 3.9 S287 4.1 299 3.8' fill='none' stroke='%2375471f' stroke-opacity='.72' stroke-width='1.15' stroke-linecap='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: left bottom 3px;
  background-size: 100% 8px;
}

.text-to-speech__inputs input:focus {
  outline: none;
}

.is-open .text-to-speech__list {
  transform: translate(0, -50%);
  pointer-events: auto;
}

.text-to-speech__toggle {
  position: absolute;
  top: 46%;
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
