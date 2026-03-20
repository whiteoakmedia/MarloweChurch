import type { Block } from 'payload'

export const TestimonialsBlock: Block = {
  slug: 'testimonials',
  labels: {
    singular: 'Testimonials Section',
    plural: 'Testimonials Sections',
  },
  imageURL: '/blocks/testimonials.svg',
  fields: [
    {
      name: 'heading',
      type: 'text',
      defaultValue: 'What People Are Saying',
      admin: { description: 'Heading above the testimonials.' },
    },
    {
      name: 'showAll',
      type: 'checkbox',
      defaultValue: true,
      label: 'Show all approved testimonies',
      admin: { description: 'Show all approved testimonies, or pick specific ones.' },
    },
    {
      name: 'selectedTestimonies',
      type: 'relationship',
      relationTo: 'testimonies',
      hasMany: true,
      admin: {
        description: 'Choose specific testimonies to feature.',
        condition: (data, siblingData) => !siblingData?.showAll,
      },
    },
    {
      name: 'style',
      type: 'select',
      defaultValue: 'carousel',
      admin: { description: 'How testimonials are displayed.' },
      options: [
        { label: 'Carousel', value: 'carousel' },
        { label: 'Grid', value: 'grid' },
        { label: 'List', value: 'list' },
      ],
    },
  ],
}
