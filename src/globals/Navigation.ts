import type { GlobalConfig } from 'payload'

const linkFields = [
  {
    name: 'label',
    type: 'text' as const,
    required: true,
  },
  {
    name: 'type',
    type: 'select' as const,
    defaultValue: 'page',
    options: [
      { label: 'Internal Page', value: 'page' },
      { label: 'Custom URL', value: 'custom' },
    ],
  },
  {
    name: 'page',
    type: 'relationship' as const,
    relationTo: 'pages',
    admin: {
      condition: (_: unknown, siblingData: Record<string, unknown>) => siblingData?.type === 'page',
    },
  },
  {
    name: 'url',
    type: 'text' as const,
    admin: {
      condition: (_: unknown, siblingData: Record<string, unknown>) => siblingData?.type === 'custom',
    },
  },
  {
    name: 'openInNewTab',
    type: 'checkbox' as const,
    defaultValue: false,
  },
]

export const Navigation: GlobalConfig = {
  slug: 'navigation',
  label: 'Navigation',
  admin: {
    group: 'Settings',
  },
  fields: [
    {
      name: 'mainNav',
      type: 'array',
      label: 'Main Navigation',
      fields: [
        ...linkFields,
        {
          name: 'children',
          type: 'array',
          label: 'Dropdown Items',
          fields: linkFields,
        },
      ],
    },
    {
      name: 'footerNav',
      type: 'array',
      label: 'Footer Navigation',
      fields: [
        {
          name: 'heading',
          type: 'text',
          required: true,
        },
        {
          name: 'links',
          type: 'array',
          fields: linkFields,
        },
      ],
    },
    {
      name: 'ctaButton',
      type: 'group',
      label: 'Header CTA Button',
      fields: [
        { name: 'label', type: 'text', defaultValue: 'Visit Us' },
        { name: 'link', type: 'text' },
        { name: 'show', type: 'checkbox', defaultValue: true },
      ],
    },
  ],
}
