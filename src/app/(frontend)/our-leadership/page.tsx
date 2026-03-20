import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { getStaff, getPageGlobal } from "@/lib/payload";
import { RichText } from "@payloadcms/richtext-lexical/react";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Our Leadership",
  description: "Meet the leadership team at Marlowe Assembly of God.",
};

// ---------------------------------------------------------------------------
// Fallback data (used when Payload is not connected)
// ---------------------------------------------------------------------------

const fallbackLeaders: { name: string; role: string; bio: string; image: string; isPastor: boolean }[] = [
  {
    name: "Pastor Joel Dahlstrom",
    role: "Lead Pastor",
    bio: "Pastor Joel serves as our Lead Pastor, guiding the church with vision, leadership, and oversight. He collaborates with church staff and leaders to ensure the ministry stays aligned with its mission and purpose.",
    image: "/images/IMG_1559.jpg",
    isPastor: true,
  },
];

const fallbackStaff: { name: string; role: string; bio: string; image: string }[] = [
  {
    name: "Angie Dahlstrom",
    role: "Ministries Facilitator/Worship Pastor",
    bio: "Angie Dahlstrom facilitates various ministries and church-wide events to help strengthen and support the church body. With a heart for organization and discipleship, Angie enjoys equipping and mentoring others, ensuring that teams and ministries run smoothly and effectively. Angie is also an experienced worship leader, having had a calling for worship ministry since she was in high school. She sees it an honor and a privilege to use her gifts to help create an atmosphere of praise and spiritual growth within the church. Angie has been happily married to Pastor Joel since 2010, and she thoroughly enjoys supporting him and his vision for Marlowe AG. Together they have 3 beautiful children— Aria, Colson, and Eisley.",
    image: "/images/620914adb625f3815d46503b_6176eae4ac02e5a69c0793cb_IMG_5083-1-1-2-p-1080.jpeg",
  },
  {
    name: "Abbey Suazo",
    role: "Youth Leader",
    bio: "Abbey brings both passion and dedication to youth ministry. With previous experience leading another youth group, she has a genuine heart for guiding students in their walk with Christ. Abbey is currently completing her coursework to obtain her minister's license with the Assemblies of God. She carries a boldness for witnessing and preaching the Gospel, always eager to share God's love.",
    image: "/images/6622d487-034c-4508-b8ca-ab28e4650434.png",
  },
];

export default async function OurLeadershipPage() {
  const staffData = await getStaff();
  const pageContent = await getPageGlobal('leadership-page') as Record<string, any> | null;

  // Split into pastors and staff — if Payload has data, use it; else fallback
  const usePayload = staffData && staffData.length > 0;

  // Staff with role containing "Pastor" are shown as pastors
  const pastors = usePayload
    ? staffData.filter((s) => s.role?.toLowerCase().includes("pastor"))
    : null;
  const staffMembers = usePayload
    ? staffData.filter((s) => !s.role?.toLowerCase().includes("pastor"))
    : null;

  return (
    <>
      <Navbar />
      <div className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-church-green-light text-church-green text-sm font-semibold rounded-full mb-4">
              {pageContent?.badge || "Our Team"}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-church-dark">{pageContent?.heroHeading || "Leadership"}</h1>
          </div>

          {/* Lead Pastor(s) */}
          {pastors ? (
            pastors.map((leader) => (
              <div
                key={leader.id}
                className="mb-16 bg-church-cream rounded-3xl overflow-hidden shadow-lg"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-80 md:h-auto">
                    {((typeof leader.photo === 'object' && leader.photo?.url) || leader.photoUrl) ? (
                      <Image
                        src={(typeof leader.photo === 'object' && leader.photo?.url) ? leader.photo.url : leader.photoUrl}
                        alt={leader.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full min-h-[320px] bg-church-green/10 flex items-center justify-center">
                        <span className="text-6xl font-bold text-church-green/30">
                          {leader.name.split(" ").map((n) => n[0]).join("")}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="inline-block px-3 py-1 bg-church-green text-white text-xs font-semibold rounded-full mb-4 w-fit">
                      {leader.role ?? "Pastor"}
                    </div>
                    <h2 className="text-3xl font-bold text-church-dark mb-4">{leader.name}</h2>
                    {leader.bio ? (
                      <div className="text-church-gray leading-relaxed mb-6 prose prose-sm max-w-none">
                        <RichText data={leader.bio} />
                      </div>
                    ) : (
                      <p className="text-church-gray leading-relaxed mb-6">
                        {fallbackLeaders[0]?.bio}
                      </p>
                    )}
                    <a
                      href={`mailto:${leader.email ?? "marloweag@gmail.com"}`}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-church-green text-white font-medium rounded-full hover:bg-church-green-dark transition-colors w-fit"
                    >
                      Contact
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            fallbackLeaders.map((leader) => (
              <div
                key={leader.name}
                className="mb-16 bg-church-cream rounded-3xl overflow-hidden shadow-lg"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-80 md:h-auto">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="inline-block px-3 py-1 bg-church-green text-white text-xs font-semibold rounded-full mb-4 w-fit">
                      {leader.role}
                    </div>
                    <h2 className="text-3xl font-bold text-church-dark mb-4">{leader.name}</h2>
                    <p className="text-church-gray leading-relaxed mb-6">{leader.bio}</p>
                    <a
                      href="mailto:marloweag@gmail.com"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-church-green text-white font-medium rounded-full hover:bg-church-green-dark transition-colors w-fit"
                    >
                      Contact
                    </a>
                  </div>
                </div>
              </div>
            ))
          )}

          {/* Staff */}
          {staffMembers ? (
            staffMembers.map((member) => (
              <div
                key={member.id}
                className="mb-12 bg-church-cream rounded-3xl overflow-hidden shadow-lg"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-80 md:h-auto md:min-h-[400px]">
                    {((typeof member.photo === 'object' && member.photo?.url) || member.photoUrl) ? (
                      <Image
                        src={(typeof member.photo === 'object' && member.photo?.url) ? member.photo.url : member.photoUrl}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full min-h-[320px] bg-church-blue/10 flex items-center justify-center">
                        <span className="text-6xl font-bold text-church-blue/30">
                          {member.name.split(" ").map((n) => n[0]).join("")}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="inline-block px-3 py-1 bg-church-blue text-white text-xs font-semibold rounded-full mb-4 w-fit">
                      {member.role ?? "Staff"}
                    </div>
                    <h2 className="text-2xl font-bold text-church-dark mb-4">{member.name}</h2>
                    {member.bio ? (
                      <div className="text-church-gray leading-relaxed prose prose-sm max-w-none">
                        <RichText data={member.bio} />
                      </div>
                    ) : (
                      <p className="text-church-gray leading-relaxed">
                        {fallbackStaff.find((s) => s.name === member.name)?.bio}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            fallbackStaff.map((member) => (
              <div
                key={member.name}
                className="mb-12 bg-church-cream rounded-3xl overflow-hidden shadow-lg"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-80 md:h-auto md:min-h-[400px]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="inline-block px-3 py-1 bg-church-blue text-white text-xs font-semibold rounded-full mb-4 w-fit">
                      {member.role}
                    </div>
                    <h2 className="text-2xl font-bold text-church-dark mb-4">{member.name}</h2>
                    {member.bio && (
                      <p className="text-church-gray leading-relaxed">{member.bio}</p>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
