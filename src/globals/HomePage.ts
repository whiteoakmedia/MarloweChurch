import type { GlobalConfig } from 'payload'

export const HomePage: GlobalConfig = {
  slug: 'home-page',
  label: 'Home Page',
  admin: {
    group: 'Pages & Content',
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Hero',
          fields: [
            { name: 'heroHeading', type: 'text', defaultValue: 'Love God, Love People,' },
            { name: 'heroSubheading', type: 'text', defaultValue: "New here? We'd love to meet you." },
            { name: 'heroImage', type: 'upload', relationTo: 'media' },
            { name: 'heroCtaText', type: 'text', defaultValue: "I'm New" },
            { name: 'heroCtaLink', type: 'text', defaultValue: '/im-new' },
          ],
        },
        {
          label: 'Welcome',
          fields: [
            { name: 'welcomeBadge', type: 'text', defaultValue: 'Welcome Home' },
            { name: 'welcomeHeading', type: 'text', defaultValue: 'We are an Assemblies of God Church located in Marlowe, WV.' },
            { name: 'welcomeBody', type: 'richText' },
            { name: 'welcomeVideoUrl', type: 'text', defaultValue: 'https://www.youtube.com/embed/qQLEIyhxsMY?rel=0&controls=0&autoplay=0&mute=1' },
            { name: 'welcomeCtaText', type: 'text', defaultValue: 'Meet Our Leadership' },
            { name: 'welcomeCtaLink', type: 'text', defaultValue: '/our-leadership' },
          ],
        },
        {
          label: 'Weekly Message',
          fields: [
            { name: 'messageHeading', type: 'text', defaultValue: 'Weekly Message' },
            { name: 'messageSubheading', type: 'text', defaultValue: "Can't make it in person? Watch our latest sermon or tune in live every Sunday." },
            { name: 'messageLiveUrl', type: 'text', defaultValue: 'https://www.youtube.com/@marloweassemblyofgod523/streams' },
          ],
        },
        {
          label: 'Church Center App',
          fields: [
            { name: 'appHeading', type: 'text', defaultValue: 'Give, sign up for events, connect with community, and more!' },
            { name: 'appSubheading', type: 'text', defaultValue: 'Download the app today!' },
            { name: 'appStoreUrl', type: 'text', defaultValue: 'https://apps.apple.com/us/app/church-center-app/id1357742931?ign-mpt=uo%3D4&ls=1' },
            { name: 'playStoreUrl', type: 'text', defaultValue: 'https://play.google.com/store/apps/details?id=com.ministrycentered.churchcenter&pli=1' },
          ],
        },
        {
          label: 'Ministries Section',
          fields: [
            { name: 'ministriesBadge', type: 'text', defaultValue: 'Get Involved' },
            { name: 'ministriesHeading', type: 'text', defaultValue: "There's a place for everyone" },
          ],
        },
        {
          label: 'Events Section',
          fields: [
            { name: 'eventsHeading', type: 'text', defaultValue: 'Upcoming Events' },
            { name: 'eventsSubheading', type: 'text', defaultValue: "Stay connected with what's happening at Marlowe." },
          ],
        },
        {
          label: 'Bottom CTA',
          fields: [
            { name: 'ctaHeading', type: 'text', defaultValue: 'Worship at Marlowe' },
            { name: 'ctaBody', type: 'text', defaultValue: "No matter where you are in your journey, there's a place for you here." },
            { name: 'ctaButtonText', type: 'text', defaultValue: "I'm New" },
            { name: 'ctaButtonLink', type: 'text', defaultValue: '/im-new' },
          ],
        },
      ],
    },
  ],
}
