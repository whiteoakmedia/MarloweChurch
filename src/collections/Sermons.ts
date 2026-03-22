import type { CollectionConfig } from 'payload'

export const Sermons: CollectionConfig = {
  slug: 'sermons',
  access: {
    read: () => true,
  },
  admin: {
    group: 'Church',
    description: 'Upload and organize sermons with video links and scripture.',
    useAsTitle: 'title',
    defaultColumns: ['title', 'date', 'series', 'preacher'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        description: 'The sermon title as it should appear on the website.',
      },
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
      name: 'date',
      type: 'date',
      required: true,
      admin: {
        description: 'When was this message preached?',
        date: {
          pickerAppearance: 'dayOnly',
          displayFormat: 'MMM d, yyyy',
        },
      },
    },
    {
      name: 'series',
      type: 'relationship',
      relationTo: 'sermon-series',
      admin: {
        description: 'Which sermon series does this belong to?',
      },
    },
    {
      name: 'topics',
      type: 'relationship',
      relationTo: 'sermon-topics',
      hasMany: true,
    },
    {
      name: 'preacher',
      type: 'relationship',
      relationTo: 'staff',
      admin: {
        description: 'Who preached this message?',
      },
    },
    {
      name: 'scriptureReference',
      type: 'text',
      admin: {
        description: 'The Bible passage (e.g. John 3:16, Romans 8:1-4).',
      },
    },
    {
      name: 'videoUrl',
      type: 'text',
      admin: {
        description: 'Paste a YouTube or Vimeo link to the sermon video.',
      },
    },
    {
      name: 'audioUrl',
      type: 'text',
      admin: {
        description: 'Paste a link to the audio recording, if available.',
      },
    },
    {
      name: 'description',
      type: 'richText',
      admin: {
        description: 'A brief summary of the message.',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
