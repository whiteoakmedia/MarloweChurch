import { getPayload } from 'payload'
import config from '@payload-config'

export async function getPayloadClient() {
  return getPayload({ config })
}

/**
 * Fetch wrapper with fallback support — mirrors the old safeFetch pattern.
 * Returns null on error so pages can fall back to static data.
 */
export async function safePayloadFetch<T>(
  fn: () => Promise<T>,
): Promise<T | null> {
  try {
    return await fn()
  } catch {
    return null
  }
}

// ─── Convenience query helpers ──────────────────────────────────────────────

export async function getSiteSettings() {
  const payload = await getPayloadClient()
  return safePayloadFetch(() => payload.findGlobal({ slug: 'site-settings' }))
}

export async function getNavigation() {
  const payload = await getPayloadClient()
  return safePayloadFetch(() => payload.findGlobal({ slug: 'navigation', depth: 2 }))
}

export async function getAnnouncementBanner() {
  const payload = await getPayloadClient()
  return safePayloadFetch(() => payload.findGlobal({ slug: 'announcement-banner' }))
}

export async function getHomePage() {
  const payload = await getPayloadClient()
  return safePayloadFetch(async () => {
    const result = await payload.find({
      collection: 'pages',
      where: { slug: { equals: 'home' } },
      limit: 1,
      depth: 2,
    })
    return result.docs[0] || null
  })
}

export async function getPage(slug: string) {
  const payload = await getPayloadClient()
  return safePayloadFetch(async () => {
    const result = await payload.find({
      collection: 'pages',
      where: { slug: { equals: slug }, status: { equals: 'published' } },
      limit: 1,
      depth: 2,
    })
    return result.docs[0] || null
  })
}

export async function getStaff() {
  const payload = await getPayloadClient()
  return safePayloadFetch(async () => {
    const result = await payload.find({
      collection: 'staff',
      sort: 'order',
      limit: 100,
      depth: 1,
    })
    return result.docs
  })
}

export async function getSermons(limit = 20) {
  const payload = await getPayloadClient()
  return safePayloadFetch(async () => {
    const result = await payload.find({
      collection: 'sermons',
      sort: '-date',
      limit,
      depth: 2,
    })
    return result.docs
  })
}

export async function getEvents(limit = 50) {
  const payload = await getPayloadClient()
  return safePayloadFetch(async () => {
    const result = await payload.find({
      collection: 'events',
      where: { date: { greater_than_equal: new Date().toISOString() } },
      sort: 'date',
      limit,
      depth: 1,
    })
    return result.docs
  })
}

export async function getFeaturedEvents() {
  const payload = await getPayloadClient()
  return safePayloadFetch(async () => {
    const result = await payload.find({
      collection: 'events',
      where: {
        and: [
          { isFeatured: { equals: true } },
          { date: { greater_than_equal: new Date().toISOString() } },
        ],
      },
      sort: 'date',
      limit: 5,
      depth: 1,
    })
    return result.docs
  })
}

export async function getMinistries() {
  const payload = await getPayloadClient()
  return safePayloadFetch(async () => {
    const result = await payload.find({
      collection: 'ministries',
      sort: 'order',
      limit: 100,
      depth: 1,
    })
    return result.docs
  })
}

export async function getMinistryBySlug(slug: string) {
  const payload = await getPayloadClient()
  return safePayloadFetch(async () => {
    const result = await payload.find({
      collection: 'ministries',
      where: { slug: { equals: slug } },
      limit: 1,
      depth: 1,
    })
    return result.docs[0] || null
  })
}

// ─── Page globals ───────────────────────────────────────────────────────────

export async function getPageGlobal(slug: string) {
  const payload = await getPayloadClient()
  return safePayloadFetch(() => payload.findGlobal({ slug, depth: 2 }))
}
