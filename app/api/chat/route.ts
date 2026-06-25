import { NextRequest, NextResponse } from 'next/server'

const N8N_URL = process.env.N8N_WEBHOOK_URL

export async function POST(req: NextRequest) {
  if (!N8N_URL) {
    return NextResponse.json({ error: 'Service indisponible' }, { status: 503 })
  }

  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Corps de requête invalide' }, { status: 400 })
  }

  const { sessionId, chatInput } = body

  if (typeof sessionId !== 'string' || sessionId.length === 0 || sessionId.length > 128) {
    return NextResponse.json({ error: 'SessionId invalide' }, { status: 400 })
  }

  if (typeof chatInput !== 'string' || chatInput.trim().length === 0) {
    return NextResponse.json({ error: 'Message vide' }, { status: 400 })
  }

  if (chatInput.length > 2000) {
    return NextResponse.json({ error: 'Message trop long (max 2 000 caractères)' }, { status: 400 })
  }

  try {
    const upstream = await fetch(N8N_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'CF-Access-Client-Id': process.env.CF_ACCESS_CLIENT_ID ?? '',
        'CF-Access-Client-Secret': process.env.CF_ACCESS_CLIENT_SECRET ?? '',
      },
      body: JSON.stringify({ chatInput: chatInput.trim(), sessionId }),
      signal: AbortSignal.timeout(30_000),
    })

    if (!upstream.ok) {
      return NextResponse.json({ error: 'Erreur du service de messagerie' }, { status: 502 })
    }

    const data: unknown = await upstream.json()
    return NextResponse.json(data)
  } catch (err) {
    const isTimeout = err instanceof Error && err.name === 'TimeoutError'
    return NextResponse.json(
      { error: isTimeout ? 'Délai dépassé, veuillez réessayer' : 'Erreur de connexion' },
      { status: isTimeout ? 504 : 502 }
    )
  }
}
