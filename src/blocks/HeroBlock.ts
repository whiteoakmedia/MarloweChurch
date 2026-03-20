import type { Block } from 'payload'

export const HeroBlock: Block = {
  slug: 'hero',
  labels: {
    singular: 'Hero',
    plural: 'Heroes',
  },
  imageURL: '/blocks/hero.svg',
  fields: [
    {
      name: 'style',
      type: 'select',
      defaultValue: 'full',
      admin: { description: 'Choose how the hero section looks.' },
      options: [
        { label: 'Full Width', value: 'full' },
        { label: 'Split (Image + Text)', value: 'split' },
        { label: 'Centered Text', value: 'centered' },
        { label: 'Video Background', value: 'video' },
      ],
    },
    {
      name: 'heading',
      type: 'text',
      required: true,
      defaultValue: 'Your Heading Here',
      admin: { description: 'The big headline visitors see first.' },
    },
    {
      name: 'subheading',
      type: 'textarea',
      defaultValue: 'Add a compelling subheading that captures your message.',
      admin: { description: 'A supporting line under the headline.' },
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      admin: { description: 'A large background photo for this section.' },
    },
    {
      name: 'videoUrl',
      type: 'text',
      admin: {
        description: 'Paste a video URL for the background.',
        condition: (data, siblingData) => siblingData?.style === 'video',
      },
    },
    {
      name: 'overlayOpacity',
      type: 'number',
      min: 0,
      max: 100,
      defaultValue: 40,
      admin: { description: 'How dark the overlay is over the background (0 = no overlay, 100 = fully dark).' },
    },
    {
      name: 'ctas',
      type: 'array',
      maxRows: 2,
      admin: { description: 'Add up to 2 buttons (e.g. "Plan Your Visit", "Watch Sermons").' },
      fields: [
        { name: 'label', type: 'text', required: true, admin: { description: 'Button text.' } },
        { name: 'link', type: 'text', required: true, admin: { description: 'Where does this button go? (e.g. /contact or https://...)' } },
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
