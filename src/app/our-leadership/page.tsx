import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Our Leadership",
  description: "Meet the leadership team at Marlowe Assembly of God.",
};

// These will be replaced by Sanity CMS data once connected
const leaders = [
  {
    name: "Pastor Name",
    role: "Lead Pastor",
    bio: "Our lead pastor is passionate about sharing God's word and building a community of faith.",
    image: "/images/IMG_1559.jpg",
    isPastor: true,
  },
];

const staff = [
  {
    name: "Staff Member",
    role: "Staff",
    bio: "",
    image: "/images/620914adb625f3815d46503b_6176eae4ac02e5a69c0793cb_IMG_5083-1-1-2-p-1080.jpeg",
  },
];

export default function OurLeadershipPage() {
  return (
    <>
      <Navbar />
      <div className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-church-green-light text-church-green text-sm font-semibold rounded-full mb-4">
              Our Team
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-church-dark">Leadership</h1>
          </div>

          {/* Lead Pastor */}
          {leaders.map((leader) => (
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
          ))}

          {/* Staff Grid */}
          {staff.length > 0 && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {staff.map((member) => (
                <div
                  key={member.name}
                  className="bg-church-cream rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-64">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-church-dark">{member.name}</h3>
                    <p className="text-church-green font-medium text-sm">{member.role}</p>
                    {member.bio && (
                      <p className="text-church-gray text-sm mt-3">{member.bio}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
