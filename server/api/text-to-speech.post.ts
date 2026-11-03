import { MsEdgeTTS, OUTPUT_FORMAT } from 'msedge-tts'

export default defineEventHandler(async (event) => {
  const body = await readBody<{ message?: string }>(event)
  const message = typeof body?.message === 'string' ? body.message.trim() : ''

  if (!message) {
    throw createError({ statusCode: 400, statusMessage: 'message không được để trống.' })
  }
  if (message.length > 5000) {
    throw createError({ statusCode: 413, statusMessage: 'message quá dài.' })
  }

  const tts = new MsEdgeTTS({ connectionTimeoutMs: 10000, synthesisTimeoutMs: 60000 })
  try {
    await tts.setMetadata('vi-VN-HoaiMyNeural', OUTPUT_FORMAT.WEBM_24KHZ_16BIT_MONO_OPUS)
    const { audioStream } = await tts.toStream(escapeXml(message))
    const chunks: Buffer[] = []

    await new Promise<void>((resolve, reject) => {
      audioStream.on('data', (chunk: Buffer) => chunks.push(Buffer.from(chunk)))
      audioStream.on('end', resolve)
      audioStream.on('close', resolve)
      audioStream.on('error', reject)
    })

    const audio = Buffer.concat(chunks)
    if (!audio.length) throw new Error('TTS returned an empty audio stream.')

    setHeader(event, 'Content-Type', 'audio/webm')
    setHeader(event, 'Cache-Control', 'no-store')
    return audio
  } catch (error) {
    console.error('[text-to-speech] Tạo audio thất bại:', error)
    throw createError({ statusCode: 502, statusMessage: 'Không thể chuyển văn bản thành giọng nói.' })
  }
})

function escapeXml(value: string) {
  return value.replace(/[<>&"']/g, (character) => ({
    '<': '&lt;',
    '>': '&gt;',
    '&': '&amp;',
    '"': '&quot;',
    "'": '&apos;'
  })[character]!)
}
