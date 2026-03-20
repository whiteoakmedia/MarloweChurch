import type { CollectionConfig } from 'payload'

export const Campuses: CollectionConfig = {
  slug: 'campuses',
  admin: {
    group: 'Church',
    description: 'Manage your church locations and campus details.',
    useAsTitle: 'name',
    defaultColumns: ['name', 'city', 'isMain'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      admin: {
        description: 'Campus name (e.g. Main Campus, North Campus).',
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
      name: 'address',
      type: 'group',
      fields: [
        { name: 'street', type: 'text', required: true },
        { name: 'city', type: 'text', required: true },
        { name: 'state', type: 'text', required: true },
        { name: 'zip', type: 'text', required: true },
      ],
    },
    {
      name: 'phone',
      type: 'text',
      admin: {
        description: 'Phone number for this location.',
      },
    },
    {
      name: 'email',
      type: 'email',
      admin: {
        description: 'Email address for this location.',
      },
    },
    {
      name: 'serviceTimes',
      type: 'array',
      fields: [
        { name: 'dayOfWeek', type: 'text', required: true },
        { name: 'time', type: 'text', required: true },
        { name: 'label', type: 'text', required: true },
      ],
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'pastor',
      type: 'relationship',
      relationTo: 'staff',
      admin: {
        description: 'The campus pastor — select from your staff.',
      },
    },
    {
      name: 'isMain',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
