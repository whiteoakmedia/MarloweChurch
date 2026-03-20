import type { Block } from 'payload'

export const SermonsBlock: Block = {
  slug: 'sermons-grid',
  labels: {
    singular: 'Sermons Grid',
    plural: 'Sermons Grids',
  },
  imageURL: '/blocks/sermons-grid.svg',
  fields: [
    {
      name: 'heading',
      type: 'text',
      defaultValue: 'Recent Messages',
      admin: { description: 'Heading above the sermons grid.' },
    },
    {
      name: 'description',
      type: 'textarea',
      defaultValue: 'Watch and listen to our latest sermons.',
      admin: { description: 'Optional text below the heading.' },
    },
    {
      name: 'limit',
      type: 'number',
      defaultValue: 6,
      min: 1,
      max: 20,
      admin: { description: 'How many sermons to show.' },
    },
    {
      name: 'showSearch',
      type: 'checkbox',
      defaultValue: true,
      label: 'Show search and filters',
      admin: { description: 'Show a search bar for visitors to filter sermons.' },
    },
    {
      name: 'filterBySeries',
      type: 'relationship',
      relationTo: 'sermon-series',
      label: 'Filter to specific series',
      admin: { description: 'Only show sermons from a specific series.' },
    },
  ],
}
