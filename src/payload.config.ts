import { buildConfig } from 'payload'
import { seed } from './seed'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { fileURLToPath } from 'url'

// ─── Collections ──────────────────────────────────────────────────────────────
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Campuses } from './collections/Campuses'
import { Staff } from './collections/Staff'
import { Sermons } from './collections/Sermons'
import { SermonSeries, SermonTopics } from './collections/SermonTaxonomy'
import { Events } from './collections/Events'
import { Ministries } from './collections/Ministries'
import { SmallGroups } from './collections/SmallGroups'
import { Posts } from './collections/Posts'
import { Pages } from './collections/Pages'
import { Forms, FormSubmissions } from './collections/Forms'
import {
  PrayerRequests,
  Testimonies,
  Resources,
  VolunteerRoles,
  GivingFunds,
} from './collections/Engagement'

// ─── Globals ──────────────────────────────────────────────────────────────────
import { SiteSettings } from './globals/SiteSettings'
import { Navigation } from './globals/Navigation'
import { AnnouncementBanner } from './globals/AnnouncementBanner'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET || 'dev-secret-change-in-production',
  serverURL: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  cors: [
    'http://localhost:5003',
    'http://localhost:5000',
    'https://clients.whiteoakmedia.io',
    'https://white-oak-media-client-portal.web.app',
  ],

  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: '— White Oak Media',
      favicon: '/favicon.ico',
      ogImage: '/og-image.jpg',
    },
    components: {
      graphics: {
        Logo: '@/components/admin/Logo#default',
        Icon: '@/components/admin/Icon#default',
      },
      providers: ['@/components/admin/NavSync#default'],
    },
    livePreview: {
      url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
      collections: ['pages', 'staff', 'events', 'sermons', 'ministries', 'posts'],
      globals: ['site-settings', 'navigation', 'announcement-banner'],
    },
  },

  onInit: async (payload) => {
    try { await seed(payload) }
    catch (e) { console.error('Seed error (non-blocking):', (e as Error).message) }
  },

  editor: lexicalEditor({}),

  collections: [
    Pages,
    Posts,
    Staff,
    Events,
    Sermons,
    SermonSeries,
    SermonTopics,
    Ministries,
    SmallGroups,
    Campuses,
    PrayerRequests,
    Testimonies,
    Resources,
    VolunteerRoles,
    GivingFunds,
    Forms,
    FormSubmissions,
    Media,
    Users,
  ],

  globals: [
    SiteSettings,
    Navigation,
    AnnouncementBanner,
  ],

  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
    push: true,
  }),

  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },

  graphQL: {
    schemaOutputFile: path.resolve(dirname, 'generated-schema.graphql'),
  },
})
