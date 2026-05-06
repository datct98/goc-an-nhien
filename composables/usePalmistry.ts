import { ref } from 'vue'

export interface PalmLine {
  name: string
  chineseName: string
  color: string
  position?: string
  description: string
  analysis: string
  warning: string
  /** Tọa độ tương đối [x%, y%] (0-100) để vẽ đường lên ảnh bàn tay */
  points?: Array<[number, number]>
}

export interface MountDetail {
  name: string
  chineseName?: string
  position?: string
  description: string
  meaning?: string
}

export interface SpecialMark {
  name: string
  position?: string
  description: string
  meaning: string
}

export interface CareerAnalysis {
  summary: string
  peakAge?: string
  suitableFields?: string[]
  advice?: string
}

export interface LoveAnalysis {
  summary: string
  personality?: string
  idealPartner?: string
  advice?: string
}

export interface HealthAnalysis {
  summary: string
  risks?: string[]
  advice?: string
}

export interface PalmistryResult {
  handShape: string
  handShapeElement: string
  handShapeDescription: string
  lines: PalmLine[]
  mounts: MountDetail[] | null
  specialMarks: SpecialMark[]
  overall: string
  strengths: string[]
  warnings: string[]
  advice: string
  career?: CareerAnalysis
  love?: LoveAnalysis
  health?: HealthAnalysis
}

const result = ref<PalmistryResult | null>(null)
const isLoading = ref(false)
const error = ref<string | null>(null)
const imagePreview = ref<string | null>(null)

export function usePalmistry() {
  const { $api } = useNuxtApp()

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = () => {
        const base64 = (reader.result as string).split(',')[1]
        resolve(base64)
      }
      reader.onerror = reject
      reader.readAsDataURL(file)
    })
  }

  const analyzePalm = async (imageFile: File, gender: 'male' | 'female') => {
    isLoading.value = true
    error.value = null
    result.value = null

    try {
      imagePreview.value = URL.createObjectURL(imageFile)
      const base64Image = await fileToBase64(imageFile)

      const response = await $api.sendPostApi(
        'palmistry/analyze',
        { imageBase64: base64Image, mimeType: imageFile.type, gender },
        'default'
      )

      if (!response?.data) {
        throw new Error('Không nhận được kết quả. Vui lòng thử lại.')
      }

      result.value = response.data as PalmistryResult
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Có lỗi xảy ra khi phân tích. Vui lòng thử lại.'
      error.value = message
      console.error('Palmistry analysis error:', err)
    } finally {
      isLoading.value = false
    }
  }

  const reset = () => {
    result.value = null
    error.value = null
    isLoading.value = false
    if (imagePreview.value) {
      URL.revokeObjectURL(imagePreview.value)
      imagePreview.value = null
    }
  }

  return { result, isLoading, error, imagePreview, analyzePalm, reset }
}
