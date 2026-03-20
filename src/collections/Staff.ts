import type { CollectionConfig } from 'payload'

export const Staff: CollectionConfig = {
  slug: 'staff',
  admin: {
    group: 'Church',
    description: 'Add and manage your pastoral team and staff members.',
    useAsTitle: 'name',
    defaultColumns: ['name', 'role', 'order'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      admin: {
        description: 'Full name as it should appear on the website.',
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
      name: 'role',
      type: 'text',
      required: true,
      admin: {
        description: 'Their title or position (e.g. Senior Pastor, Youth Director).',
      },
    },
    {
      name: 'email',
      type: 'email',
      admin: {
        description: 'Public email — shown on the website for visitors to contact them.',
      },
    },
    {
      name: 'phone',
      type: 'text',
      admin: {
        description: 'Optional phone number.',
      },
    },
    {
      name: 'bio',
      type: 'richText',
      admin: {
        description: 'A short biography — who they are and what they do.',
      },
    },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'A professional headshot or photo.',
      },
    },
    {
      name: 'campus',
      type: 'relationship',
      relationTo: 'campuses',
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
