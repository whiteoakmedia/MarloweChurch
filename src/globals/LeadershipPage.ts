import type { GlobalConfig } from 'payload'

export const LeadershipPage: GlobalConfig = {
  slug: 'leadership-page',
  label: 'Leadership Page',
  admin: { group: 'Pages' },
  fields: [
    { name: 'badge', type: 'text', defaultValue: 'Our Team' },
    { name: 'heroHeading', type: 'text', defaultValue: 'Leadership' },
  ],
}
