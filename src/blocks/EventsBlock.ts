import type { Block } from 'payload'

export const EventsBlock: Block = {
  slug: 'events-list',
  labels: {
    singular: 'Events List',
    plural: 'Events Lists',
  },
  imageURL: '/blocks/events-list.svg',
  fields: [
    {
      name: 'heading',
      type: 'text',
      defaultValue: 'Upcoming Events',
      admin: { description: 'Heading above the events list.' },
    },
    {
      name: 'description',
      type: 'textarea',
      defaultValue: 'Join us for these upcoming gatherings and activities.',
      admin: { description: 'Optional text below the heading.' },
    },
    {
      name: 'limit',
      type: 'number',
      defaultValue: 6,
      min: 1,
      max: 20,
      admin: { description: 'How many events to show.' },
    },
    {
      name: 'showFeaturedOnly',
      type: 'checkbox',
      defaultValue: false,
      admin: { description: 'Only show events marked as featured.' },
    },
    {
      name: 'category',
      type: 'select',
      admin: { description: 'Filter to a specific event category.' },
      options: [
        { label: 'All', value: '' },
        { label: 'Worship', value: 'worship' },
        { label: 'Youth', value: 'youth' },
        { label: 'Kids', value: 'kids' },
        { label: 'Small Group', value: 'small-group' },
        { label: 'Outreach', value: 'outreach' },
        { label: 'Fellowship', value: 'fellowship' },
        { label: 'Conference', value: 'conference' },
        { label: 'Special Event', value: 'special' },
      ],
    },
    {
      name: 'style',
      type: 'select',
      defaultValue: 'cards',
      admin: { description: 'How events are displayed — cards, list, or calendar.' },
      options: [
        { label: 'Cards', value: 'cards' },
        { label: 'List', value: 'list' },
        { label: 'Calendar', value: 'calendar' },
      ],
    },
  ],
}
