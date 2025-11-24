import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

// Pastel color backgrounds for team member images
const pastelColors = [
  "bg-pink-100",
  "bg-green-100",
  "bg-yellow-100",
  "bg-green-100",
  "bg-gray-100",
  "bg-amber-100",
  "bg-green-100",
  "bg-pink-100",
];

// Placeholder team data - will be replaced with actual data
// Images should be placed in public/team/ directory as member-{id}.png
const teamMembers = [
  {
    id: 1,
    name: "Team Member",
    title: "Position Title",
    bio: "Brief professional background and credentials.",
  },
  {
    id: 2,
    name: "Team Member",
    title: "Position Title",
    bio: "Brief professional background and credentials.",
  },
  {
    id: 3,
    name: "Team Member",
    title: "Position Title",
    bio: "Brief professional background and credentials.",
  },
  {
    id: 4,
    name: "Team Member",
    title: "Position Title",
    bio: "Brief professional background and credentials.",
  },
  {
    id: 5,
    name: "Team Member",
    title: "Position Title",
    bio: "Brief professional background and credentials.",
  },
  {
    id: 6,
    name: "Team Member",
    title: "Position Title",
    bio: "Brief professional background and credentials.",
  },
];

export function OurTeamSection() {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 italic">
            Meet our team dedicated to helping your family
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            To be the practice our clients need us to be, it takes an
            experienced group of passionate mental health professionals. Get to
            know the people leading the way at FPSK.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => {
            const bgColor = pastelColors[index % pastelColors.length];
            return (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <a href={`/team/${member.id}`}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer border-gray-200 hover:border-gray-300 group">
                    <CardContent className="p-0">
                      {/* Image with pastel background */}
                      <div
                        className={`${bgColor} w-full aspect-square flex items-center justify-center overflow-hidden rounded-t-lg`}
                      >
                        <img
                          src={`/team/member-${member.id}.png`}
                          alt={member.name}
                          className="w-full h-full object-contain p-6"
                        />
                      </div>

                      {/* Member Info */}
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-1 group-hover:text-green-600 transition-colors">
                          {member.name}
                        </h3>
                        <p className="text-sm font-medium text-gray-600 mb-3">
                          {member.title}
                        </p>
                        <p className="text-sm text-gray-500 leading-relaxed">
                          {member.bio}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
