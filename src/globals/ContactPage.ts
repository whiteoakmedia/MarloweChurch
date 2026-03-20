import type { GlobalConfig } from 'payload'

export const ContactPage: GlobalConfig = {
  slug: 'contact-page',
  label: 'Contact Page',
  admin: { group: 'Pages & Content' },
  fields: [
    { name: 'badge', type: 'text', defaultValue: 'Get In Touch' },
    { name: 'heroHeading', type: 'text', defaultValue: 'Contact Us' },
    { name: 'heroSubheading', type: 'text', defaultValue: "We'd love to hear from you. Reach out with any questions, prayer requests, or just to say hello." },
    { name: 'formHeading', type: 'text', defaultValue: 'Send Us a Message' },
    { name: 'recipientEmail', type: 'email', defaultValue: 'marloweag@gmail.com' },
    { name: 'mapEmbedUrl', type: 'text', defaultValue: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3072.5!2d-77.85!3d39.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c9e0c0c0c0c0c1%3A0x0!2s9045+Williamsport+Pike%2C+Falling+Waters%2C+WV+25419!5e0!3m2!1sen!2sus!4v1' },
  ],
}
