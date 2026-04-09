<template>
  <div class="tuvi-page">
    <!-- Stars -->
    <div class="tuvi-stars">
      <div v-for="s in stars" :key="s.id" class="tuvi-star"
        :style="{ left: s.x+'%', top: s.y+'%', width: s.sz+'px', height: s.sz+'px', '--d': s.d+'s', opacity: s.op }" />
    </div>
    <div class="tuvi-nebula n1" />
    <div class="tuvi-nebula n2" />

    <!-- Header -->
    <header class="tuvi-header">
      <button class="tuvi-back" @click="goBack">‹</button>
      <div>
        <div class="tuvi-header-title">✨ Tử Vi</div>
        <div class="tuvi-header-sub">Khám phá vận mệnh của bạn</div>
      </div>
    </header>

    <!-- Zodiac Wheel -->
    <div class="zodiac-wheel-wrapper">
      <div class="zodiac-wheel">
        <div class="zodiac-ring r1" />
        <div class="zodiac-ring r2" />
        <div v-for="(animal, idx) in zodiacAnimals" :key="animal.name"
          class="zodiac-animal" :class="{ 'active-animal': highlightedAnimal === animal.name }"
          :style="getAnimalStyle(idx)" :title="animal.name">{{ animal.emoji }}</div>
        <div class="zodiac-center-glow">{{ resultZodiacEmoji }}</div>
      </div>
    </div>

    <!-- Mode Tabs -->
    <div class="tuvi-mode-tabs">
      <button v-for="m in modes" :key="m.id" class="tuvi-mode-tab" :class="{ active: mode === m.id }"
        @click="mode = m.id; resultData = null">{{ m.label }}</button>
    </div>

    <!-- Form -->
    <div v-if="!resultData" class="tuvi-form-card">
      <div class="form-section-label">Ngày sinh</div>
      <div class="date-row">
        <div class="tuvi-select-wrap">
          <select class="tuvi-select" v-model="form.day">
            <option value="" disabled>Ngày</option>
            <option v-for="d in 31" :key="d" :value="d">{{ d }}</option>
          </select>
          <span class="select-arrow">▾</span>
        </div>
        <div class="tuvi-select-wrap">
          <select class="tuvi-select" v-model="form.month">
            <option value="" disabled>Tháng</option>
            <option v-for="m in 12" :key="m" :value="m">Tháng {{ m }}</option>
          </select>
          <span class="select-arrow">▾</span>
        </div>
        <div class="tuvi-select-wrap">
          <select class="tuvi-select" v-model="form.year">
            <option value="" disabled>Năm</option>
            <option v-for="y in years" :key="y" :value="y">{{ y }}</option>
          </select>
          <span class="select-arrow">▾</span>
        </div>
      </div>

      <div class="form-section-label">Giới tính</div>
      <div class="gender-toggle">
        <button class="gender-btn" :class="{ active: form.gender === 'male' }" @click="form.gender = 'male'">♂ Nam</button>
        <button class="gender-btn" :class="{ active: form.gender === 'female' }" @click="form.gender = 'female'">♀ Nữ</button>
      </div>

      <div class="form-section-label">Giờ sinh</div>
      <div class="tuvi-select-wrap">
        <select class="tuvi-select" v-model="form.timeIndex">
          <option :value="null" disabled>Chọn giờ sinh...</option>
          <option v-for="t in timeIndices" :key="t.index" :value="t.index">{{ t.name }} ({{ t.time }})</option>
        </select>
        <span class="select-arrow">▾</span>
      </div>

      <!-- Extra fields theo mode -->
      <div v-if="mode === 'yearly'">
        <div class="form-section-label">Năm xem</div>
        <div class="tuvi-select-wrap">
          <select class="tuvi-select" v-model="form.viewYear">
            <option v-for="y in viewYears" :key="y" :value="y">{{ y }}</option>
          </select>
          <span class="select-arrow">▾</span>
        </div>
      </div>
      <div v-if="mode === 'monthly'">
        <div class="form-section-label">Tháng xem</div>
        <div class="date-row">
          <div class="tuvi-select-wrap">
            <select class="tuvi-select" v-model="form.viewYear">
              <option v-for="y in viewYears" :key="y" :value="y">{{ y }}</option>
            </select>
            <span class="select-arrow">▾</span>
          </div>
          <div class="tuvi-select-wrap">
            <select class="tuvi-select" v-model="form.viewMonth">
              <option v-for="m in 12" :key="m" :value="m">Tháng {{ m }}</option>
            </select>
            <span class="select-arrow">▾</span>
          </div>
        </div>
      </div>
      <div v-if="mode === 'daily'">
        <div class="form-section-label">Ngày xem</div>
        <input type="date" class="tuvi-date-input" v-model="form.viewDate" />
      </div>

      <button class="tuvi-submit-btn" @click="calculate" :disabled="!isFormValid || loading">
        <span v-if="loading" class="tuvi-spinner"></span>
        <span v-else>🔮 {{ submitLabel }}</span>
      </button>
      <p v-if="error" class="tuvi-error">{{ error }}</p>
    </div>

    <!-- Result -->
    <div v-if="resultData" class="tuvi-result">
      <div class="result-header">
        <div class="result-zodiac-icon">{{ resultZodiacEmoji }}</div>
        <div>
          <div class="result-zodiac-name">{{ resultData.zodiac }} · {{ resultData.sign }}</div>
          <div class="result-zodiac-year">{{ resultData.lunarDate }}</div>
        </div>
      </div>
      <div class="result-divider"></div>

      <div class="result-stat-row">
        <div class="result-stat">
          <div class="result-stat-label">NGŨ HÀNH CỤC</div>
          <div class="result-stat-value">{{ resultData.fiveElementsClass }}</div>
        </div>
        <div v-if="resultData.soul" class="result-stat">
          <div class="result-stat-label">MỆNH CHỦ</div>
          <div class="result-stat-value">{{ resultData.soul }}</div>
        </div>
        <div v-if="resultData.body" class="result-stat">
          <div class="result-stat-label">THÂN CHỦ</div>
          <div class="result-stat-value">{{ resultData.body }}</div>
        </div>
        <div v-if="resultData.type" class="result-stat">
          <div class="result-stat-label">LOẠI XEM</div>
          <div class="result-stat-value">{{ modeLabel }}</div>
        </div>
      </div>

      <!-- 12 Cung -->
      <div v-if="resultData.palaces && resultData.palaces.length">
        <div class="result-divider"></div>
        <div class="form-section-label">12 Cung</div>
        <div class="palaces-grid">
          <div v-for="p in resultData.palaces" :key="p.name" class="palace-card">
            <div class="palace-name">{{ p.name }}</div>
            <div class="palace-stem">{{ p.heavenlyStem }}{{ p.earthlyBranch }}</div>
            <div v-if="p.majorStars && p.majorStars.length" class="palace-stars">
              <span v-for="s in p.majorStars" :key="s" class="star-tag major">{{ s }}</span>
            </div>
            <div v-if="p.minorStars && p.minorStars.length" class="palace-stars">
              <span v-for="s in p.minorStars" :key="s" class="star-tag minor">{{ s }}</span>
            </div>
            <div v-if="p.decadal" class="palace-decadal">{{ p.decadal.range[0] }}-{{ p.decadal.range[1] }}</div>
          </div>
        </div>
      </div>

      <!-- Diễn giải AI -->
      <div class="result-divider"></div>
      <div class="form-section-label">🔮 Diễn giải</div>
      <div class="result-interpretation" v-html="formattedInterpretation"></div>

      <button class="tuvi-reset-btn" @click="resultData = null">← Xem lại</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const router = useRouter()
const config = useRuntimeConfig()
const apiUrl = config.public.horoscopeApiUrl || 'http://localhost:8084/api/horoscope'

const loading = ref(false)
const error = ref(null)
const resultData = ref(null)
const highlightedAnimal = ref(null)

const currentYear = new Date().getFullYear()
const years = Array.from({ length: 100 }, (_, i) => currentYear - i)
const viewYears = Array.from({ length: 10 }, (_, i) => currentYear + 2 - i)

const mode = ref('trondoi')
const modes = [
  { id: 'trondoi', label: 'Trọn Đời' },
  { id: 'yearly', label: 'Lưu Niên' },
  { id: 'monthly', label: 'Lưu Nguyệt' },
  { id: 'daily', label: 'Lưu Nhật' },
]

const form = ref({
  day: '', month: '', year: '', gender: 'male', timeIndex: null,
  viewYear: currentYear, viewMonth: new Date().getMonth() + 1,
  viewDate: new Date().toISOString().split('T')[0],
})

const timeIndices = [
  { index: 0, name: 'Tý', time: '23:00-01:00' },
  { index: 1, name: 'Sửu', time: '01:00-03:00' },
  { index: 2, name: 'Dần', time: '03:00-05:00' },
  { index: 3, name: 'Mão', time: '05:00-07:00' },
  { index: 4, name: 'Thìn', time: '07:00-09:00' },
  { index: 5, name: 'Tỵ', time: '09:00-11:00' },
  { index: 6, name: 'Ngọ', time: '11:00-13:00' },
  { index: 7, name: 'Mùi', time: '13:00-15:00' },
  { index: 8, name: 'Thân', time: '15:00-17:00' },
  { index: 9, name: 'Dậu', time: '17:00-19:00' },
  { index: 10, name: 'Tuất', time: '19:00-21:00' },
  { index: 11, name: 'Hợi', time: '21:00-23:00' },
]

const zodiacAnimals = [
  { name: 'Tý', emoji: '🐭' }, { name: 'Sửu', emoji: '🐂' },
  { name: 'Dần', emoji: '🐯' }, { name: 'Mão', emoji: '🐰' },
  { name: 'Thìn', emoji: '🐉' }, { name: 'Tị', emoji: '🐍' },
  { name: 'Ngọ', emoji: '🐴' }, { name: 'Mùi', emoji: '🐑' },
  { name: 'Thân', emoji: '🐒' }, { name: 'Dậu', emoji: '🐓' },
  { name: 'Tuất', emoji: '🐕' }, { name: 'Hợi', emoji: '🐗' },
]

const stars = Array.from({ length: 50 }, (_, i) => ({
  id: i, x: Math.random()*100, y: Math.random()*100,
  sz: Math.random()*2+0.5, d: Math.random()*3+2,
  op: (Math.random()*0.4+0.1).toFixed(2)
}))

const isFormValid = computed(() => form.value.day && form.value.month && form.value.year && form.value.timeIndex !== null)
const submitLabel = computed(() => ({ trondoi: 'Xem Trọn Đời', yearly: 'Xem Lưu Niên', monthly: 'Xem Lưu Nguyệt', daily: 'Xem Lưu Nhật' })[mode.value])
const modeLabel = computed(() => modes.find(m => m.id === mode.value)?.label || '')

const resultZodiacEmoji = computed(() => {
  if (!resultData.value?.zodiac) return '🌟'
  return zodiacAnimals.find(a => resultData.value.zodiac.includes(a.name))?.emoji || '🌟'
})

const formattedInterpretation = computed(() => {
  if (!resultData.value?.interpretation) return ''
  return resultData.value.interpretation.replace(/\n/g, '<br/>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
})

const getAnimalStyle = (idx) => {
  const angle = (idx / 12) * 360 - 90
  const rad = angle * (Math.PI / 180)
  const r = 80
  return {
    transform: `translate(calc(-50% + ${Math.cos(rad)*r}px), calc(-50% + ${Math.sin(rad)*r}px))`,
    '--pos': `translate(calc(-50% + ${Math.cos(rad)*r}px), calc(-50% + ${Math.sin(rad)*r}px))`,
  }
}

const calculate = async () => {
  if (!isFormValid.value) return
  loading.value = true
  error.value = null
  try {
    const baseBody = {
      name: 'user',
      birthDate: `${form.value.year}-${form.value.month}-${form.value.day}`,
      timeIndex: form.value.timeIndex,
      gender: form.value.gender,
      fixLeap: true,
    }
    let data
    if (mode.value === 'trondoi') {
      const res = await axios.post(apiUrl, baseBody)
      data = res.data
    } else {
      const body = { ...baseBody, type: mode.value === 'yearly' ? 'yearly' : mode.value === 'monthly' ? 'monthly' : 'daily' }
      if (mode.value === 'yearly') body.year = form.value.viewYear
      else if (mode.value === 'monthly') { body.year = form.value.viewYear; body.month = form.value.viewMonth }
      else {
        const d = new Date(form.value.viewDate)
        body.date = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`
      }
      const res = await axios.post(`${apiUrl}/forecast`, body)
      data = res.data
    }
    resultData.value = data
    if (data.zodiac) highlightedAnimal.value = zodiacAnimals.find(a => data.zodiac.includes(a.name))?.name || null
  } catch (err) {
    console.error('Horoscope API error:', err)
    error.value = err.response?.data?.error || 'Có lỗi xảy ra, vui lòng thử lại'
  } finally {
    loading.value = false
  }
}

const goBack = () => router.push('/huyenHoc')
</script>

<style scoped src="./index.css"></style>
