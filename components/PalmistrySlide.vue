<template>
  <div class="palmistry-slide">
    <p class="palmistry-title"><span>✋ Xem Chỉ Tay</span></p>

    <!-- ─── LOADING ─────────────────────────────────────── -->
    <div v-if="isLoading" class="palmistry-loading">
      <div class="palmistry-spinner-ring">
        <div class="spinner-inner" />
      </div>
      <p class="palmistry-loading-title">Đang Luận Giải Vận Mệnh...</p>
      <p class="palmistry-loading-sub">Các bậc thầy đang kết hợp Kinh Dịch và Đông y<br />để soi thấu bàn tay của bạn.</p>
      <p class="palmistry-quote">{{ currentQuote }}</p>
    </div>

    <!-- ─── ERROR ────────────────────────────────────────── -->
    <div v-else-if="error && !result" class="palmistry-error">
      <div class="palmistry-error-icon">😔</div>
      <p class="palmistry-error-msg">{{ error }}</p>
      <button class="btn-palmistry" @click="handleReset">Thử lại</button>
    </div>

    <!-- ─── RESULT ───────────────────────────────────────── -->
    <div v-else-if="result" class="palmistry-result">

      <!-- User's palm image -->
      <div v-if="imagePreview" class="palm-photo-section">
        <img :src="imagePreview" alt="Ảnh bàn tay" class="palm-photo-img" />
      </div>

      <!-- Hand shape overview -->
      <div class="palmistry-card palmistry-hand-overview">
        <div class="palmistry-overview-header">
          <span class="palmistry-element-badge" :class="`element-${elementClass}`">
            {{ result.handShapeElement }}
          </span>
          <p class="palmistry-overview-shape">{{ result.handShape }}</p>
        </div>
        <p class="palmistry-text">{{ result.handShapeDescription }}</p>
      </div>

      <!-- Palm lines accordion -->
      <div class="palmistry-card">
        <p class="palmistry-section-title">〰️ Các Đường Chỉ Tay</p>
        <Accordion v-model:value="activeAccordion">
          <AccordionPanel
            v-for="(line, i) in result.lines"
            :key="i"
            :value="String(i)"
          >
            <AccordionHeader>
              <span class="palmistry-line-header">
                <span
                  class="palmistry-legend-dot"
                  :style="{ backgroundColor: line.color, boxShadow: `0 0 8px ${line.color}60` }"
                />
                <span>{{ line.name }}</span>
                <span class="palmistry-chinese-name">{{ line.chineseName }}</span>
              </span>
            </AccordionHeader>
            <AccordionContent>
              <div class="palmistry-line-content">
                <p class="palmistry-text"><b>Nhận xét:</b> {{ line.description }}</p>
                <p class="palmistry-text"><b>Luận giải:</b> {{ line.analysis }}</p>
                <p v-if="line.warning" class="palmistry-warning">⚠️ {{ line.warning }}</p>
              </div>
            </AccordionContent>
          </AccordionPanel>
        </Accordion>
      </div>

      <!-- Mounts -->
      <div v-if="result.mounts" class="palmistry-card">
        <p class="palmistry-section-title">⛰️ Cửu Cung Bàn Tay</p>
        <p class="palmistry-text">{{ result.mounts }}</p>
      </div>

      <!-- Special marks -->
      <div v-if="result.specialMarks?.length" class="palmistry-card">
        <p class="palmistry-section-title">✨ Dấu Hiệu Đặc Biệt</p>
        <div v-for="(mark, i) in result.specialMarks" :key="i" class="palmistry-mark">
          <p class="palmistry-text"><b>{{ mark.name }}:</b> {{ mark.description }}</p>
          <p class="palmistry-text palmistry-mark-meaning">{{ mark.meaning }}</p>
        </div>
      </div>

      <!-- Overall synthesis -->
      <div class="palmistry-card palmistry-overall-card">
        <p class="palmistry-section-title">🏮 Luận Giải Tổng Hợp</p>
        <p class="palmistry-text palmistry-overall-text">{{ result.overall }}</p>

        <div class="palmistry-two-col">
          <div class="palmistry-strengths-box">
            <p class="palmistry-sub-title">⚡ Thiên Phú</p>
            <ul class="palmistry-list">
              <li v-for="(s, i) in result.strengths" :key="i" class="strength-item">{{ s }}</li>
            </ul>
          </div>
          <div class="palmistry-warnings-box">
            <p class="palmistry-sub-title">⚠️ Cảnh Báo</p>
            <ul class="palmistry-list">
              <li v-for="(w, i) in result.warnings" :key="i" class="warning-item">{{ w }}</li>
            </ul>
          </div>
        </div>

        <div class="palmistry-advice-block">
          <p class="palmistry-sub-title">💡 Lời Khuyên Kinh Dịch</p>
          <div class="palmistry-advice">{{ result.advice }}</div>
        </div>
      </div>

      <p class="palmistry-disclaimer">
        ⚠️ Luận giải mang tính tham khảo theo tướng thủ học truyền thống,
        không thay thế tư vấn y khoa hay pháp lý.
      </p>

      <button class="btn-palmistry btn-reset" @click="handleReset">
        🔄 Xem Bàn Tay Khác
      </button>
    </div>

    <!-- ─── INPUT ─────────────────────────────────────────── -->
    <div v-else class="palmistry-input-section">
      <p class="palmistry-input-label">Chọn giới tính</p>
      <div class="gender-container">
        <button class="gender-btn" :class="{ active: palmGender === 'male' }" @click="palmGender = 'male'">
          <span class="gender-icon">♂</span> Nam
        </button>
        <button class="gender-btn" :class="{ active: palmGender === 'female' }" @click="palmGender = 'female'">
          <span class="gender-icon">♀</span> Nữ
        </button>
      </div>

      <p class="palmistry-input-label">Ảnh lòng bàn tay</p>
      <div
        class="palmistry-upload"
        :class="{ 'has-image': localPreview }"
        @click="triggerUpload"
      >
        <template v-if="!localPreview">
          <div class="palmistry-upload-icon">🤚</div>
          <p class="palmistry-upload-text">Nhấn để chụp hoặc chọn ảnh</p>
          <p class="palmistry-upload-hint">Chụp rõ lòng bàn tay, đủ ánh sáng</p>
        </template>
        <template v-else>
          <div class="palmistry-preview-wrap">
            <img :src="localPreview" alt="Preview" class="palmistry-preview-img" />
            <button class="palmistry-preview-remove" @click.stop="removeImage">✕</button>
          </div>
        </template>
      </div>
      <input
        ref="fileInput"
        type="file"
        accept="image/*"
        capture="environment"
        style="display:none"
        @change="onFileSelected"
      />

      <div class="palmistry-tips">
        <p class="palmistry-tips-title">📷 Mẹo chụp ảnh</p>
        <ul>
          <li>Xòe thẳng bàn tay, không cong ngón</li>
          <li>Chụp dưới ánh sáng tốt, tránh bóng đổ</li>
          <li>Đảm bảo thấy rõ lòng bàn tay</li>
        </ul>
      </div>
    </div>

    <!-- Submit -->
    <div v-if="!result && !isLoading" class="palmistry-submit-wrap">
      <button class="btn-palmistry" :disabled="!canSubmit" @click="handleSubmit">
        ✨ Khai Mở Huyền Cơ
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePalmistry } from '~/composables/usePalmistry'

const { result, isLoading, error, imagePreview, analyzePalm, reset } = usePalmistry()

const palmGender = ref<'male' | 'female' | null>(null)
const selectedFile = ref<File | null>(null)
const localPreview = ref<string | null>(null)
const fileInput = ref<HTMLInputElement | null>(null)
const activeAccordion = ref<string | undefined>(undefined)

const elementClass = computed(() => {
  const map: Record<string, string> = {
    'Kim': 'kim', 'Mộc': 'moc', 'Thủy': 'thuy', 'Hỏa': 'hoa', 'Thổ': 'tho'
  }
  return map[result.value?.handShapeElement ?? ''] ?? 'kim'
})

const quotes = [
  '「Tứ tượng sinh bát quái, vận số nằm trong lòng bàn tay」',
  '「Thiên cơ bất khả lộ, chỉ văn tự hiển lộ」',
  '「Nhất mệnh nhì vận tam phong thủy」',
  '「Tướng tùy tâm sinh, tâm tùy tướng diệt」',
  '「Vạn pháp quy tâm, tâm tại chưởng trung」',
]
const currentQuoteIndex = ref(0)
const currentQuote = computed(() => quotes[currentQuoteIndex.value])
let quoteInterval: ReturnType<typeof setInterval> | null = null

watch(isLoading, (loading) => {
  if (loading) {
    currentQuoteIndex.value = 0
    quoteInterval = setInterval(() => {
      currentQuoteIndex.value = (currentQuoteIndex.value + 1) % quotes.length
    }, 3000)
  } else if (quoteInterval) {
    clearInterval(quoteInterval)
    quoteInterval = null
  }
})

const canSubmit = computed(() => palmGender.value && selectedFile.value && !isLoading.value)
const triggerUpload = () => fileInput.value?.click()

const onFileSelected = (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0]
  if (file) {
    if (file.size > 10 * 1024 * 1024) { alert('Ảnh quá lớn. Vui lòng chọn ảnh dưới 10MB.'); return }
    selectedFile.value = file
    localPreview.value = URL.createObjectURL(file)
  }
}

const removeImage = () => {
  selectedFile.value = null
  if (localPreview.value) { URL.revokeObjectURL(localPreview.value); localPreview.value = null }
  if (fileInput.value) fileInput.value.value = ''
}

const handleSubmit = async () => {
  if (!selectedFile.value || !palmGender.value) return
  await analyzePalm(selectedFile.value, palmGender.value)
}

const handleReset = () => {
  reset(); removeImage()
  palmGender.value = null
  activeAccordion.value = undefined
}

onUnmounted(() => {
  if (quoteInterval) clearInterval(quoteInterval)
  if (localPreview.value) URL.revokeObjectURL(localPreview.value)
})
</script>

<style scoped>
.palmistry-slide { padding: 0 16px 80px; }

.palmistry-title {
  font-size: 1.25rem; font-weight: 800; color: #e6ca77;
  text-align: center; margin: 20px 0 16px; letter-spacing: 0.5px;
}

/* Loading */
.palmistry-loading { text-align: center; padding: 48px 20px; }
.palmistry-spinner-ring {
  width: 56px; height: 56px; border-radius: 50%;
  border: 3px solid rgba(212,175,55,0.12); border-top-color: #d4af37;
  animation: spin 1.1s linear infinite; margin: 0 auto 20px; position: relative;
}
.spinner-inner {
  position: absolute; inset: 6px; border-radius: 50%;
  border: 2px solid rgba(212,175,55,0.06); border-bottom-color: rgba(212,175,55,0.5);
  animation: spin 0.7s linear infinite reverse;
}
@keyframes spin { to { transform: rotate(360deg); } }
.palmistry-loading-title { color: #d4af37; font-size: 1.05rem; font-weight: 700; margin: 0 0 8px; }
.palmistry-loading-sub { color: rgba(255,255,255,0.38); font-size: 0.8rem; line-height: 1.5; margin: 0; font-style: italic; }
.palmistry-quote { color: rgba(212,175,55,0.45); font-size: 0.76rem; margin-top: 20px; font-style: italic; }

/* Error */
.palmistry-error { text-align: center; padding: 48px 20px; }
.palmistry-error-icon { font-size: 2.5rem; margin-bottom: 12px; }
.palmistry-error-msg { color: #e8a87c; font-size: 0.9rem; margin-bottom: 20px; }

/* Result */
.palmistry-result { animation: fadeUp 0.5s ease; }
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* Tab toggle */
.palm-tabs {
  display: flex; gap: 8px; margin-bottom: 14px;
  background: rgba(5,5,15,0.5);
  padding: 5px; border-radius: 14px;
  border: 1px solid rgba(212,175,55,0.1);
}

.palm-tab {
  flex: 1; padding: 9px 4px; border: none; border-radius: 10px;
  font-size: 0.8rem; font-weight: 600; cursor: pointer;
  background: transparent; color: rgba(255,255,255,0.38);
  transition: all 0.2s ease;
}

.palm-tab.active {
  background: rgba(212,175,55,0.14);
  color: #e6ca77;
  box-shadow: 0 0 12px rgba(212,175,55,0.1);
}

/* Photo */
.palm-photo-section { margin-bottom: 14px; border-radius: 14px; overflow: hidden; border: 1px solid rgba(212,175,55,0.2); }
.palm-photo-img { width: 100%; display: block; }

/* Cards */
.palmistry-card {
  background: rgba(10,12,25,0.6); border: 1px solid rgba(212,175,55,0.12);
  border-radius: 16px; padding: 16px; margin-bottom: 12px;
  backdrop-filter: blur(8px);
}

/* Hand overview */
.palmistry-overview-header { display: flex; align-items: center; gap: 10px; margin-bottom: 8px; }
.palmistry-element-badge {
  display: inline-flex; align-items: center; padding: 3px 12px;
  border-radius: 20px; font-weight: 800; font-size: 0.82rem; flex-shrink: 0;
}
.element-kim  { background: rgba(192,192,192,0.15); color: #c8c8c8; border: 1px solid rgba(192,192,192,0.3); }
.element-moc  { background: rgba(100,200,80,0.15);  color: #7dd16a; border: 1px solid rgba(100,200,80,0.3); }
.element-thuy { background: rgba(60,150,255,0.15);  color: #70b0ff; border: 1px solid rgba(60,150,255,0.3); }
.element-hoa  { background: rgba(255,80,60,0.15);   color: #ff7060; border: 1px solid rgba(255,80,60,0.3); }
.element-tho  { background: rgba(212,175,55,0.15);  color: #d4af37; border: 1px solid rgba(212,175,55,0.3); }

.palmistry-overview-shape { color: #e6ca77; font-size: 0.9rem; font-weight: 700; margin: 0; }

.palmistry-section-title { color: #d4af37; font-size: 0.92rem; font-weight: 700; margin: 0 0 12px; }
.palmistry-sub-title { color: rgba(212,175,55,0.8); font-size: 0.82rem; font-weight: 600; margin: 14px 0 6px; }
.palmistry-text { color: rgba(255,255,255,0.62); font-size: 0.82rem; line-height: 1.65; margin: 4px 0; }
.palmistry-warning {
  color: #e8a87c; font-size: 0.8rem; line-height: 1.5; margin: 6px 0 0;
  padding: 6px 10px; background: rgba(232,168,124,0.08); border-radius: 8px;
  border-left: 2px solid rgba(232,168,124,0.4);
}

.palmistry-line-header { display: flex; align-items: center; gap: 8px; color: #e6ca77; font-size: 0.88rem; }
.palmistry-legend-dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; }
.palmistry-chinese-name { color: rgba(255,255,255,0.3); font-size: 0.75rem; margin-left: 2px; }

.palmistry-mark { padding: 8px 0; border-bottom: 1px solid rgba(212,175,55,0.07); }
.palmistry-mark:last-child { border-bottom: none; }
.palmistry-mark-meaning { color: rgba(212,175,55,0.55); font-style: italic; }

.palmistry-overall-text { margin-bottom: 12px; }
.palmistry-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 4px; }
.palmistry-strengths-box, .palmistry-warnings-box { background: rgba(0,0,0,0.2); border-radius: 10px; padding: 10px; }
.palmistry-list { list-style: none; padding: 0; margin: 0; }
.palmistry-list li { font-size: 0.78rem; line-height: 1.6; padding: 2px 0 2px 16px; position: relative; }
.strength-item { color: rgba(130,220,160,0.85); }
.strength-item::before { content: '⚡'; position: absolute; left: 0; font-size: 0.7rem; }
.warning-item { color: #e8a87c; }
.warning-item::before { content: '⚠'; position: absolute; left: 0; font-size: 0.7rem; }
.palmistry-advice-block { margin-top: 12px; }
.palmistry-advice {
  font-size: 0.82rem; color: rgba(212,175,55,0.7); line-height: 1.65;
  padding: 12px 14px; background: rgba(212,175,55,0.05); border-radius: 10px;
  border-left: 3px solid rgba(212,175,55,0.3); font-style: italic;
}
.palmistry-disclaimer {
  text-align: center; font-size: 0.65rem; color: rgba(255,255,255,0.18);
  padding: 12px 0 4px; line-height: 1.4;
}
.btn-reset { margin-top: 8px; margin-bottom: 16px; }

/* Input */
.palmistry-input-section { padding-top: 8px; }
.palmistry-input-label { font-size: 0.82rem; font-weight: 600; color: rgba(255,255,255,0.55); margin: 18px 0 8px; }
.gender-container { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
.gender-btn {
  padding: 13px; border-radius: 12px; border: 1.5px solid rgba(212,175,55,0.2);
  background: rgba(255,255,255,0.03); color: rgba(255,255,255,0.45);
  font-size: 0.88rem; font-weight: 600; cursor: pointer; transition: all 0.2s ease;
  display: flex; align-items: center; justify-content: center; gap: 6px;
}
.gender-icon { font-size: 1.1rem; }
.gender-btn.active {
  background: rgba(212,175,55,0.12); border-color: rgba(212,175,55,0.5);
  color: #e6ca77; box-shadow: 0 0 16px rgba(212,175,55,0.1);
}

.palmistry-upload {
  border: 2px dashed rgba(212,175,55,0.25); border-radius: 14px;
  padding: 32px 16px; text-align: center; cursor: pointer;
  transition: all 0.2s ease; background: rgba(255,255,255,0.02);
}
.palmistry-upload:hover { border-color: rgba(212,175,55,0.45); background: rgba(212,175,55,0.03); }
.palmistry-upload.has-image { padding: 0; border-style: solid; border-color: rgba(212,175,55,0.35); overflow: hidden; }
.palmistry-upload-icon { font-size: 2.4rem; margin-bottom: 8px; }
.palmistry-upload-text { color: rgba(255,255,255,0.45); font-size: 0.85rem; margin: 0; }
.palmistry-upload-hint { color: rgba(255,255,255,0.25); font-size: 0.72rem; margin: 4px 0 0; }
.palmistry-preview-wrap { position: relative; }
.palmistry-preview-img { width: 100%; display: block; border-radius: 12px; }
.palmistry-preview-remove {
  position: absolute; top: 10px; right: 10px; width: 30px; height: 30px;
  border-radius: 50%; background: rgba(0,0,0,0.75); border: 1px solid rgba(255,255,255,0.15);
  color: white; font-size: 0.75rem; cursor: pointer;
  display: flex; align-items: center; justify-content: center; backdrop-filter: blur(4px);
}

.palmistry-tips {
  margin-top: 16px; padding: 12px 14px;
  background: rgba(212,175,55,0.04); border-radius: 12px;
  border: 1px solid rgba(212,175,55,0.1);
}
.palmistry-tips-title { color: rgba(212,175,55,0.6); font-size: 0.78rem; font-weight: 600; margin: 0 0 6px; }
.palmistry-tips ul { list-style: none; padding: 0; margin: 0; }
.palmistry-tips li {
  font-size: 0.75rem; color: rgba(255,255,255,0.35);
  padding: 2px 0 2px 14px; position: relative; line-height: 1.5;
}
.palmistry-tips li::before { content: '•'; position: absolute; left: 0; color: rgba(212,175,55,0.4); }

.palmistry-submit-wrap { padding: 16px 0 0; }
.btn-palmistry {
  width: 100%; padding: 15px; border: none; border-radius: 14px;
  font-size: 1rem; font-weight: 700; cursor: pointer;
  background: linear-gradient(135deg, #8b1a1a 0%, #6b0f0f 60%, #3d0808 100%);
  color: #f5e6c8; letter-spacing: 0.5px; transition: all 0.25s ease;
  position: relative; overflow: hidden;
}
.btn-palmistry::after {
  content: ''; position: absolute; inset: 0;
  background: linear-gradient(135deg, rgba(212,175,55,0.15) 0%, transparent 60%);
  pointer-events: none;
}
.btn-palmistry:hover:not(:disabled) { transform: translateY(-1px); box-shadow: 0 6px 24px rgba(139,26,26,0.5); }
.btn-palmistry:disabled { opacity: 0.35; cursor: not-allowed; }
</style>
