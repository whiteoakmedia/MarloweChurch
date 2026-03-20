import type { Block } from 'payload'

export const GalleryBlock: Block = {
  slug: 'gallery',
  labels: {
    singular: 'Image Gallery',
    plural: 'Image Galleries',
  },
  imageURL: '/blocks/gallery.svg',
  fields: [
    {
      name: 'heading',
      type: 'text',
      defaultValue: 'Photo Gallery',
      admin: { description: 'Optional heading above the gallery.' },
    },
    {
      name: 'images',
      type: 'array',
      minRows: 1,
      admin: { description: 'Add photos to display in the gallery.' },
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'caption',
          type: 'text',
        },
      ],
    },
    {
      name: 'columns',
      type: 'select',
      defaultValue: '3',
      admin: { description: 'How many columns in the grid.' },
      options: [
        { label: '2 Columns', value: '2' },
        { label: '3 Columns', value: '3' },
        { label: '4 Columns', value: '4' },
      ],
    },
  ],
}
