import type { Block } from 'payload'

export const StaffGridBlock: Block = {
  slug: 'staff-grid',
  labels: {
    singular: 'Staff Grid',
    plural: 'Staff Grids',
  },
  imageURL: '/blocks/staff-grid.svg',
  fields: [
    {
      name: 'heading',
      type: 'text',
      defaultValue: 'Our Team',
      admin: { description: 'Heading above the staff grid.' },
    },
    {
      name: 'description',
      type: 'textarea',
      defaultValue: 'Meet the people who make it all happen.',
      admin: { description: 'Optional text below the heading.' },
    },
    {
      name: 'showAll',
      type: 'checkbox',
      defaultValue: true,
      label: 'Show all staff members',
      admin: { description: 'Show all staff members, or pick specific ones below.' },
    },
    {
      name: 'selectedStaff',
      type: 'relationship',
      relationTo: 'staff',
      hasMany: true,
      admin: {
        description: 'Choose which staff members to display.',
        condition: (data, siblingData) => !siblingData?.showAll,
      },
    },
    {
      name: 'columns',
      type: 'select',
      defaultValue: '3',
      admin: { description: 'How many columns in the grid.' },
      options: [
        { label: '2 Columns', value: '2' },
        { label: '3 Columns', value: '3' },
        { label: '4 Columns', value: '4' },
      ],
    },
  ],
}
