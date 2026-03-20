import type { Payload } from 'payload'

// ─── Staff Data ───────────────────────────────────────────────────────────────

const staffMembers = [
  {
    name: 'Pastor Joel Dahlstrom',
    slug: 'pastor-joel-dahlstrom',
    role: 'Lead Pastor',
    email: '',
    order: 1,
    photoUrl: 'https://cdn.prod.website-files.com/6793f5cd2f0d64c0c5876850/67c60b9b12eb1d8401bec55d_Headshot%20from%20White%20Oak%20Media.jpeg',
    bio: '<p>Pastor Joel serves as our Lead Pastor, guiding the church with vision, leadership, and oversight. He collaborates with church staff and leaders to ensure the ministry stays aligned with its mission and purpose.</p>',
  },
  {
    name: 'Angie Dahlstrom',
    slug: 'angie-dahlstrom',
    role: 'Ministries Facilitator/Worship Pastor',
    email: '',
    order: 2,
    photoUrl: 'https://cdn.prod.website-files.com/6793f5cd2f0d64c0c5876850/67c60beef43e53772266c996_Headshot%20and%20Bio%20from%20Zach.jpg',
    bio: '<p>Angie Dahlstrom facilitates various ministries and church-wide events to help strengthen and support the church body. With a heart for organization and discipleship, Angie enjoys equipping and mentoring others, ensuring that teams and ministries run smoothly and effectively. Angie is also an experienced worship leader, having had a calling for worship ministry since she was in high school. She sees it an honor and a privilege to use her gifts to help create an atmosphere of praise and spiritual growth within the church. Angie has been happily married to Pastor Joel since 2010, and she thoroughly enjoys supporting him and his vision for Marlowe AG. Together they have 3 beautiful children\u2014 Aria, Colson, and Eisley.</p>',
  },
  {
    name: 'Abbey Suazo',
    slug: 'abbey-suazo',
    role: 'Youth Leader',
    email: '',
    order: 3,
    photoUrl: 'https://cdn.prod.website-files.com/6793f5cd2f0d64c0c5876850/68e7d520cec9fc58210ce496_image0%20(9).jpeg',
    bio: '<p><strong>Abbey</strong> brings both passion and dedication to youth ministry. With previous experience leading another youth group, she has a genuine heart for guiding students in their walk with Christ. Abbey is currently completing her coursework to obtain her minister\'s license with the Assemblies of God. She carries a boldness for witnessing and preaching the Gospel, always eager to share God\'s love. One of her favorite scriptures, Psalm 42:1, beautifully reflects her heart for the Lord: <em>\u201cAs the deer pants for streams of water, so my soul pants for you, my God.\u201d</em></p>',
  },
  {
    name: 'Natalia',
    slug: 'childrens-ministry-director',
    role: "Children's Ministry Director",
    email: '',
    order: 4,
    photoUrl: 'https://cdn.prod.website-files.com/6793f5cd2f0d64c0c5876850/6983990abaeabbcc60920786_Website%20Glitch%20Feedback.jpg',
    bio: '<p>Natalia has always had a deep passion for children and helping them grow in their faith and love for the Lord. She previously served as a teacher\'s assistant, where she worked closely with students in a nurturing, supportive environment. She finds great joy in watching children learn about Christ, discover His love, and begin building a strong foundation of faith through fun, age-appropriate Bible lessons and activities.</p><p>As a mom of two wonderful children, Natalia brings both professional experience and real-life parenting insight to her heart for discipling the next generation. Her warm, cheerful, and uplifting spirit helps create a safe and welcoming space where kids can encounter Jesus, grow in their relationship with Him, and feel truly valued. Natalia is passionate about partnering with families as they raise their children to follow Christ, and she is excited to serve alongside the Marlowe AG family and see God at work in the hearts of our children.</p>',
  },
  {
    name: 'Debbie Rimmer',
    slug: 'debbie-rimmer',
    role: 'Kids Church Leader',
    email: '',
    order: 5,
    photoUrl: 'https://cdn.prod.website-files.com/6793f5cd2f0d64c0c5876850/67c07372d45b5d8d0c3842b2_Final%20Stretch%20Website%20-%20Debbie%20Rimmer.jpg',
    bio: '<p>With over 50 years of experience in Kids Ministry, I have a deep passion for sharing God\'s love with the next generation. I consider it a true privilege to serve the children of our church and community, helping them grow in their faith while experiencing the joy of knowing Jesus. Nothing brings me greater joy than seeing kids learn, laugh, and encounter God in a meaningful way!</p>',
  },
]

// ─── Ministry Data ────────────────────────────────────────────────────────────

const ministries = [
  {
    name: 'Kids Church',
    slug: 'kids',
    schedule: 'Every Sunday at 9:00 AM & 11:00 AM',
    order: 1,
    description: '<p>Every Sunday, your kids will experience a safe, engaging, and Christ-centered environment designed just for them! Our services include exciting Bible lessons, worship and praise, interactive games and activities, and small groups for building friendships and helping kids grow spiritually.</p>',
    imageUrl: 'https://cdn.prod.website-files.com/6793f5cd2f0d64c0c587684f/67c0d6c0e0b0e67c39bde37a_ben-wicks-iDCtsz-INHI-unsplash.jpg',
  },
  {
    name: 'Foundation Youth',
    slug: 'youth',
    schedule: 'Sundays at 6:00 PM (Sep\u2013May) / Wednesdays at 7:00 PM (Jun\u2013Aug)',
    order: 2,
    description: '<p>Foundation Youth is a vibrant and welcoming community where students can grow in their faith, build meaningful friendships, and discover their God-given purpose. Through engaging discussions, worship, and fun activities, we create an environment where students feel seen, valued, and encouraged in their spiritual journey.</p><p>Each gathering is an opportunity to connect with others, explore biblical truths, and strengthen your relationship with Christ in a supportive and energetic setting. Whether you\u2019re new to faith or looking to deepen your walk with God, Foundation Youth is a place for you!</p>',
    imageUrl: 'https://cdn.prod.website-files.com/6793f5cd2f0d64c0c587684f/67c0d89c63e4e71b9e4322d4_Final-Stretch-Website-Image-2.jpeg',
  },
  {
    name: 'Royal Rangers',
    slug: 'royal-rangers',
    schedule: 'Every Wednesday, 7:00\u20138:30 PM',
    order: 3,
    description: '<p>Royal Rangers is a mentoring and discipleship program for boys in Kindergarten through 12th grade. Through adventure, character development, and fellowship, we help young men grow in faith and become Christlike leaders.</p>',
    imageUrl: 'https://cdn.prod.website-files.com/6793f5cd2f0d64c0c587684f/67c0d71dcf42f5fb8ebc01f2_Royal-Rangers-Event.webp',
  },
  {
    name: 'Girls Ministries',
    slug: 'girls-ministries',
    schedule: 'Every Wednesday, 7:00\u20138:30 PM',
    order: 4,
    description: '<p>Girls Ministries is a discipleship program that empowers girls in Kindergarten through 12th grade to grow in their faith, build lasting friendships, and discover their God-given purpose. Our goal is simple: to see every girl moving toward a deep relationship with Jesus Christ, and to realize her importance and potential in the kingdom of God.</p>',
    imageUrl: 'https://cdn.prod.website-files.com/6793f5cd2f0d64c0c587684f/67c0d744e8f9e1fa2a5bb3e6_Girls-Ministries-Image.jpg',
  },
]

// ─── Helpers ──────────────────────────────────────────────────────────────────

function htmlToLexical(html: string) {
  const paragraphs = html.split(/<\/?p[^>]*>/).filter((s) => s.trim())
  const children = paragraphs.map((p) => {
    const text = p.replace(/<[^>]+>/g, '').trim()
    if (!text) return null
    return {
      type: 'paragraph',
      version: 1,
      children: [
        {
          type: 'text',
          version: 1,
          text,
          format: 0,
          detail: 0,
          mode: 'normal',
          style: '',
        },
      ],
      direction: 'ltr',
      format: '',
      indent: 0,
      textFormat: 0,
      textStyle: '',
    }
  }).filter(Boolean)

  return {
    root: {
      type: 'root',
      version: 1,
      children,
      direction: 'ltr',
      format: '',
      indent: 0,
    },
  }
}

async function uploadImage(payload: Payload, url: string, alt: string) {
  try {
    const response = await fetch(url)
    if (!response.ok) return null
    const buffer = Buffer.from(await response.arrayBuffer())
    const contentType = response.headers.get('content-type') || 'image/jpeg'
    const ext = contentType.includes('png') ? 'png' : contentType.includes('webp') ? 'webp' : 'jpeg'
    const filename = `${alt.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.${ext}`

    const media = await payload.create({
      collection: 'media',
      data: { alt },
      file: {
        data: buffer,
        mimetype: contentType,
        name: filename,
        size: buffer.length,
      },
    })
    return media.id
  } catch (e) {
    console.error(`Failed to upload image for ${alt}:`, (e as Error).message)
    return null
  }
}

// ─── Seed Function ────────────────────────────────────────────────────────────

export async function seed(payload: Payload) {
  // Check if already seeded
  const existingStaff = await payload.find({ collection: 'staff', limit: 1 })
  if (existingStaff.docs.length > 0) {
    console.log('Already seeded, skipping.')
    return
  }

  // ── Site Settings ─────────────────────────────────────────────────────────
  console.log('Seeding site settings...')
  try {
    await payload.updateGlobal({
      slug: 'site-settings',
      data: {
        churchName: 'Marlowe Assembly of God',
        tagline: 'Love God, Love People, Live with Purpose',
        denomination: 'Assemblies of God',
        phone: '(304) 274-2474',
        email: 'marloweag@gmail.com',
        address: {
          street: '9045 Williamsport Pike',
          city: 'Falling Waters',
          state: 'WV',
          zip: '25419',
        },
        serviceTimes: [
          { dayOfWeek: 'Sunday', time: '9:00 AM', label: 'Worship Service' },
          { dayOfWeek: 'Sunday', time: '11:00 AM', label: 'Worship Service' },
          { dayOfWeek: 'Wednesday', time: '7:00 PM', label: 'Midweek Service' },
        ],
        socialLinks: {
          facebook: 'https://www.facebook.com/MarloweAG',
          youtube: 'https://www.youtube.com/@marloweassemblyofgod523',
        },
        givingUrl: 'https://tithe.ly/give_new/www/#/tithely/give-one-time/5676055',
        meta: {
          title: 'Marlowe Assembly of God | Love God, Love People, Live with Purpose',
          description: 'A church where faith is real, community is strong, and lives are transformed. Located in Falling Waters, WV.',
        },
        scripts: {
          googleAnalyticsId: 'G-CM8X3XY2QS',
        },
      },
    })
    console.log('  \u2713 Site Settings')
  } catch (e) {
    console.error('  \u2717 Site Settings:', (e as Error).message)
  }

  // ── Staff ─────────────────────────────────────────────────────────────────
  console.log('Seeding staff...')
  for (const member of staffMembers) {
    try {
      const photoId = member.photoUrl
        ? await uploadImage(payload, member.photoUrl, member.name)
        : null

      await payload.create({
        collection: 'staff',
        data: {
          name: member.name,
          slug: member.slug,
          role: member.role,
          email: member.email || undefined,
          order: member.order,
          bio: htmlToLexical(member.bio),
          ...(photoId ? { photo: photoId } : {}),
        },
      })
      console.log(`  \u2713 ${member.name}`)
    } catch (e) {
      console.error(`  \u2717 ${member.name}:`, (e as Error).message)
    }
  }

  // ── Ministries ────────────────────────────────────────────────────────────
  console.log('Seeding ministries...')
  for (const ministry of ministries) {
    try {
      const imageId = ministry.imageUrl
        ? await uploadImage(payload, ministry.imageUrl, ministry.name)
        : null

      await payload.create({
        collection: 'ministries',
        data: {
          name: ministry.name,
          slug: ministry.slug,
          schedule: ministry.schedule,
          order: ministry.order,
          description: htmlToLexical(ministry.description),
          ...(imageId ? { image: imageId } : {}),
        },
      })
      console.log(`  \u2713 ${ministry.name}`)
    } catch (e) {
      console.error(`  \u2717 ${ministry.name}:`, (e as Error).message)
    }
  }

  // ── Page Globals ─────────────────────────────────────────────────────────
  console.log('Seeding page globals...')

  // Beliefs page — seed the full AG statement of faith
  try {
    await payload.updateGlobal({
      slug: 'beliefs-page',
      data: {
        badge: 'Statement of Faith',
        heroHeading: 'Our Beliefs',
        denominationLabel: 'Potomac Network and National AG Website',
        denominationUrl: 'https://www.potomacag.org/',
        beliefs: [
          { title: 'The Scriptures Inspired', description: 'The Scriptures, both the Old and New Testaments, are verbally inspired of God and are the revelation of God to man, the infallible, authoritative rule of faith and conduct.', scriptures: [{ reference: '2 Timothy 3:15-17', url: 'https://www.biblegateway.com/passage/?search=2+Timothy+3%3A15-17&version=NIV' }, { reference: '1 Thessalonians 2:13', url: 'https://www.biblegateway.com/passage/?search=1+Thessalonians+2%3A13&version=NIV' }, { reference: '2 Peter 1:21', url: 'https://www.biblegateway.com/passage/?search=2+Peter+1%3A21&version=NIV' }] },
          { title: 'The One True God', description: 'The one true God has revealed Himself as the eternally self-existent "I AM," the Creator of heaven and earth and the Redeemer of mankind. He has further revealed Himself as embodying the principles of relationship and association as Father, Son and Holy Spirit.', scriptures: [{ reference: 'Deuteronomy 6:4', url: 'https://www.biblegateway.com/passage/?search=Deuteronomy+6%3A4&version=NIV' }, { reference: 'Isaiah 43:10,11', url: 'https://www.biblegateway.com/passage/?search=Isaiah+43%3A10-11&version=NIV' }, { reference: 'Matthew 28:19', url: 'https://www.biblegateway.com/passage/?search=Matthew+28%3A19&version=NIV' }] },
          { title: 'The Deity of the Lord Jesus Christ', description: 'The Lord Jesus Christ is the eternal Son of God. The Scriptures declare:', scriptures: [{ reference: 'Matthew 1:23', url: 'https://www.biblegateway.com/passage/?search=Matthew+1%3A23&version=NIV' }, { reference: 'Hebrews 7:26', url: 'https://www.biblegateway.com/passage/?search=Hebrews+7%3A26&version=NIV' }, { reference: 'Acts 2:22', url: 'https://www.biblegateway.com/passage/?search=Acts+2%3A22&version=NIV' }] },
          { title: 'The Fall of Man', description: 'Man was created good and upright; for God said, "Let us make man in our own image, after our likeness." However, man by voluntary transgression fell and thereby incurred not only physical death but also spiritual death, which is separation from God.', scriptures: [{ reference: 'Genesis 1:26,27', url: 'https://www.biblegateway.com/passage/?search=Genesis+1%3A26-27&version=NIV' }, { reference: 'Genesis 2:17', url: 'https://www.biblegateway.com/passage/?search=Genesis+2%3A17&version=NIV' }, { reference: 'Romans 5:12-19', url: 'https://www.biblegateway.com/passage/?search=Romans+5%3A12-19&version=NIV' }] },
          { title: 'The Salvation of Man', description: "Man's only hope of redemption is through the shed blood of Jesus Christ the Son of God.", scriptures: [{ reference: 'Luke 24:47', url: 'https://www.biblegateway.com/passage/?search=Luke+24%3A47&version=NIV' }, { reference: 'John 3:3', url: 'https://www.biblegateway.com/passage/?search=John+3%3A3&version=NIV' }, { reference: 'Romans 10:13-15', url: 'https://www.biblegateway.com/passage/?search=Romans+10%3A13-15&version=NIV' }, { reference: 'Ephesians 2:8', url: 'https://www.biblegateway.com/passage/?search=Ephesians+2%3A8&version=NIV' }] },
          { title: 'The Ordinances of the Church', description: 'The ordinance of baptism by immersion is commanded by the Scriptures. All who repent and believe on Christ as Saviour and Lord are to be baptized. Thus they declare to the world that they have died with Christ and that they also have been raised with Him to walk in newness of life.', scriptures: [{ reference: 'Matthew 28:19', url: 'https://www.biblegateway.com/passage/?search=Matthew+28%3A19&version=NIV' }, { reference: 'Mark 16:16', url: 'https://www.biblegateway.com/passage/?search=Mark+16%3A16&version=NIV' }, { reference: 'Acts 10:47,48', url: 'https://www.biblegateway.com/passage/?search=Acts+10%3A47-48&version=NIV' }] },
          { title: 'The Baptism in the Holy Spirit', description: 'All believers are entitled to and should ardently expect and earnestly seek the promise of the Father, the baptism in the Holy Spirit and fire, according to the command of our Lord Jesus Christ. This was the normal experience of all in the early Christian Church. With it comes the enduement of power for life and service, the bestowment of the gifts and their uses in the work of the ministry.', scriptures: [{ reference: 'Luke 24:49', url: 'https://www.biblegateway.com/passage/?search=Luke+24%3A49&version=NIV' }, { reference: 'Acts 1:4', url: 'https://www.biblegateway.com/passage/?search=Acts+1%3A4&version=NIV' }, { reference: 'Acts 1:8', url: 'https://www.biblegateway.com/passage/?search=Acts+1%3A8&version=NIV' }, { reference: '1 Corinthians 12:1-31', url: 'https://www.biblegateway.com/passage/?search=1+Corinthians+12%3A1-31&version=NIV' }] },
          { title: 'The Initial Physical Evidence of the Baptism in the Holy Spirit', description: 'The baptism of believers in the Holy Spirit is witnessed by the initial physical sign of speaking with other tongues as the Spirit of God gives them utterance.', scriptures: [{ reference: 'Acts 2:4', url: 'https://www.biblegateway.com/passage/?search=Acts+2%3A4&version=NIV' }] },
          { title: 'Sanctification', description: 'Sanctification is an act of separation from that which is evil, and of dedication unto God.', scriptures: [{ reference: 'Romans 12:1,2', url: 'https://www.biblegateway.com/passage/?search=Romans+12%3A1-2&version=NIV' }, { reference: '1 Thessalonians 5:23', url: 'https://www.biblegateway.com/passage/?search=1+Thessalonians+5%3A23&version=NIV' }, { reference: 'Hebrews 13:12', url: 'https://www.biblegateway.com/passage/?search=Hebrews+13%3A12&version=NIV' }] },
          { title: 'The Church and Its Mission', description: 'The Church is the Body of Christ, the habitation of God through the Spirit, with divine appointments for the fulfillment of her great commission. Each believer, born of the Spirit, is an integral part of the General Assembly and Church of the Firstborn, which are written in heaven.', scriptures: [{ reference: 'Ephesians 1:22,23', url: 'https://www.biblegateway.com/passage/?search=Ephesians+1%3A22-23&version=NIV' }, { reference: 'Ephesians 2:22', url: 'https://www.biblegateway.com/passage/?search=Ephesians+2%3A22&version=NIV' }, { reference: 'Hebrews 12:23', url: 'https://www.biblegateway.com/passage/?search=Hebrews+12%3A23&version=NIV' }] },
          { title: 'The Ministry', description: 'A divinely called and scripturally ordained ministry has been provided by our Lord for the fourfold purpose of leading the Church.', scriptures: [{ reference: 'Mark 16:15-20', url: 'https://www.biblegateway.com/passage/?search=Mark+16%3A15-20&version=NIV' }, { reference: 'Ephesians 4:11-16', url: 'https://www.biblegateway.com/passage/?search=Ephesians+4%3A11-16&version=NIV' }] },
          { title: 'Divine Healing', description: 'Divine healing is an integral part of the gospel. Deliverance from sickness is provided for in the atonement, and is the privilege of all believers.', scriptures: [{ reference: 'Isaiah 53:4,5', url: 'https://www.biblegateway.com/passage/?search=Isaiah+53%3A4-5&version=NIV' }, { reference: 'Matthew 8:16,17', url: 'https://www.biblegateway.com/passage/?search=Matthew+8%3A16-17&version=NIV' }, { reference: 'James 5:14-16', url: 'https://www.biblegateway.com/passage/?search=James+5%3A14-16&version=NIV' }] },
          { title: 'The Blessed Hope', description: 'The resurrection of those who have fallen asleep in Christ and their translation together with those who are alive and remain unto the coming of the Lord is the imminent and blessed hope of the church.', scriptures: [{ reference: '1 Thessalonians 4:16,17', url: 'https://www.biblegateway.com/passage/?search=1+Thessalonians+4%3A16-17&version=NIV' }, { reference: 'Romans 8:23', url: 'https://www.biblegateway.com/passage/?search=Romans+8%3A23&version=NIV' }, { reference: 'Titus 2:13', url: 'https://www.biblegateway.com/passage/?search=Titus+2%3A13&version=NIV' }] },
          { title: 'The Millennial Reign of Jesus Christ', description: 'The second coming of Christ includes the rapture of the saints, which is our blessed hope, followed by the visible return of Christ with His saints to reign on earth for one thousand years.', scriptures: [{ reference: 'Zechariah 14:5', url: 'https://www.biblegateway.com/passage/?search=Zechariah+14%3A5&version=NIV' }, { reference: 'Matthew 24:27,30', url: 'https://www.biblegateway.com/passage/?search=Matthew+24%3A27&version=NIV' }, { reference: 'Revelation 1:7', url: 'https://www.biblegateway.com/passage/?search=Revelation+1%3A7&version=NIV' }] },
          { title: 'The Final Judgement', description: 'There will be a final judgment in which the wicked dead will be raised and judged according to their works. Whosoever is not found written in the Book of Life, together with the devil and his angels, the beast and the false prophet, will be consigned to the everlasting punishment in the lake which burneth with fire and brimstone, which is the second death.', scriptures: [{ reference: 'Matthew 25:46', url: 'https://www.biblegateway.com/passage/?search=Matthew+25%3A46&version=NIV' }, { reference: 'Revelation 19:20', url: 'https://www.biblegateway.com/passage/?search=Revelation+19%3A20&version=NIV' }, { reference: 'Revelation 21:8', url: 'https://www.biblegateway.com/passage/?search=Revelation+21%3A8&version=NIV' }] },
          { title: 'The New Heavens and the New Earth', description: '"We, according to His promise, look for new heavens and a new earth wherein dwelleth righteousness."', scriptures: [{ reference: '2 Peter 3:13', url: 'https://www.biblegateway.com/passage/?search=2+Peter+3%3A13&version=NIV' }, { reference: 'Revelation 21', url: 'https://www.biblegateway.com/passage/?search=Revelation+21&version=NIV' }, { reference: 'Revelation 22', url: 'https://www.biblegateway.com/passage/?search=Revelation+22&version=NIV' }] },
        ],
      },
    })
    console.log('  \u2713 Beliefs Page')
  } catch (e) {
    console.error('  \u2717 Beliefs Page:', (e as Error).message)
  }

  // Kids page features
  try {
    await payload.updateGlobal({
      slug: 'kids-page',
      data: {
        features: [
          { title: 'Exciting Bible Lessons', description: "Teaching God's Word in ways kids understand and remember." },
          { title: 'Worship & Praise', description: 'Encouraging kids to express their love for Jesus through music.' },
          { title: 'Interactive Games & Activities', description: 'Making learning about faith fun!' },
          { title: 'Small Groups', description: 'Building friendships and helping kids grow spiritually.' },
        ],
      },
    })
    console.log('  \u2713 Kids Page')
  } catch (e) {
    console.error('  \u2717 Kids Page:', (e as Error).message)
  }

  // Youth page schedule
  try {
    await payload.updateGlobal({
      slug: 'youth-page',
      data: {
        schedule: [
          { season: 'September \u2013 May', dayTime: 'Sundays at 6:00 PM' },
          { season: 'June \u2013 August', dayTime: 'Wednesdays at 7:00 PM' },
        ],
      },
    })
    console.log('  \u2713 Youth Page')
  } catch (e) {
    console.error('  \u2717 Youth Page:', (e as Error).message)
  }

  // Royal Rangers page features
  try {
    await payload.updateGlobal({
      slug: 'royal-rangers-page',
      data: {
        rangersFeatures: [
          { text: 'Outdoor adventures including camping, hiking, and survival skills' },
          { text: 'Bible-based character development and leadership training' },
          { text: 'Achievement awards and merit badges' },
          { text: 'Service projects that make a real impact in the community' },
          { text: 'Lifelong friendships with other young men of faith' },
        ],
        girlsFeatures: [
          { text: 'Age-appropriate Bible studies and devotions' },
          { text: 'Creative arts, crafts, and hands-on projects' },
          { text: 'Community service and missions awareness' },
          { text: 'Achievement awards and badges for spiritual growth' },
          { text: 'Fun events, sleepovers, and special outings' },
          { text: 'Mentorship from godly women leaders' },
        ],
      },
    })
    console.log('  \u2713 Royal Rangers Page')
  } catch (e) {
    console.error('  \u2717 Royal Rangers Page:', (e as Error).message)
  }

  console.log('Seeding complete.')
}
