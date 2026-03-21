import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'

/**
 * Portal auto-login endpoint.
 * GET /api/portal-auth?key=PAYLOAD_API_KEY
 *
 * Verifies the API key, generates a Payload JWT for that user using
 * Payload's internal auth, sets the cookie, and redirects to /admin.
 */
export async function GET(req: NextRequest) {
  const key = req.nextUrl.searchParams.get('key')
  if (!key) {
    return NextResponse.json({ error: 'Missing key parameter' }, { status: 400 })
  }

  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || req.nextUrl.origin

    // Verify the API key via Payload REST API
    const verifyResponse = await fetch(`${baseUrl}/api/users/me`, {
      headers: { 'Authorization': `users API-Key ${key}` },
    })

    if (!verifyResponse.ok) {
      return NextResponse.json({ error: 'Invalid API key' }, { status: 401 })
    }

    const userData = await verifyResponse.json()
    if (!userData?.user?.id) {
      return NextResponse.json({ error: 'Invalid API key' }, { status: 401 })
    }

    // Get Payload instance and generate a token using its internal auth
    const payload = await getPayload({ config })
    const user = await payload.findByID({ collection: 'users', id: userData.user.id })

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 401 })
    }

    // Use Payload's built-in token generation
    // @ts-ignore — accessing internal auth method
    const token = payload.generatePayloadCookie
      ? undefined  // fallback below
      : undefined

    // Generate JWT using the same secret Payload uses
    const jwt = await import('jsonwebtoken')
    const secret = process.env.PAYLOAD_SECRET || ''
    const payloadToken = jwt.default.sign(
      {
        id: user.id,
        email: user.email,
        collection: 'users',
      },
      secret,
      { expiresIn: '7d' }
    )

    // Redirect to admin with auth cookie
    const response = NextResponse.redirect(new URL('/admin', req.url))
    response.cookies.set('payload-token', payloadToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
    })

    return response
  } catch (e) {
    console.error('Portal auth error:', (e as Error).message)
    return NextResponse.json({ error: 'Auth failed' }, { status: 500 })
  }
}
