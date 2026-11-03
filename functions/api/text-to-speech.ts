interface FunctionEnvironment {
  TTS_API_URL?: string
}

interface PagesFunctionContext {
  request: Request
  env: FunctionEnvironment
}

/**
 * Cloudflare Pages Function for POST /api/text-to-speech.
 * The actual msedge-tts synthesis runs on a Node.js backend; this function
 * forwards the request and streams the audio response back to the browser.
 */
export async function onRequestPost({ request, env }: PagesFunctionContext) {
  const upstreamUrl = env.TTS_API_URL?.trim()
  if (!upstreamUrl) {
    return Response.json(
      { message: 'Cloudflare Pages is missing the TTS_API_URL environment variable.' },
      { status: 503, headers: { 'Cache-Control': 'no-store' } }
    )
  }

  let body: { message?: unknown }
  try {
    body = await request.json()
  } catch {
    return Response.json({ message: 'Request body must be valid JSON.' }, { status: 400 })
  }

  if (typeof body.message !== 'string' || !body.message.trim()) {
    return Response.json({ message: 'message không được để trống.' }, { status: 400 })
  }
  if (body.message.length > 5000) {
    return Response.json({ message: 'message quá dài.' }, { status: 413 })
  }

  try {
    const upstreamResponse = await fetch(upstreamUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: body.message })
    })

    const headers = new Headers()
    const contentType = upstreamResponse.headers.get('Content-Type')
    if (contentType) headers.set('Content-Type', contentType)
    headers.set('Cache-Control', 'no-store')

    return new Response(upstreamResponse.body, {
      status: upstreamResponse.status,
      headers
    })
  } catch (error) {
    console.error('[text-to-speech] Upstream request failed:', error)
    return Response.json(
      { message: 'Không kết nối được tới dịch vụ chuyển văn bản thành giọng nói.' },
      { status: 502, headers: { 'Cache-Control': 'no-store' } }
    )
  }
}
