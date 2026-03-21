import type { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    group: 'Advanced',
    description: 'Write blog posts, devotionals, and news updates.',
    hidden: true,
    useAsTitle: 'title',
    defaultColumns: ['title', 'author', 'publishedDate', 'status'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        description: 'The blog post title.',
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
      name: 'content',
      type: 'richText',
      admin: {
        description: 'Write your blog post content here.',
      },
    },
    {
      name: 'excerpt',
      type: 'textarea',
      admin: {
        description: 'A short preview shown in blog listings (1-2 sentences).',
      },
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'staff',
      admin: {
        description: 'Who wrote this post?',
      },
    },
    {
      name: 'publishedDate',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
          displayFormat: 'MMM d, yyyy',
        },
        position: 'sidebar',
      },
    },
    {
      name: 'categories',
      type: 'select',
      hasMany: true,
      options: [
        { label: 'Devotional', value: 'devotional' },
        { label: 'News', value: 'news' },
        { label: 'Testimony', value: 'testimony' },
        { label: 'Teaching', value: 'teaching' },
        { label: 'Missions', value: 'missions' },
        { label: 'Community', value: 'community' },
      ],
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'The main image shown at the top of the post and in listings.',
      },
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'draft',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
