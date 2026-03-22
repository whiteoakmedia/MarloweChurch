import type { CollectionConfig } from 'payload'

export const PrayerRequests: CollectionConfig = {
  slug: 'prayer-requests',
  admin: {
    group: 'Engagement',
    description: 'View and manage prayer requests from your congregation.',
    defaultColumns: ['name', 'status', 'createdAt'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
    },
    {
      name: 'request',
      type: 'textarea',
      required: true,
    },
    {
      name: 'isPublic',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'new',
      options: [
        { label: 'New', value: 'new' },
        { label: 'Praying', value: 'praying' },
        { label: 'Answered', value: 'answered' },
        { label: 'Archived', value: 'archived' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
  ],
}

export const Testimonies: CollectionConfig = {
  slug: 'testimonies',
  access: {
    read: () => true,
  },
  admin: {
    group: 'Engagement',
    description: 'Collect and approve testimonies to share on your site.',
    useAsTitle: 'name',
    defaultColumns: ['name', 'isApproved', 'createdAt'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'testimony',
      type: 'richText',
      required: true,
    },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'isApproved',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'date',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
  ],
}

export const Resources: CollectionConfig = {
  slug: 'resources',
  access: {
    read: () => true,
  },
  admin: {
    group: 'Engagement',
    description: 'Share downloadable resources like Bible studies and guides.',
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'order'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'file',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'externalUrl',
      type: 'text',
    },
    {
      name: 'category',
      type: 'select',
      options: [
        { label: 'Bible Study', value: 'bible-study' },
        { label: 'Devotional', value: 'devotional' },
        { label: 'Guide', value: 'guide' },
        { label: 'Form', value: 'form' },
        { label: 'Other', value: 'other' },
      ],
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

export const VolunteerRoles: CollectionConfig = {
  slug: 'volunteer-roles',
  access: {
    read: () => true,
  },
  admin: {
    group: 'Engagement',
    description: 'List volunteer opportunities for your church.',
    useAsTitle: 'title',
    defaultColumns: ['title', 'ministry', 'isActive'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'richText',
    },
    {
      name: 'ministry',
      type: 'relationship',
      relationTo: 'ministries',
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        position: 'sidebar',
      },
    },
  ],
}

export const GivingFunds: CollectionConfig = {
  slug: 'giving-funds',
  access: {
    read: () => true,
  },
  admin: {
    group: 'Engagement',
    description: 'Set up designated giving funds for your church.',
    useAsTitle: 'name',
    defaultColumns: ['name', 'isDefault', 'order'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'isDefault',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        position: 'sidebar',
      },
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
