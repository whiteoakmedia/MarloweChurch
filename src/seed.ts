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

  console.log('Seeding complete.')
}
