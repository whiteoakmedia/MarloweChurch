import type { Block } from 'payload'

export const GivingBlock: Block = {
  slug: 'giving',
  labels: {
    singular: 'Giving Section',
    plural: 'Giving Sections',
  },
  imageURL: '/blocks/giving.svg',
  fields: [
    {
      name: 'heading',
      type: 'text',
      defaultValue: 'Support Our Mission',
      admin: { description: 'Heading for the giving section.' },
    },
    {
      name: 'description',
      type: 'richText',
      admin: { description: 'Explain why giving matters to your church.' },
    },
    {
      name: 'givingUrl',
      type: 'text',
      label: 'Online Giving URL',
      admin: { description: 'Link to your online giving page (e.g. Tithe.ly, Pushpay).' },
    },
    {
      name: 'methods',
      type: 'array',
      admin: { description: 'List the different ways people can give.' },
      fields: [
        { name: 'title', type: 'text', required: true, admin: { description: 'Method name (e.g. "Give Online").' } },
        { name: 'description', type: 'textarea', required: true, admin: { description: 'Brief explanation of this giving method.' } },
        { name: 'icon', type: 'text', label: 'Icon name (lucide-react)', admin: { description: 'Icon name: heart, card, or building.' } },
      ],
    },
    {
      name: 'showFunds',
      type: 'checkbox',
      defaultValue: false,
      label: 'Show designated giving funds',
    },
  ],
}
