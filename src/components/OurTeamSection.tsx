import { motion } from "framer-motion";
import { useState } from "react";
import TeamCard from "@/components/TeamCard";
import { teamMembers } from "@/utils/teamMembers";

// Pastel color backgrounds for team member images
const pastelColors = [
  "bg-pink-100",
  "bg-blue-100",
  "bg-yellow-100",
  "bg-blue-100",
  "bg-gray-100",
  "bg-amber-100",
  "bg-purple-100",
  "bg-teal-100",
  "bg-rose-100",
  "bg-indigo-100",
  "bg-cyan-100",
];

export function OurTeamSection() {
  const [flippedCardIndex, setFlippedCardIndex] = useState<number | null>(null);

  const handleCardFlip = (index: number) => {
    setFlippedCardIndex(flippedCardIndex === index ? null : index);
  };

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

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => {
            const bgColor = pastelColors[index % pastelColors.length];
            return (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TeamCard
                  {...member}
                  backgroundColor={bgColor}
                  isFlipped={flippedCardIndex === index}
                  onFlip={() => handleCardFlip(index)}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
