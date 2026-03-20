import type { Block } from 'payload'

export const CTABlock: Block = {
  slug: 'cta',
  labels: {
    singular: 'Call to Action',
    plural: 'Calls to Action',
  },
  imageURL: '/blocks/cta.svg',
  fields: [
    {
      name: 'style',
      type: 'select',
      defaultValue: 'banner',
      admin: { description: 'Banner = dramatic dark section. Card = glass card. Inline = compact horizontal.' },
      options: [
        { label: 'Banner', value: 'banner' },
        { label: 'Card', value: 'card' },
        { label: 'Inline', value: 'inline' },
      ],
    },
    {
      name: 'heading',
      type: 'text',
      required: true,
      defaultValue: 'Ready to Take the Next Step?',
      admin: { description: 'The main call-to-action headline.' },
    },
    {
      name: 'description',
      type: 'textarea',
      defaultValue: 'Add a compelling message that encourages visitors to take action.',
      admin: { description: 'Supporting text under the headline.' },
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      admin: { description: 'Optional background photo (banner style only).' },
    },
    {
      name: 'buttons',
      type: 'array',
      maxRows: 3,
      admin: { description: 'Add action buttons (e.g. "Get Started", "Contact Us").' },
      fields: [
        { name: 'label', type: 'text', required: true, admin: { description: 'Button text.' } },
        { name: 'link', type: 'text', required: true, admin: { description: 'Where does this button go?' } },
        {
          name: 'variant',
          type: 'select',
          defaultValue: 'primary',
          options: [
            { label: 'Primary', value: 'primary' },
            { label: 'Secondary', value: 'secondary' },
            { label: 'Outline', value: 'outline' },
          ],
        },
      ],
    },
  ],
}
