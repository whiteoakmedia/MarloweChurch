import type { GlobalConfig } from 'payload'

export const RoyalRangersPage: GlobalConfig = {
  slug: 'royal-rangers-page',
  label: 'Royal Rangers & Girls Page',
  admin: { group: 'Pages' },
  fields: [
    { name: 'heroSubtitle', type: 'text', defaultValue: 'Building the next generation of Christlike leaders \u2014 every Wednesday night at Marlowe Assembly of God.' },
    {
      name: 'rangersFeatures',
      type: 'array',
      label: 'Royal Rangers Features',
      fields: [
        { name: 'text', type: 'text', required: true },
      ],
    },
    { name: 'rangersSignupUrl', type: 'text', defaultValue: 'https://marloweag.churchcenter.com/people/forms/948916' },
    { name: 'rangersFacebookUrl', type: 'text', defaultValue: 'https://www.facebook.com/groups/328097517014117' },
    {
      name: 'girlsFeatures',
      type: 'array',
      label: 'Girls Ministries Features',
      fields: [
        { name: 'text', type: 'text', required: true },
      ],
    },
    { name: 'girlsSignupUrl', type: 'text', defaultValue: 'https://marloweag.churchcenter.com/people/forms/948886' },
    { name: 'scheduleDescription', type: 'textarea', defaultValue: "Every Wednesday night from 7:00\u20138:30 PM, our church comes alive with midweek programs designed just for kids and teens. We gather in the church fellowship hall, and there's something for everyone\u2014starting at age 3 and going all the way through high school. Whether you're a member of the church or not, your family is welcome to join us! Each age group has its own class filled with Bible-based activities that help them grow in their faith in fun, engaging ways. Kids have the chance to earn achievements through scripture memorization, completing lessons, and participating in special projects. At the end of the season, we'll celebrate their hard work with an awards ceremony. Throughout the year, we also have exciting events, campouts, and other fun activities planned to keep kids connected and energized." },
    { name: 'scheduleNote', type: 'text', defaultValue: 'Please note \u2014 we do take a break for the summer, but during the school year, it\u2019s a great midweek opportunity for your kids to grow, learn, and make lasting friendships.' },
    { name: 'ctaHeading', type: 'text', defaultValue: 'Get your kids connected!' },
    { name: 'ctaBody', type: 'text', defaultValue: 'Join us this Wednesday night for an unforgettable experience.' },
  ],
}
