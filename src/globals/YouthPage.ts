import type { GlobalConfig } from 'payload'

export const YouthPage: GlobalConfig = {
  slug: 'youth-page',
  label: 'Youth Page',
  admin: { group: 'Pages & Content' },
  fields: [
    { name: 'heroSubtitle', type: 'text', defaultValue: 'A vibrant community where students grow in faith, build friendships, and discover their God-given purpose.' },
    { name: 'heroCtaText', type: 'text', defaultValue: 'Learn More' },
    { name: 'heroCtaUrl', type: 'text', defaultValue: 'https://marloweag.churchcenter.com/people/forms/948961' },
    { name: 'fallbackAbout', type: 'richText', admin: { description: 'About text shown when ministry description is not set.' } },
    {
      name: 'schedule',
      type: 'array',
      label: 'Meeting Schedule',
      fields: [
        { name: 'season', type: 'text', required: true },
        { name: 'dayTime', type: 'text', required: true },
      ],
    },
    { name: 'facebookUrl', type: 'text', defaultValue: 'https://www.facebook.com/groups/482522585595219' },
    { name: 'ctaHeading', type: 'text', defaultValue: 'Come be part of Foundation Youth' },
    { name: 'ctaUrl', type: 'text', defaultValue: 'https://marloweag.churchcenter.com/people/forms/948961' },
    { name: 'rangersSignupUrl', type: 'text', defaultValue: 'https://marloweag.churchcenter.com/people/forms/948916' },
    { name: 'girlsSignupUrl', type: 'text', defaultValue: 'https://marloweag.churchcenter.com/people/forms/948886' },
  ],
}
