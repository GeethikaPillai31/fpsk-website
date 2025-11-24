import { motion } from "framer-motion";
import {
  Heart,
  Users,
  Shield,
  Target,
  HandHeart,
  CheckCircle2,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const values = [
  {
    icon: Heart,
    title: "Compassionate, Person-Centered Care",
    description:
      "We meet you with warmth, respect, and curiosity, honoring your story and tailoring care to your unique needs, strengths, and goals.",
  },
  {
    icon: Shield,
    title: "A Safe & Confidential Space",
    description:
      "We treat your trust as sacred. Every conversation is held to the highest ethical and professional standards so you can speak freely and feel truly heard.",
  },
  {
    icon: Target,
    title: "Research-Informed, Effective Treatment",
    description:
      "We rely on evidence-based approaches and the latest clinical science, thoughtfully adapting each intervention to fit who you are and what you’re facing.",
  },
  {
    icon: Users,
    title: "Care for the Whole Family",
    description:
      "We recognize that growth and healing often happen in relationships. When helpful, we partner with children, caregivers, and families to strengthen communication, connection, and support at home.",
  },
  {
    icon: HandHeart,
    title: "Care That’s Easier to Reach",
    description:
      "We work to reduce barriers to mental health care for children, teens, and adults in the state of Washington, so getting support feels possible, not overwhelming.",
  },
  {
    icon: CheckCircle2,
    title: "Support Across Your Journey",
    description:
      "From comprehensive assessments to therapy, consultation, and ongoing guidance, we offer a connected range of services designed to grow with you over time.",
  },
];

const whoWeServe = [
  "Children & Adolescents",
  "Adults",
  "Families & Couples",
  "Schools & Educational Institutions",
  "Healthcare Providers",
  "Community Organizations",
];

export function ValuesSection() {
  return (
    <section id="values" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Promise to You and Your Family
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At <span className="shimmer-text">FPSK</span>, we are committed to
            providing exceptional mental health care grounded in compassion,
            expertise, and evidence-based practice.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-start">
                      <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Who We Work With */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-50 rounded-2xl p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Who We Work With
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive mental health services to individuals,
              families, and organizations throughout the state of Washington.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {whoWeServe.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-center gap-2 bg-white rounded-lg px-4 py-3 shadow-sm"
              >
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                <span className="text-gray-900 font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
