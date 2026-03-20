import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import { getPageGlobal } from "@/lib/payload";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Our Beliefs",
  description: "The core beliefs and statement of faith of Marlowe Assembly of God.",
};

// ---------------------------------------------------------------------------
// Fallback beliefs (used when Sanity is not connected)
// ---------------------------------------------------------------------------

interface FallbackBelief {
  title: string;
  description: string;
  scriptures?: { reference: string; url?: string }[];
}

const fallbackBeliefs: FallbackBelief[] = [
  {
    title: "The Scriptures Inspired",
    description: "The Scriptures, both the Old and New Testaments, are verbally inspired of God and are the revelation of God to man, the infallible, authoritative rule of faith and conduct.",
    scriptures: [
      { reference: "2 Timothy 3:15-17", url: "https://www.biblegateway.com/passage/?search=2+Timothy+3%3A15-17&version=NIV" },
      { reference: "1 Thessalonians 2:13", url: "https://www.biblegateway.com/passage/?search=1+Thessalonians+2%3A13&version=NIV" },
      { reference: "2 Peter 1:21", url: "https://www.biblegateway.com/passage/?search=2+Peter+1%3A21&version=NIV" },
    ],
  },
  {
    title: "The One True God",
    description: 'The one true God has revealed Himself as the eternally self-existent "I AM," the Creator of heaven and earth and the Redeemer of mankind. He has further revealed Himself as embodying the principles of relationship and association as Father, Son and Holy Spirit.',
    scriptures: [
      { reference: "Deuteronomy 6:4", url: "https://www.biblegateway.com/passage/?search=Deuteronomy+6%3A4&version=NIV" },
      { reference: "Isaiah 43:10,11", url: "https://www.biblegateway.com/passage/?search=Isaiah+43%3A10-11&version=NIV" },
      { reference: "Matthew 28:19", url: "https://www.biblegateway.com/passage/?search=Matthew+28%3A19&version=NIV" },
      { reference: "Luke 3:22", url: "https://www.biblegateway.com/passage/?search=Luke+3%3A22&version=NIV" },
    ],
  },
  {
    title: "The Deity of the Lord Jesus Christ",
    description: "The Lord Jesus Christ is the eternal Son of God. The Scriptures declare:",
    scriptures: [
      { reference: "Matthew 1:23", url: "https://www.biblegateway.com/passage/?search=Matthew+1%3A23&version=NIV" },
      { reference: "Hebrews 7:26", url: "https://www.biblegateway.com/passage/?search=Hebrews+7%3A26&version=NIV" },
      { reference: "Acts 2:22", url: "https://www.biblegateway.com/passage/?search=Acts+2%3A22&version=NIV" },
      { reference: "1 Corinthians 15:3", url: "https://biblegateway.com/passage/?search=1+Corinthians+15%3A3&version=NIV" },
    ],
  },
  {
    title: "The Fall of Man",
    description: 'Man was created good and upright; for God said, "Let us make man in our own image, after our likeness." However, man by voluntary transgression fell and thereby incurred not only physical death but also spiritual death, which is separation from God.',
    scriptures: [
      { reference: "Genesis 1:26,27", url: "https://www.biblegateway.com/passage/?search=Genesis+1%3A26-27&version=NIV" },
      { reference: "Genesis 2:17", url: "https://www.biblegateway.com/passage/?search=Genesis+2%3A17&version=NIV" },
      { reference: "Romans 5:12-19", url: "https://www.biblegateway.com/passage/?search=Romans+5%3A12-19&version=NIV" },
    ],
  },
  {
    title: "The Salvation of Man",
    description: "Man's only hope of redemption is through the shed blood of Jesus Christ the Son of God.",
    scriptures: [
      { reference: "Luke 24:47", url: "https://www.biblegateway.com/passage/?search=Luke+24%3A47&version=NIV" },
      { reference: "John 3:3", url: "https://www.biblegateway.com/passage/?search=John+3%3A3&version=NIV" },
      { reference: "Romans 10:13-15", url: "https://www.biblegateway.com/passage/?search=Romans+10%3A13-15&version=NIV" },
      { reference: "Ephesians 2:8", url: "https://www.biblegateway.com/passage/?search=Ephesians+2%3A8&version=NIV" },
    ],
  },
  {
    title: "The Ordinances of the Church",
    description: "The ordinance of baptism by immersion is commanded by the Scriptures. All who repent and believe on Christ as Saviour and Lord are to be baptized. Thus they declare to the world that they have died with Christ and that they also have been raised with Him to walk in newness of life.",
    scriptures: [
      { reference: "Matthew 28:19", url: "https://www.biblegateway.com/passage/?search=Matthew+28%3A19&version=NIV" },
      { reference: "Mark 16:16", url: "https://www.biblegateway.com/passage/?search=Mark+16%3A16&version=NIV" },
      { reference: "Acts 10:47,48", url: "https://www.biblegateway.com/passage/?search=Acts+10%3A47-48&version=NIV" },
    ],
  },
  {
    title: "The Baptism in the Holy Spirit",
    description: "All believers are entitled to and should ardently expect and earnestly seek the promise of the Father, the baptism in the Holy Spirit and fire, according to the command of our Lord Jesus Christ. This was the normal experience of all in the early Christian Church. With it comes the enduement of power for life and service, the bestowment of the gifts and their uses in the work of the ministry.",
    scriptures: [
      { reference: "Luke 24:49", url: "https://www.biblegateway.com/passage/?search=Luke+24%3A49&version=NIV" },
      { reference: "Acts 1:4", url: "https://www.biblegateway.com/passage/?search=Acts+1%3A4&version=NIV" },
      { reference: "Acts 1:8", url: "https://www.biblegateway.com/passage/?search=Acts+1%3A8&version=NIV" },
      { reference: "1 Corinthians 12:1-31", url: "https://www.biblegateway.com/passage/?search=1+Corinthians+12%3A1-31&version=NIV" },
    ],
  },
  {
    title: "The Initial Physical Evidence of the Baptism in the Holy Spirit",
    description: "The baptism of believers in the Holy Spirit is witnessed by the initial physical sign of speaking with other tongues as the Spirit of God gives them utterance.",
    scriptures: [
      { reference: "Acts 2:4", url: "https://www.biblegateway.com/passage/?search=Acts+2%3A4&version=NIV" },
    ],
  },
  {
    title: "Sanctification",
    description: "Sanctification is an act of separation from that which is evil, and of dedication unto God.",
    scriptures: [
      { reference: "Romans 12:1,2", url: "https://www.biblegateway.com/passage/?search=Romans+12%3A1-2&version=NIV" },
      { reference: "1 Thessalonians 5:23", url: "https://www.biblegateway.com/passage/?search=1+Thessalonians+5%3A23&version=NIV" },
      { reference: "Hebrews 13:12", url: "https://www.biblegateway.com/passage/?search=Hebrews+13%3A12&version=NIV" },
    ],
  },
  {
    title: "The Church and Its Mission",
    description: "The Church is the Body of Christ, the habitation of God through the Spirit, with divine appointments for the fulfillment of her great commission. Each believer, born of the Spirit, is an integral part of the General Assembly and Church of the Firstborn, which are written in heaven.",
    scriptures: [
      { reference: "Ephesians 1:22,23", url: "https://www.biblegateway.com/passage/?search=Ephesians+1%3A22-23&version=NIV" },
      { reference: "Ephesians 2:22", url: "https://www.biblegateway.com/passage/?search=Ephesians+2%3A22&version=NIV" },
      { reference: "Hebrews 12:23", url: "https://www.biblegateway.com/passage/?search=Hebrews+12%3A23&version=NIV" },
    ],
  },
  {
    title: "The Ministry",
    description: "A divinely called and scripturally ordained ministry has been provided by our Lord for the fourfold purpose of leading the Church.",
    scriptures: [
      { reference: "Mark 16:15-20", url: "https://www.biblegateway.com/passage/?search=Mark+16%3A15-20&version=NIV" },
      { reference: "Ephesians 4:11-16", url: "https://www.biblegateway.com/passage/?search=Ephesians+4%3A11-16&version=NIV" },
    ],
  },
  {
    title: "Divine Healing",
    description: "Divine healing is an integral part of the gospel. Deliverance from sickness is provided for in the atonement, and is the privilege of all believers.",
    scriptures: [
      { reference: "Isaiah 53:4,5", url: "https://www.biblegateway.com/passage/?search=Isaiah+53%3A4-5&version=NIV" },
      { reference: "Matthew 8:16,17", url: "https://www.biblegateway.com/passage/?search=Matthew+8%3A16-17&version=NIV" },
      { reference: "James 5:14-16", url: "https://www.biblegateway.com/passage/?search=James+5%3A14-16&version=NIV" },
    ],
  },
  {
    title: "The Blessed Hope",
    description: "The resurrection of those who have fallen asleep in Christ and their translation together with those who are alive and remain unto the coming of the Lord is the imminent and blessed hope of the church.",
    scriptures: [
      { reference: "1 Thessalonians 4:16,17", url: "https://www.biblegateway.com/passage/?search=1+Thessalonians+4%3A16-17&version=NIV" },
      { reference: "Romans 8:23", url: "https://www.biblegateway.com/passage/?search=Romans+8%3A23&version=NIV" },
      { reference: "Titus 2:13", url: "https://www.biblegateway.com/passage/?search=Titus+2%3A13&version=NIV" },
    ],
  },
  {
    title: "The Millennial Reign of Jesus Christ",
    description: "The second coming of Christ includes the rapture of the saints, which is our blessed hope, followed by the visible return of Christ with His saints to reign on earth for one thousand years.",
    scriptures: [
      { reference: "Zechariah 14:5", url: "https://www.biblegateway.com/passage/?search=Zechariah+14%3A5&version=NIV" },
      { reference: "Matthew 24:27,30", url: "https://www.biblegateway.com/passage/?search=Matthew+24%3A27&version=NIV" },
      { reference: "Revelation 1:7", url: "https://www.biblegateway.com/passage/?search=Revelation+1%3A7&version=NIV" },
    ],
  },
  {
    title: "The Final Judgement",
    description: "There will be a final judgment in which the wicked dead will be raised and judged according to their works. Whosoever is not found written in the Book of Life, together with the devil and his angels, the beast and the false prophet, will be consigned to the everlasting punishment in the lake which burneth with fire and brimstone, which is the second death.",
    scriptures: [
      { reference: "Matthew 25:46", url: "https://www.biblegateway.com/passage/?search=Matthew+25%3A46&version=NIV" },
      { reference: "Revelation 19:20", url: "https://www.biblegateway.com/passage/?search=Revelation+19%3A20&version=NIV" },
      { reference: "Revelation 21:8", url: "https://www.biblegateway.com/passage/?search=Revelation+21%3A8&version=NIV" },
    ],
  },
  {
    title: "The New Heavens and the New Earth",
    description: '"We, according to His promise, look for new heavens and a new earth wherein dwelleth righteousness."',
    scriptures: [
      { reference: "2 Peter 3:13", url: "https://www.biblegateway.com/passage/?search=2+Peter+3%3A13&version=NIV" },
      { reference: "Revelation 21", url: "https://www.biblegateway.com/passage/?search=Revelation+21&version=NIV" },
      { reference: "Revelation 22", url: "https://www.biblegateway.com/passage/?search=Revelation+22&version=NIV" },
    ],
  },
];

export default async function OurBeliefsPage() {
  const pageContent = await getPageGlobal('beliefs-page') as Record<string, any> | null;

  const beliefs: FallbackBelief[] = (pageContent?.beliefs && pageContent.beliefs.length > 0)
    ? pageContent.beliefs
    : fallbackBeliefs;

  const half = Math.ceil(beliefs.length / 2);
  const col1 = beliefs.slice(0, half);
  const col2 = beliefs.slice(half);

  return (
    <>
      <Navbar />
      <div className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-church-green-light text-church-green text-sm font-semibold rounded-full mb-4">
              {pageContent?.badge || "Statement of Faith"}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-church-dark">{pageContent?.heroHeading || "Our Beliefs"}</h1>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[col1, col2].map((col, colIdx) => (
              <div key={colIdx} className="space-y-6">
                {col.map((belief) => (
                  <div
                    key={belief.title}
                    className="bg-church-cream rounded-2xl p-6 hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-lg font-bold text-church-dark mb-3">
                      {belief.title}
                    </h3>
                    <p className="text-church-gray text-sm leading-relaxed mb-4">
                      {belief.description}
                    </p>
                    {belief.scriptures && belief.scriptures.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {belief.scriptures.map((s) => (
                          <a
                            key={s.reference}
                            href={s.url ?? `https://www.biblegateway.com/passage/?search=${encodeURIComponent(s.reference)}&version=NIV`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-3 py-1 bg-church-green-light text-church-green text-xs font-medium rounded-full hover:bg-church-green hover:text-white transition-colors"
                          >
                            {s.reference}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href={pageContent?.denominationUrl || "https://www.potomacag.org/"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-church-green text-white font-medium rounded-full hover:bg-church-green-dark transition-colors"
            >
              {pageContent?.denominationLabel || "Potomac Network and National AG Website"}
              <svg aria-hidden="true" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
