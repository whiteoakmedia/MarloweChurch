import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'
import jwt from 'jsonwebtoken'

/**
 * Portal auto-login endpoint.
 * GET /api/portal-auth?key=PAYLOAD_API_KEY
 *
 * Uses Payload's built-in API key authentication to verify the key,
 * then generates a JWT session cookie and redirects to /admin.
 * This allows the client portal to embed /admin without showing a login screen.
 */
export async function GET(req: NextRequest) {
  const key = req.nextUrl.searchParams.get('key')
  if (!key) {
    return NextResponse.json({ error: 'Missing key parameter' }, { status: 400 })
  }

  try {
    const payload = await getPayload({ config })

    // Use Payload's REST API internally to verify the API key
    // The API key header format is: Authorization: users API-Key <key>
    const verifyResponse = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/users/me`,
      {
        headers: {
          'Authorization': `users API-Key ${key}`,
        },
      }
    )

    if (!verifyResponse.ok) {
      return NextResponse.json({ error: 'Invalid API key' }, { status: 401 })
    }

    const userData = await verifyResponse.json()
    if (!userData?.user?.id) {
      return NextResponse.json({ error: 'Invalid API key' }, { status: 401 })
    }

    // Generate a JWT for this user so the admin panel recognizes them
    const secret = process.env.PAYLOAD_SECRET || 'dev-secret'
    const token = jwt.sign(
      {
        id: userData.user.id,
        email: userData.user.email,
        collection: 'users',
      },
      secret,
      { expiresIn: '7d' }
    )

    // Redirect to admin with auth cookie set
    const response = NextResponse.redirect(new URL('/admin', req.url))
    response.cookies.set('payload-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
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
