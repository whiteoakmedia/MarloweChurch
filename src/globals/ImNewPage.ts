import type { GlobalConfig } from 'payload'

export const ImNewPage: GlobalConfig = {
  slug: 'im-new-page',
  label: "I'm New Page",
  admin: { group: 'Pages & Content' },
  fields: [
    { name: 'heroSubtitle', type: 'text', defaultValue: "Whether you're exploring faith or looking for a church to call home, you belong here." },
    { name: 'heroCtaText', type: 'text', defaultValue: "I'm New" },
    { name: 'heroCtaUrl', type: 'text', defaultValue: 'https://marloweag.churchcenter.com/people/forms/920327' },
    { name: 'aboutHeading', type: 'text' },
    { name: 'aboutBody', type: 'richText' },
    { name: 'aboutFallbackText', type: 'textarea', defaultValue: "At Marlowe Church, we are passionate about encountering God, growing in faith, and serving our community with love. Whether you're exploring faith for the first time or looking for a church to call home, you'll find a welcoming family here. Our mission is to share the hope of Jesus, build authentic relationships, and equip people to live out their faith in everyday life. No matter where you are in your journey, there's a place for you at Marlowe. Join us and experience a church where faith is real, community is strong, and lives are transformed. We can't wait to meet you!" },
    { name: 'joinHeading', type: 'text', defaultValue: 'No matter where you are, join us for Church.' },
    { name: 'liveStreamUrl', type: 'text', defaultValue: 'https://www.youtube.com/@marloweassemblyofgod523/streams' },
    { name: 'visitFormUrl', type: 'text', defaultValue: 'https://marloweag.churchcenter.com/people/forms/920144' },
    { name: 'ctaHeading', type: 'text', defaultValue: "We can't wait to meet you!" },
    { name: 'ctaUrl', type: 'text', defaultValue: 'https://marloweag.churchcenter.com/people/forms/920144' },
    { name: 'ctaButtonText', type: 'text', defaultValue: "Let Us Know When You're Coming!" },
  ],
}
