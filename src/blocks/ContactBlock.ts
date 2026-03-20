import type { Block } from 'payload'

export const ContactBlock: Block = {
  slug: 'contact',
  labels: {
    singular: 'Contact Section',
    plural: 'Contact Sections',
  },
  imageURL: '/blocks/contact.svg',
  fields: [
    {
      name: 'heading',
      type: 'text',
      defaultValue: 'Get In Touch',
      admin: { description: 'Heading for the contact section.' },
    },
    {
      name: 'description',
      type: 'textarea',
      defaultValue: "We'd love to hear from you. Reach out anytime.",
      admin: { description: 'Optional intro text above the contact form.' },
    },
    {
      name: 'form',
      type: 'relationship',
      relationTo: 'forms',
      label: 'Contact Form',
      admin: { description: 'Choose which form to display (create forms in the Forms collection).' },
    },
    {
      name: 'showMap',
      type: 'checkbox',
      defaultValue: true,
      admin: { description: 'Show a link to Google Maps.' },
    },
    {
      name: 'showServiceTimes',
      type: 'checkbox',
      defaultValue: true,
      admin: { description: 'Display your service times from Site Settings.' },
    },
    {
      name: 'showContactInfo',
      type: 'checkbox',
      defaultValue: true,
      admin: { description: 'Display your address, phone, and email from Site Settings.' },
    },
  ],
}
