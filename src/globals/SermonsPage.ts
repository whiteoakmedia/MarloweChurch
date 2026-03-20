import type { GlobalConfig } from 'payload'

export const SermonsPage: GlobalConfig = {
  slug: 'sermons-page',
  label: 'Sermons Page',
  admin: { group: 'Pages & Content' },
  fields: [
    { name: 'badge', type: 'text', defaultValue: 'Messages' },
    { name: 'heroHeading', type: 'text', defaultValue: 'Sermons' },
    { name: 'heroSubheading', type: 'text', defaultValue: 'Watch our latest messages or browse through our sermon archive.' },
    { name: 'emptyHeading', type: 'text', defaultValue: 'Sermons Coming Soon' },
    { name: 'emptyBody', type: 'text', defaultValue: 'Add sermons through the admin panel to display them here. In the meantime, catch our live stream!' },
    { name: 'liveStreamUrl', type: 'text', defaultValue: 'https://www.youtube.com/@marloweassemblyofgod523/streams' },
  ],
}
