import type { Block } from 'payload'

export const MinistriesBlock: Block = {
  slug: 'ministries-grid',
  labels: {
    singular: 'Ministries Grid',
    plural: 'Ministries Grids',
  },
  imageURL: '/blocks/ministries-grid.svg',
  fields: [
    {
      name: 'heading',
      type: 'text',
      defaultValue: 'Our Ministries',
      admin: { description: 'Heading above the ministries.' },
    },
    {
      name: 'description',
      type: 'textarea',
      defaultValue: 'Discover the many ways you can get involved and grow.',
      admin: { description: 'Optional text below the heading.' },
    },
    {
      name: 'showAll',
      type: 'checkbox',
      defaultValue: true,
      label: 'Show all ministries',
      admin: { description: 'Show all ministries, or pick specific ones below.' },
    },
    {
      name: 'selectedMinistries',
      type: 'relationship',
      relationTo: 'ministries',
      hasMany: true,
      admin: {
        description: 'Choose which ministries to display.',
        condition: (data, siblingData) => !siblingData?.showAll,
      },
    },
  ],
}
