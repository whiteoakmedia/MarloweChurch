import type { CollectionConfig } from 'payload'

export const Ministries: CollectionConfig = {
  slug: 'ministries',
  admin: {
    group: 'Church',
    description: 'Showcase your church ministries and ways to get involved.',
    useAsTitle: 'name',
    defaultColumns: ['name', 'leader', 'order'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      admin: {
        description: 'The ministry name (e.g. Youth Group, Worship Arts).',
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
      name: 'description',
      type: 'richText',
      admin: {
        description: 'Tell visitors what this ministry is about and who it serves.',
      },
    },
    {
      name: 'leader',
      type: 'relationship',
      relationTo: 'staff',
      admin: {
        description: 'Who leads this ministry? Select from your staff.',
      },
    },
    {
      name: 'schedule',
      type: 'text',
      admin: {
        description: 'When does this ministry meet? (e.g. Sundays at 6:30 PM)',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'A photo representing this ministry.',
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
    // PCO sync metadata (hidden from UI)
    {
      name: '_pcoSync',
      type: 'checkbox',
      defaultValue: false,
      admin: { hidden: true },
    },
    {
      name: '_pcoGroupId',
      type: 'text',
      admin: { hidden: true },
    },
  ],
}
