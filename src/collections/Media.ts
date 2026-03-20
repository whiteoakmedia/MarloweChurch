import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    mimeTypes: ['image/*', 'video/*', 'application/pdf'],
  },
  admin: {
    group: 'Media',
    description: 'Upload and manage images, videos, and files for your site.',
    useAsTitle: 'alt',
    defaultColumns: ['filename', 'alt', 'mimeType', 'updatedAt'],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
      admin: { description: 'Describe this image in a few words (e.g. "Pastor Chris preaching"). This helps with accessibility and SEO.' },
    },
    {
      name: 'caption',
      type: 'textarea',
      admin: { description: 'Optional caption shown below the image on the website.' },
    },
  ],
}
