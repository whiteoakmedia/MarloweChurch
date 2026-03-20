import type { Block } from 'payload'

export const ContentBlock: Block = {
  slug: 'content',
  labels: {
    singular: 'Content Section',
    plural: 'Content Sections',
  },
  imageURL: '/blocks/content.svg',
  fields: [
    {
      name: 'layout',
      type: 'select',
      defaultValue: 'default',
      admin: { description: 'Choose how text and images are arranged.' },
      options: [
        { label: 'Default (Full Width)', value: 'default' },
        { label: 'Two Column', value: 'two-column' },
        { label: 'Image Left', value: 'image-left' },
        { label: 'Image Right', value: 'image-right' },
      ],
    },
    {
      name: 'heading',
      type: 'text',
      defaultValue: 'Section Heading',
      admin: { description: 'Section heading.' },
    },
    {
      name: 'body',
      type: 'richText',
      admin: { description: 'The main content for this section. Use the toolbar to format text.' },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      admin: { description: 'An image to display alongside the text.' },
    },
    {
      name: 'backgroundColor',
      type: 'select',
      defaultValue: 'white',
      admin: { description: 'Background color for this section.' },
      options: [
        { label: 'White', value: 'white' },
        { label: 'Light', value: 'light' },
        { label: 'Dark', value: 'dark' },
        { label: 'Primary', value: 'primary' },
        { label: 'Accent', value: 'accent' },
      ],
    },
  ],
}
