import type { CollectionConfig } from 'payload'

export const Events: CollectionConfig = {
  slug: 'events',
  access: {
    read: () => true,
  },
  admin: {
    group: 'Church',
    description: 'Create and manage upcoming church events and gatherings.',
    useAsTitle: 'title',
    defaultColumns: ['title', 'date', 'category', 'isFeatured'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        description: 'The name of the event as it will appear on the website.',
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
        description: 'When does the event start?',
        date: {
          pickerAppearance: 'dayAndTime',
          displayFormat: 'MMM d, yyyy h:mm a',
        },
      },
    },
    {
      name: 'endDate',
      type: 'date',
      admin: {
        description: 'Optional — when does it end?',
        date: {
          pickerAppearance: 'dayAndTime',
          displayFormat: 'MMM d, yyyy h:mm a',
        },
      },
    },
    {
      name: 'location',
      type: 'text',
      admin: {
        description: 'Where is this event? (e.g. Main Sanctuary, Fellowship Hall)',
      },
    },
    {
      name: 'category',
      type: 'select',
      admin: {
        description: 'Choose a category to help visitors filter events.',
      },
      options: [
        { label: 'Worship', value: 'worship' },
        { label: 'Youth', value: 'youth' },
        { label: 'Kids', value: 'kids' },
        { label: 'Small Group', value: 'small-group' },
        { label: 'Outreach', value: 'outreach' },
        { label: 'Fellowship', value: 'fellowship' },
        { label: 'Conference', value: 'conference' },
        { label: 'Special Event', value: 'special' },
        { label: 'Other', value: 'other' },
      ],
    },
    {
      name: 'description',
      type: 'richText',
      admin: {
        description: 'Tell people what this event is about.',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'A photo or graphic for this event.',
      },
    },
    {
      name: 'campus',
      type: 'relationship',
      relationTo: 'campuses',
    },
    {
      name: 'registrationUrl',
      type: 'text',
      admin: {
        description: 'Link to an external registration page, if needed.',
      },
    },
    {
      name: 'isFeatured',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'isRecurring',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'recurrencePattern',
      type: 'select',
      options: [
        { label: 'Weekly', value: 'weekly' },
        { label: 'Bi-Weekly', value: 'biweekly' },
        { label: 'Monthly', value: 'monthly' },
      ],
      admin: {
        condition: (data) => data?.isRecurring,
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
      name: '_pcoEventId',
      type: 'text',
      admin: { hidden: true },
    },
    {
      name: '_pcoRegistrationId',
      type: 'text',
      admin: { hidden: true },
    },
  ],
}
