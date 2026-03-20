import type { GlobalConfig } from 'payload'

export const EventsPage: GlobalConfig = {
  slug: 'events-page',
  label: 'Events Page',
  admin: { group: 'Pages & Content' },
  fields: [
    { name: 'badge', type: 'text', defaultValue: "What's Happening" },
    { name: 'heroHeading', type: 'text', defaultValue: 'Events' },
    { name: 'heroSubheading', type: 'text', defaultValue: 'Join us for fellowship, worship, and community. There is always something happening at Marlowe Assembly of God.' },
  ],
}
