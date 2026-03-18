import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "1lhn358p",
  dataset: "production",
  token: process.env.SANITY_API_TOKEN,
  apiVersion: "2024-01-01",
  useCdn: false,
});

if (!process.env.SANITY_API_TOKEN) {
  console.error("Missing SANITY_API_TOKEN env var");
  process.exit(1);
}

function key() { return crypto.randomUUID().slice(0, 8); }
function blocks(...texts) {
  return texts.map(text => ({
    _type: "block", _key: key(), style: "normal", markDefs: [],
    children: [{ _type: "span", _key: key(), text, marks: [] }],
  }));
}

const siteSettings = {
  _id: "siteSettings",
  _type: "siteSettings",
  churchName: "Marlowe Assembly of God",
  tagline: "Love God, Love People, Live with Purpose",
  serviceTimes: [
    { _key: key(), dayOfWeek: "Sunday", time: "9:00 AM", label: "First Service" },
    { _key: key(), dayOfWeek: "Sunday", time: "11:00 AM", label: "Second Service" },
    { _key: key(), dayOfWeek: "Wednesday", time: "7:00 PM", label: "Midweek Service" },
  ],
  email: "marloweag@gmail.com",
  phone: "(304) 274-2474",
  address: { street: "9045 Williamsport Pike", city: "Falling Waters", state: "WV", zip: "25419" },
  youtube: "https://www.youtube.com/@MarloweAG/live",
  givingLink: "https://marlowe-assembly-of-god-486395.churchcenter.com/giving",
  navCtaLabel: "Plan Your Visit",
  copyrightText: `© ${new Date().getFullYear()} Marlowe Assembly of God. All rights reserved.`,
  footerTagline: "Love God, Love People, Live with Purpose",
  denominationText: "A fellowship of the Assemblies of God",
  metaTitle: "Marlowe Assembly of God | Falling Waters, WV",
  metaDescription: "Marlowe Assembly of God in Falling Waters, WV — Love God, Love People, Live with Purpose. Join us Sundays at 9am & 11am.",
  values: [
    { _key: key(), title: "Love God", description: "We pursue an authentic relationship with God through worship, prayer, and His Word.", icon: "Heart" },
    { _key: key(), title: "Love People", description: "We build genuine community where everyone is welcomed, valued, and cared for.", icon: "Users" },
    { _key: key(), title: "Live with Purpose", description: "We equip and empower every person to fulfill their God-given calling.", icon: "Globe" },
  ],
};

const homePage = {
  _id: "homePage",
  _type: "homePage",
  heroHeading: "Love God, Love People, Live with Purpose",
  heroSubheading: "Join us Sundays at 9am & 11am in Falling Waters, WV",
  heroCtas: [
    { _key: key(), label: "Plan Your Visit", link: "/im-new", style: "primary" },
    { _key: key(), label: "Watch Online", link: "https://www.youtube.com/@MarloweAG/live", style: "outline" },
  ],
  welcomeHeading: "Welcome to Marlowe AG",
  welcomeBody: blocks(
    "At Marlowe Assembly of God, we believe that church should be a place where you can come as you are and experience the love of God in a real and meaningful way.",
    "Whether you're exploring faith for the first time or looking for a church to call home, there's a place for you here. We are a multi-generational, Spirit-filled community passionate about reaching our area with the Gospel."
  ),
  welcomeCtaLabel: "Learn More About Us",
  welcomeCtaLink: "/im-new",
};

const aboutPage = {
  _id: "aboutPage",
  _type: "aboutPage",
  heroHeading: "About Us",
  heroSubheading: "Get to know Marlowe Assembly of God",
  whoWeAreHeading: "Who We Are",
  whoWeAreBody: blocks(
    "Marlowe Assembly of God is a vibrant, Spirit-filled church in Falling Waters, West Virginia. We are passionate about reaching our community for the cause of Christ.",
    "Our mission is simple: Love God, Love People, Live with Purpose. We believe the local church is the hope of the world, and we are committed to being a place where people can encounter God and grow in their faith."
  ),
  beliefsHeading: "What We Believe",
  beliefs: [
    { _key: key(), title: "The Scriptures Inspired", description: blocks("The Scriptures, both the Old and New Testaments, are verbally inspired of God and are the revelation of God to man, the infallible, authoritative rule of faith and conduct.") },
    { _key: key(), title: "The One True God", description: blocks("The one true God has revealed Himself as the eternally self-existent 'I AM,' the Creator of heaven and earth and the Redeemer of mankind. He has further revealed Himself as embodying the principles of relationship and association as Father, Son, and Holy Ghost.") },
    { _key: key(), title: "The Deity of the Lord Jesus Christ", description: blocks("The Lord Jesus Christ is the eternal Son of God. The Scriptures declare: His virgin birth, His sinless life, His miracles, His substitutionary work on the cross, His bodily resurrection from the dead, and His exaltation to the right hand of God.") },
    { _key: key(), title: "The Fall of Man", description: blocks("Man was created good and upright; for God said, 'Let us make man in our image, after our likeness.' However, man by voluntary transgression fell and thereby incurred not only physical death but also spiritual death, which is separation from God.") },
    { _key: key(), title: "The Salvation of Man", description: blocks("Man's only hope of redemption is through the shed blood of Jesus Christ the Son of God. Salvation is received through repentance toward God and faith toward the Lord Jesus Christ.") },
    { _key: key(), title: "The Ordinances of the Church", description: blocks("Baptism in Water — by full immersion — is commanded in the Scriptures. All who repent and believe on Christ as Savior and Lord are to be baptized. The Lord's Supper, consisting of the elements — bread and the fruit of the vine — is the symbol expressing our sharing the divine nature of our Lord Jesus Christ.") },
    { _key: key(), title: "The Baptism in the Holy Spirit", description: blocks("All believers are entitled to and should ardently expect and earnestly seek the promise of the Father, the baptism in the Holy Ghost and fire, according to the command of our Lord Jesus Christ.") },
    { _key: key(), title: "The Initial Physical Evidence", description: blocks("The baptism of believers in the Holy Ghost is witnessed by the initial physical sign of speaking with other tongues as the Spirit of God gives them utterance.") },
    { _key: key(), title: "Sanctification", description: blocks("Sanctification is an act of separation from that which is evil, and of dedication unto God. Sanctification is realized in the believer by recognizing his identification with Christ in His death and resurrection.") },
    { _key: key(), title: "The Church and Its Mission", description: blocks("The Church is the Body of Christ, the habitation of God through the Spirit. The mission of the Church is to seek and save all who are lost in sin and to build up and nurture those who are believers.") },
    { _key: key(), title: "The Ministry", description: blocks("A divinely called and scripturally ordained ministry has been provided by our Lord for the fourfold purpose of leading the Church in evangelization of the world, worship of God, building a body of saints being perfected in the image of His Son, and meeting human need with ministries of love and compassion.") },
    { _key: key(), title: "Divine Healing", description: blocks("Divine healing is an integral part of the gospel. Deliverance from sickness is provided for in the atonement, and is the privilege of all believers.") },
    { _key: key(), title: "The Blessed Hope", description: blocks("The resurrection of those who have fallen asleep in Christ and their translation together with those who are alive and remain unto the coming of the Lord is the imminent and blessed hope of the Church.") },
    { _key: key(), title: "The Millennial Reign of Jesus Christ", description: blocks("The second coming of Christ includes the rapture of the saints, which is our blessed hope, followed by the visible return of Christ with His saints to reign on earth for one thousand years.") },
    { _key: key(), title: "The Final Judgement", description: blocks("There will be a final judgment in which the wicked dead will be raised and judged according to their works. Whosoever is not found written in the Book of Life, together with the devil and his angels, the beast and the false prophet, will be consigned to the everlasting punishment in the lake which burneth with fire and brimstone.") },
    { _key: key(), title: "The New Heavens and the New Earth", description: blocks("We, according to His promise, look for new heavens and a new earth, wherein dwelleth righteousness.") },
  ],
  showStaff: true,
};

const contactPage = {
  _id: "contactPage",
  _type: "contactPage",
  heroHeading: "Contact Us",
  heroSubheading: "We'd love to hear from you",
  formHeading: "Get in Touch",
  formSubtitle: "Have a question or want to learn more? Send us a message.",
  recipientEmail: "marloweag@gmail.com",
  successMessage: "Thank you! We'll be in touch soon.",
  quoteText: "Love God, Love People, Live with Purpose.",
  quoteAttribution: "Pastor Joel Dahlstrom",
  quoteRole: "Lead Pastor",
  showMap: true,
};

const eventsPage = {
  _id: "eventsPage",
  _type: "eventsPage",
  heroHeading: "Events & Calendar",
  heroSubheading: "Stay connected with everything happening at Marlowe AG.",
  ctaHeading: "Join Us This Week",
  ctaBody: "There's always something happening at Marlowe AG. We'd love to see you.",
  ctaButtonLabel: "Plan Your Visit",
  ctaButtonLink: "/im-new",
};

const staffPage = {
  _id: "staffPage",
  _type: "staffPage",
  heroHeading: "Our Leadership",
  heroSubheading: "Meet the team leading and serving at Marlowe Assembly of God.",
  ctaHeading: "Want to Get Involved?",
  ctaBody: "We'd love to connect with you and help you find your place at Marlowe AG.",
  ctaButtonLabel: "Contact Us",
  ctaButtonLink: "/contact",
};

const givingPage = {
  _id: "givingPage",
  _type: "givingPage",
  heroHeading: "Give",
  heroSubheading: "Your generosity fuels the mission of Marlowe Assembly of God.",
  mainHeading: "Why We Give",
  mainBody: blocks("We give because God first gave to us. Every gift supports our mission to love God, love people, and live with purpose in our community and beyond."),
  onlineGivingHeading: "Give Online",
  onlineGivingBody: "Giving is simple, safe, and secure through Church Center.",
  onlineGivingButtonLabel: "Give Now",
  waysToGive: [
    { _key: key(), title: "Give Online", description: "Quick and secure online giving through Church Center.", icon: "Smartphone" },
    { _key: key(), title: "Give In Person", description: "Drop your offering during any Sunday service.", icon: "Building" },
  ],
  scriptureText: "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver.",
  scriptureReference: "2 Corinthians 9:7",
};

// Staff
const staffJoel = {
  _id: "staff-joel-dahlstrom",
  _type: "staff",
  name: "Joel Dahlstrom",
  role: "Lead Pastor",
  email: "marloweag@gmail.com",
  bio: blocks(
    "Pastor Joel leads Marlowe Assembly of God with a passion for reaching the community with the Gospel and helping people grow in their relationship with Jesus Christ."
  ),
  order: 1,
};

const staffAngie = {
  _id: "staff-angie-dahlstrom",
  _type: "staff",
  name: "Angie Dahlstrom",
  role: "Ministries Facilitator / Worship Pastor",
  bio: blocks(
    "Angie serves as Ministries Facilitator and Worship Pastor at Marlowe AG. She has a heart for worship and for equipping the next generation of leaders.",
    "Angie has been involved in church ministry for over 20 years. She oversees the worship ministry, children's programs, and coordinates the various ministries of the church."
  ),
  order: 2,
};

const staffAbbey = {
  _id: "staff-abbey-suazo",
  _type: "staff",
  name: "Abbey Suazo",
  role: "Youth Leader",
  bio: blocks(
    "Abbey leads Foundation Youth at Marlowe AG. She is passionate about reaching the next generation and helping teens discover their identity in Christ."
  ),
  order: 3,
};

// Ministries
const ministryKids = {
  _id: "ministry-kids",
  _type: "ministry",
  name: "Kids Ministry",
  slug: { _type: "slug", current: "kids" },
  description: blocks(
    "Hope Kids is a vibrant, exciting service designed just for children! Every Sunday morning during our worship services, kids experience age-appropriate Bible teaching, worship, and activities.",
    "Our dedicated team of volunteers creates a safe, fun environment where children can learn about God's love and build lasting friendships."
  ),
  schedule: "Sundays during services & Wednesdays 7:00-8:30 PM",
  order: 1,
};

const ministryYouth = {
  _id: "ministry-youth",
  _type: "ministry",
  name: "Foundation Youth",
  slug: { _type: "slug", current: "youth" },
  description: blocks(
    "Foundation Youth is for students in grades 6-12. We exist to help the next generation build their lives on the foundation of Jesus Christ.",
    "Our gatherings include worship, relevant teaching, small groups, and plenty of fun. We believe that teenagers can make a difference in the world right now."
  ),
  schedule: "Sept-May: Sundays 6:00 PM | June-Aug: Wednesdays 7:00 PM",
  order: 2,
};

const ministryRoyalRangers = {
  _id: "ministry-royal-rangers",
  _type: "ministry",
  name: "Royal Rangers",
  slug: { _type: "slug", current: "royal-rangers" },
  description: blocks(
    "Royal Rangers is a mentoring ministry for boys and young men in grades K-12. Through camping, service projects, and age-appropriate Bible study, boys develop into godly men who serve their communities.",
    "Our program meets Wednesday evenings and includes outdoor activities, leadership training, and discipleship in a fun, engaging environment."
  ),
  schedule: "Wednesdays 7:00-8:30 PM",
  order: 3,
};

const ministryGirlsMinistries = {
  _id: "ministry-girls-ministries",
  _type: "ministry",
  name: "Girls Ministries",
  slug: { _type: "slug", current: "girls-ministries" },
  description: blocks(
    "Girls Ministries is a discipleship program for girls in grades K-12. Through Bible study, service projects, and fun activities, girls grow in their faith and develop lifelong friendships.",
    "Our program empowers girls to discover their unique gifts and purpose while building a strong foundation in God's Word."
  ),
  schedule: "Wednesdays 7:00-8:30 PM",
  order: 4,
};

const allDocuments = [
  siteSettings, homePage, aboutPage, contactPage, eventsPage, staffPage, givingPage,
  staffJoel, staffAngie, staffAbbey,
  ministryKids, ministryYouth, ministryRoyalRangers, ministryGirlsMinistries,
];

async function seed() {
  console.log(`Seeding ${allDocuments.length} documents into 1lhn358p/production...\n`);
  const tx = client.transaction();
  for (const doc of allDocuments) tx.createOrReplace(doc);
  const result = await tx.commit();
  console.log(`Done! Transaction ID: ${result.transactionId}`);
  console.log(`Documents created/replaced: ${allDocuments.length}`);
  console.log(allDocuments.map(d => `  - ${d._type} (${d._id})`).join("\n"));
}

seed().catch(err => { console.error("Seed failed:", err.message); process.exit(1); });
