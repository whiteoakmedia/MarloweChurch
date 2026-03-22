import type { CollectionConfig } from 'payload'

export const SmallGroups: CollectionConfig = {
  slug: 'small-groups',
  access: {
    read: () => true,
  },
  admin: {
    group: 'Church',
    description: 'Manage small group listings with meeting times and locations.',
    useAsTitle: 'name',
    defaultColumns: ['name', 'meetingDay', 'category', 'isActive'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      admin: {
        description: 'Group name (e.g. Men\'s Bible Study, Tuesday Night Connect).',
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
        description: 'What is this group about? Who is it for?',
      },
    },
    {
      name: 'leader',
      type: 'text',
      admin: {
        description: 'Who leads this group?',
      },
    },
    {
      name: 'meetingDay',
      type: 'select',
      admin: {
        description: 'What day of the week does this group meet?',
      },
      options: [
        { label: 'Sunday', value: 'sunday' },
        { label: 'Monday', value: 'monday' },
        { label: 'Tuesday', value: 'tuesday' },
        { label: 'Wednesday', value: 'wednesday' },
        { label: 'Thursday', value: 'thursday' },
        { label: 'Friday', value: 'friday' },
        { label: 'Saturday', value: 'saturday' },
      ],
    },
    {
      name: 'meetingTime',
      type: 'text',
      admin: {
        description: 'What time? (e.g. 7:00 PM)',
      },
    },
    {
      name: 'location',
      type: 'text',
      admin: {
        description: 'Where does this group meet?',
      },
    },
    {
      name: 'campus',
      type: 'relationship',
      relationTo: 'campuses',
    },
    {
      name: 'category',
      type: 'select',
      options: [
        { label: 'Men', value: 'men' },
        { label: 'Women', value: 'women' },
        { label: 'Young Adults', value: 'young-adults' },
        { label: 'Couples', value: 'couples' },
        { label: 'Mixed', value: 'mixed' },
        { label: 'Study', value: 'study' },
        { label: 'Recovery', value: 'recovery' },
      ],
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
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
