<template>
  <ContainerWithBackground
    :src="ASSETS.background.confession"
    custom-class="confession-scene"
    aria-label="Phòng thú tội"
    background-size="cover"
  >
    <main class="confession-page">
      <img class="confession-box" :src="ASSETS.confession.box" alt="Hòm thư Phòng Thú Tội" />
      <section v-if="!submitted" class="confession-letter" aria-label="Viết lời thú tội">
        <img class="confession-letter__paper" :src="ASSETS.confession.paper" alt="Tờ giấy viết lời thú tội" />
        <form class="confession-form" @submit.prevent="submitConfession">
          <label class="sr-only" for="confession-message">Lời thú tội của bạn</label>
          <textarea
            id="confession-message"
            v-model="message"
            maxlength="240"
            placeholder="Hãy viết điều đang ở trong lòng…"
            required
          />
          <button type="submit">Gửi lời thú tội</button>
        </form>
      </section>

      <section v-else class="confession-thanks" role="status" aria-live="polite">
        <p>Lời thú tội đã được gửi vào hòm thư.</p>
        <button type="button" @click="startAgain">Viết lời khác</button>
      </section>

      
    </main>
  </ContainerWithBackground>
</template>

<script setup>
import { ref } from 'vue'
import ContainerWithBackground from '~/components/layout/ContainerWithBackground.vue'
import { ASSETS } from '~/config/assets'

const message = ref('')
const submitted = ref(false)

const submitConfession = () => {
  submitted.value = true
  message.value = ''
}

const startAgain = () => {
  submitted.value = false
}
</script>

<style scoped src="./index.css"></style>
