import type { Block } from 'payload'

export const FAQBlock: Block = {
  slug: 'faq',
  labels: {
    singular: 'FAQ Section',
    plural: 'FAQ Sections',
  },
  imageURL: '/blocks/faq.svg',
  fields: [
    {
      name: 'heading',
      type: 'text',
      defaultValue: 'Frequently Asked Questions',
      admin: { description: 'Heading above the FAQ list.' },
    },
    {
      name: 'items',
      type: 'array',
      minRows: 1,
      admin: { description: 'Add questions and answers. Each one becomes an expandable accordion.' },
      fields: [
        {
          name: 'question',
          type: 'text',
          required: true,
          admin: { description: 'The question visitors will see.' },
        },
        {
          name: 'answer',
          type: 'textarea',
          required: true,
          admin: { description: 'The answer — shown when clicked.' },
        },
      ],
    },
  ],
}
