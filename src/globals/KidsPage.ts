import type { GlobalConfig } from 'payload'

export const KidsPage: GlobalConfig = {
  slug: 'kids-page',
  label: 'Kids Page',
  admin: { group: 'Pages' },
  fields: [
    { name: 'heroSubtitle', type: 'text', defaultValue: "A place where kids laugh, learn about Jesus, and experience His presence in a way that's exciting and unforgettable!" },
    { name: 'expectHeading', type: 'text', defaultValue: 'What to Expect' },
    {
      name: 'features',
      type: 'array',
      label: 'Feature List',
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'text', required: true },
      ],
    },
    { name: 'midweekBadge', type: 'text', defaultValue: 'Wednesday Nights' },
    { name: 'midweekHeading', type: 'text', defaultValue: 'Midweek Programs' },
    { name: 'girlsDescription', type: 'textarea', defaultValue: 'Girls Ministries is a church-based discipleship program that has a legacy of godly women coming alongside girls, guiding them on a path to become mature and godly women. Our goal is simple: To see every girl moving toward a deep relationship with Jesus Christ, and to realize her importance and potential in the kingdom of God.' },
    { name: 'girlsSignupUrl', type: 'text', defaultValue: 'https://marloweag.churchcenter.com/people/forms/948886' },
    { name: 'rangersDescription', type: 'textarea', defaultValue: 'Royal Rangers is an activity-based, small-group church ministry for boys and young men in grades K-12 with a mission to evangelize, equip and empower the next generation of Christlike men and lifelong servant leaders.' },
    { name: 'rangersSignupUrl', type: 'text', defaultValue: 'https://marloweag.churchcenter.com/people/forms/948916' },
    { name: 'rangersFacebookUrl', type: 'text', defaultValue: 'https://www.facebook.com/groups/328097517014117' },
    { name: 'wednesdayDescription', type: 'textarea', defaultValue: "Every Wednesday night from 7:00\u20138:30 PM, our church comes alive with midweek programs designed just for kids and teens. We gather in the church fellowship hall, and there's something for everyone\u2014starting at age 3 and going all the way through high school. Whether you're a member of the church or not, your family is welcome to join us!" },
  ],
}
