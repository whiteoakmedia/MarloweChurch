import type { CollectionConfig } from 'payload'

export const SermonSeries: CollectionConfig = {
  slug: 'sermon-series',
  access: {
    read: () => true,
  },
  admin: {
    group: 'Church',
    description: 'Group your sermons into series for easy browsing.',
    useAsTitle: 'name',
    defaultColumns: ['name', 'updatedAt'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}

export const SermonTopics: CollectionConfig = {
  slug: 'sermon-topics',
  access: {
    read: () => true,
  },
  admin: {
    group: 'Church',
    description: 'Tag sermons by topic so visitors can find what they need.',
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
  ],
}
