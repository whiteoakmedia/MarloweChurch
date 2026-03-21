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
// Pages and Posts collections removed — Marlowe uses page globals instead
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
import { HomePage } from './globals/HomePage'
import { EventsPage } from './globals/EventsPage'
import { SermonsPage } from './globals/SermonsPage'
import { LeadershipPage } from './globals/LeadershipPage'
import { ContactPage } from './globals/ContactPage'
import { BeliefsPage } from './globals/BeliefsPage'
import { KidsPage } from './globals/KidsPage'
import { YouthPage } from './globals/YouthPage'
import { RoyalRangersPage } from './globals/RoyalRangersPage'
import { ImNewPage } from './globals/ImNewPage'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET || 'dev-secret-change-in-production',
  serverURL: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  cors: '*',

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
      collections: ['staff', 'events', 'sermons', 'ministries'],
      globals: ['site-settings', 'navigation', 'announcement-banner', 'home-page', 'events-page', 'sermons-page', 'leadership-page', 'contact-page', 'beliefs-page', 'kids-page', 'youth-page', 'royal-rangers-page', 'im-new-page'],
    },
  },

  onInit: async (payload) => {
    try { await seed(payload) }
    catch (e) { console.error('Seed error (non-blocking):', (e as Error).message) }
  },

  editor: lexicalEditor({}),

  collections: [
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
    HomePage,
    EventsPage,
    SermonsPage,
    LeadershipPage,
    ContactPage,
    BeliefsPage,
    KidsPage,
    YouthPage,
    RoyalRangersPage,
    ImNewPage,
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
