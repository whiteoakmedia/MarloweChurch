import type { GlobalConfig } from 'payload'

export const BeliefsPage: GlobalConfig = {
  slug: 'beliefs-page',
  label: 'Our Beliefs Page',
  admin: { group: 'Pages & Content' },
  fields: [
    { name: 'badge', type: 'text', defaultValue: 'Statement of Faith' },
    { name: 'heroHeading', type: 'text', defaultValue: 'Our Beliefs' },
    { name: 'denominationLabel', type: 'text', defaultValue: 'Potomac Network and National AG Website' },
    { name: 'denominationUrl', type: 'text', defaultValue: 'https://www.potomacag.org/' },
    {
      name: 'beliefs',
      type: 'array',
      label: 'Beliefs',
      admin: { description: 'The statement of faith items displayed on the page.' },
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
        {
          name: 'scriptures',
          type: 'array',
          fields: [
            { name: 'reference', type: 'text', required: true },
            { name: 'url', type: 'text' },
          ],
        },
      ],
    },
  ],
}
