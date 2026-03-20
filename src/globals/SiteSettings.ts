import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Site Settings',
  admin: {
    group: 'Settings',
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'General',
          fields: [
            {
              name: 'churchName',
              type: 'text',
              required: true,
            },
            {
              name: 'tagline',
              type: 'text',
            },
            {
              name: 'logo',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'favicon',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'denomination',
              type: 'text',
            },
            {
              name: 'denominationDescription',
              type: 'richText',
            },
          ],
        },
        {
          label: 'Theme',
          fields: [
            {
              name: 'colors',
              type: 'group',
              label: 'Colors',
              fields: [
                { name: 'primary', type: 'text', defaultValue: '#1C1917', label: 'Primary Color (dark backgrounds, text)' },
                { name: 'primaryLight', type: 'text', defaultValue: '#292524', label: 'Primary Light' },
                { name: 'accent', type: 'text', defaultValue: '#047857', label: 'Accent Color (buttons, highlights)' },
                { name: 'accentLight', type: 'text', defaultValue: '#059669', label: 'Accent Light' },
                { name: 'secondary', type: 'text', defaultValue: '#D97706', label: 'Secondary Color (CTAs, warmth)' },
                { name: 'secondaryLight', type: 'text', defaultValue: '#F59E0B', label: 'Secondary Light' },
                { name: 'background', type: 'text', defaultValue: '#FAFAF9', label: 'Background' },
                { name: 'backgroundAlt', type: 'text', defaultValue: '#F5F5F0', label: 'Background Alt' },
                { name: 'textDark', type: 'text', defaultValue: '#1C1917', label: 'Text Dark' },
                { name: 'textMuted', type: 'text', defaultValue: '#57534E', label: 'Text Muted' },
              ],
            },
            {
              name: 'fonts',
              type: 'group',
              label: 'Fonts',
              fields: [
                {
                  name: 'headingFont',
                  type: 'select',
                  defaultValue: 'DM Sans',
                  options: [
                    { label: 'DM Sans', value: 'DM Sans' },
                    { label: 'Inter', value: 'Inter' },
                    { label: 'Playfair Display', value: 'Playfair Display' },
                    { label: 'Montserrat', value: 'Montserrat' },
                    { label: 'Lora', value: 'Lora' },
                    { label: 'Raleway', value: 'Raleway' },
                    { label: 'Poppins', value: 'Poppins' },
                    { label: 'Merriweather', value: 'Merriweather' },
                  ],
                },
                {
                  name: 'bodyFont',
                  type: 'select',
                  defaultValue: 'Inter',
                  options: [
                    { label: 'DM Sans', value: 'DM Sans' },
                    { label: 'Inter', value: 'Inter' },
                    { label: 'Playfair Display', value: 'Playfair Display' },
                    { label: 'Montserrat', value: 'Montserrat' },
                    { label: 'Lora', value: 'Lora' },
                    { label: 'Raleway', value: 'Raleway' },
                    { label: 'Poppins', value: 'Poppins' },
                    { label: 'Merriweather', value: 'Merriweather' },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Contact',
          fields: [
            {
              name: 'phone',
              type: 'text',
            },
            {
              name: 'email',
              type: 'email',
            },
            {
              name: 'address',
              type: 'group',
              fields: [
                { name: 'street', type: 'text' },
                { name: 'city', type: 'text' },
                { name: 'state', type: 'text' },
                { name: 'zip', type: 'text' },
              ],
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
          ],
        },
        {
          label: 'Social',
          fields: [
            {
              name: 'socialLinks',
              type: 'group',
              fields: [
                { name: 'facebook', type: 'text' },
                { name: 'instagram', type: 'text' },
                { name: 'youtube', type: 'text' },
                { name: 'twitter', type: 'text' },
                { name: 'tiktok', type: 'text' },
              ],
            },
          ],
        },
        {
          label: 'Giving',
          fields: [
            {
              name: 'givingUrl',
              type: 'text',
              label: 'Online Giving URL',
            },
            {
              name: 'givingDescription',
              type: 'richText',
            },
          ],
        },
        {
          label: 'SEO',
          fields: [
            {
              name: 'meta',
              type: 'group',
              fields: [
                { name: 'title', type: 'text', label: 'Default Meta Title' },
                { name: 'description', type: 'textarea', label: 'Default Meta Description' },
                { name: 'ogImage', type: 'upload', relationTo: 'media', label: 'Default OG Image' },
              ],
            },
            {
              name: 'scripts',
              type: 'group',
              label: 'Tracking Scripts',
              fields: [
                { name: 'googleAnalyticsId', type: 'text', label: 'Google Analytics ID' },
                { name: 'facebookPixelId', type: 'text', label: 'Facebook Pixel ID' },
                { name: 'customHeadScripts', type: 'code', label: 'Custom Head Scripts', admin: { language: 'html' } },
              ],
            },
          ],
        },
      ],
    },
  ],
}
