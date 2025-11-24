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
    title: "Compassionate Care",
    description:
      "We provide empathetic, person-centered care that respects each individual's unique journey and needs.",
  },
  {
    icon: Shield,
    title: "Trust & Confidentiality",
    description:
      "Your privacy and trust are paramount. We maintain the highest standards of confidentiality and ethical practice.",
  },
  {
    icon: Target,
    title: "Evidence-Based Practice",
    description:
      "Our services are grounded in the latest research and proven therapeutic approaches for effective outcomes.",
  },
  {
    icon: Users,
    title: "Family-Centered Approach",
    description:
      "We understand that mental health affects the whole family, and we work collaboratively with all members.",
  },
  {
    icon: HandHeart,
    title: "Accessible Support",
    description:
      "We serve children, teens, and adults across the Kirkland community, making mental health support accessible to all.",
  },
  {
    icon: CheckCircle2,
    title: "Comprehensive Services",
    description:
      "From assessments to therapy and coaching, we offer a full range of services to meet diverse needs.",
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
            What We Stand For
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At Family Psychological Services of Kirkland, we are committed to
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
                      <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-green-600" />
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
              families, and organizations throughout the Kirkland community and
              beyond.
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
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-900 font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
