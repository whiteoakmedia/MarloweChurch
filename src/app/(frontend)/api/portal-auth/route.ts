import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'

/**
 * Portal auto-login endpoint.
 * GET /api/portal-auth?key=PAYLOAD_API_KEY
 *
 * Validates the API key against Users collection, generates a JWT,
 * sets the auth cookie, and redirects to /admin.
 * This allows the client portal to embed /admin without showing a login screen.
 */
export async function GET(req: NextRequest) {
  const key = req.nextUrl.searchParams.get('key')
  if (!key) {
    return NextResponse.json({ error: 'Missing key parameter' }, { status: 400 })
  }

  try {
    const payload = await getPayload({ config })

    // Find user by API key
    const users = await payload.find({
      collection: 'users',
      where: { apiKey: { equals: key } },
      limit: 1,
    })

    const user = users.docs[0]
    if (!user) {
      return NextResponse.json({ error: 'Invalid API key' }, { status: 401 })
    }

    // Generate a JWT token for this user
    const loginResult = await payload.login({
      collection: 'users',
      data: {
        email: user.email,
        password: process.env.PAYLOAD_EDITOR_PASSWORD || 'portal-editor-2024',
      },
    })

    if (!loginResult.token) {
      return NextResponse.json({ error: 'Login failed' }, { status: 500 })
    }

    // Redirect to admin with auth cookie set
    const response = NextResponse.redirect(new URL('/admin', req.url))
    response.cookies.set('payload-token', loginResult.token, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    })

    return response
  } catch (e) {
    console.error('Portal auth error:', (e as Error).message)
    return NextResponse.json({ error: 'Auth failed' }, { status: 500 })
  }
}
