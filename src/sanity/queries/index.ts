// ---------------------------------------------------------------------------
// Shared image / portable-text projection fragments
// ---------------------------------------------------------------------------

const imageFields = `
  asset->{
    _id,
    url,
    metadata { dimensions, lqip }
  },
  hotspot,
  crop,
  alt
`;

const portableTextField = `[]{ ..., markDefs[]{ ... } }`;

// ---------------------------------------------------------------------------
// Site Settings
// ---------------------------------------------------------------------------

export const siteSettingsQuery = /* groq */ `
  *[_type == "siteSettings"][0]{
    churchName,
    tagline,
    missionStatement${portableTextField},
    logo{ ${imageFields} },
    launchDate,
    serviceTimes[]{
      dayOfWeek,
      time,
      label
    },
    email,
    phone,
    address{
      street,
      city,
      state,
      zip
    },
    instagram,
    facebook,
    youtube,
    twitter,
    tiktok,
    values[]{
      title,
      description,
      icon
    },
    navCtaLabel,
    givingLink,
    copyrightText,
    footerTagline,
    denominationText,
    metaTitle,
    metaDescription,
    ogImage{ ${imageFields} }
  }
`;

// ---------------------------------------------------------------------------
// Home Page
// ---------------------------------------------------------------------------

export const homePageQuery = /* groq */ `
  *[_type == "homePage"][0]{
    heroHeading,
    heroSubheading,
    heroImage{ ${imageFields} },
    heroVideoUrl,
    heroCtas[]{
      label,
      link,
      style
    },
    welcomeHeading,
    welcomeBody${portableTextField},
    welcomeImage{ ${imageFields} },
    welcomeCtaLabel,
    welcomeCtaLink,
    galleryImages[]{
      ${imageFields},
      caption
    },
    sections[]{
      sectionType,
      heading,
      body${portableTextField},
      image{ ${imageFields} },
      cta{
        label,
        link
      }
    }
  }
`;

// ---------------------------------------------------------------------------
// About Page
// ---------------------------------------------------------------------------

export const aboutPageQuery = /* groq */ `
  *[_type == "aboutPage"][0]{
    heroHeading,
    heroSubheading,
    heroImage{ ${imageFields} },
    whoWeAreHeading,
    whoWeAreBody${portableTextField},
    whoWeAreImage{ ${imageFields} },
    beliefsHeading,
    beliefs[]{
      title,
      description${portableTextField}
    },
    denominationHeading,
    denominationBody${portableTextField},
    denominationImage{ ${imageFields} },
    showStaff
  }
`;

// ---------------------------------------------------------------------------
// Giving Page
// ---------------------------------------------------------------------------

export const givingPageQuery = /* groq */ `
  *[_type == "givingPage"][0]{
    heroHeading,
    heroSubheading,
    mainHeading,
    mainBody${portableTextField},
    givingLink,
    onlineGivingHeading,
    onlineGivingBody,
    onlineGivingButtonLabel,
    waysToGive[]{
      title,
      description,
      icon
    },
    scriptureText,
    scriptureReference
  }
`;

// ---------------------------------------------------------------------------
// Contact Page
// ---------------------------------------------------------------------------

export const contactPageQuery = /* groq */ `
  *[_type == "contactPage"][0]{
    heroHeading,
    heroSubheading,
    formHeading,
    formSubtitle,
    recipientEmail,
    successMessage,
    quoteText,
    quoteAttribution,
    quoteRole,
    showMap,
    body${portableTextField}
  }
`;

// ---------------------------------------------------------------------------
// Events
// ---------------------------------------------------------------------------

const eventProjection = `
  _id,
  title,
  "slug": slug.current,
  date,
  endDate,
  timeDisplay,
  location,
  category,
  description${portableTextField},
  image{ ${imageFields} },
  registrationLink,
  featured,
  recurring,
  recurrencePattern
`;

export const eventsQuery = /* groq */ `
  *[_type == "event"] | order(date asc){
    ${eventProjection}
  }
`;

export const upcomingEventsQuery = /* groq */ `
  *[_type == "event" && date >= now()] | order(date asc)[0...6]{
    ${eventProjection}
  }
`;

export const featuredEventsQuery = /* groq */ `
  *[_type == "event" && featured == true] | order(date asc){
    ${eventProjection}
  }
`;

// ---------------------------------------------------------------------------
// Sermons
// ---------------------------------------------------------------------------

const sermonProjection = `
  _id,
  title,
  "slug": slug.current,
  preacher->{ _id, name, role, photo{ ${imageFields} } },
  date,
  series,
  scriptureReference,
  description${portableTextField},
  videoUrl,
  "audioFileUrl": audioFile.asset->url,
  audioUrl,
  image{ ${imageFields} },
  order
`;

export const sermonsQuery = /* groq */ `
  *[_type == "sermon"] | order(date desc){
    ${sermonProjection}
  }
`;

export const latestSermonQuery = /* groq */ `
  *[_type == "sermon"] | order(date desc)[0]{
    ${sermonProjection}
  }
`;

export const sermonsBySeriesQuery = /* groq */ `
  *[_type == "sermon" && series == $series] | order(date desc){
    ${sermonProjection}
  }
`;

// ---------------------------------------------------------------------------
// Ministries
// ---------------------------------------------------------------------------

const ministryProjection = `
  _id,
  name,
  "slug": slug.current,
  description${portableTextField},
  schedule,
  leader->{ _id, name, role, photo{ ${imageFields} } },
  contactEmail,
  image{ ${imageFields} },
  order
`;

export const ministriesQuery = /* groq */ `
  *[_type == "ministry"] | order(order asc){
    ${ministryProjection}
  }
`;

// ---------------------------------------------------------------------------
// Staff
// ---------------------------------------------------------------------------

const staffProjection = `
  _id,
  name,
  role,
  email,
  phone,
  photo{ ${imageFields} },
  bio${portableTextField},
  order
`;

export const staffQuery = /* groq */ `
  *[_type == "staff"] | order(order asc){
    ${staffProjection}
  }
`;

// ---------------------------------------------------------------------------
// Events Page (singleton)
// ---------------------------------------------------------------------------

export const eventsPageQuery = /* groq */ `
  *[_type == "eventsPage"][0]{
    heroHeading,
    heroSubheading,
    heroImage{ ${imageFields} },
    ctaHeading,
    ctaBody,
    ctaButtonLabel,
    ctaButtonLink
  }
`;

// ---------------------------------------------------------------------------
// Staff Page (singleton)
// ---------------------------------------------------------------------------

export const staffPageQuery = /* groq */ `
  *[_type == "staffPage"][0]{
    heroHeading,
    heroSubheading,
    heroImage{ ${imageFields} },
    ctaHeading,
    ctaBody,
    ctaButtonLabel,
    ctaButtonLink
  }
`;
