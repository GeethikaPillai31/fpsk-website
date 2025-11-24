import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { TestimonialCard } from "@/components/TestimonialCard";
import { CanvasFractalGrid } from "@/components/ui/canvas-fractal-grid";

interface Testimonial {
  authorName: string;
  authorImage?: string;
  content: string | string[];
  date: string;
}

const testimonials: Testimonial[] = [
  {
    authorName: "Sarah M.",
    date: "March 15, 2024",
    content:
      "FPSK has been a lifesaver for our family. The comprehensive assessment helped us understand our daughter's needs, and the ongoing support has made such a difference. The team is compassionate, professional, and truly cares about helping families.",
  },
  {
    authorName: "Michael R.",
    date: "February 28, 2024",
    content: [
      "After struggling to find the right support for my ADHD, I finally found FPSK.",
      "The coaching services have helped me develop practical strategies that work in my daily life. I'm more organized, focused, and confident than I've been in years.",
    ],
  },
  {
    authorName: "Jennifer L.",
    date: "January 10, 2024",
    content:
      "The neuropsychological assessment provided clarity we'd been seeking for years. Dr. Oram and his team took the time to explain everything thoroughly and created a personalized plan that addresses our son's unique strengths and challenges.",
  },
  {
    authorName: "David K.",
    date: "December 5, 2023",
    content: [
      "As a parent, finding the right mental health support for your child can feel overwhelming.",
      "FPSK made the process smooth and supportive. The family therapy sessions have strengthened our communication and understanding.",
    ],
  },
  {
    authorName: "Emily T.",
    date: "November 20, 2023",
    content:
      "The EF Skills Coaching has transformed how I approach my work and personal life. The strategies are practical and the support is ongoing. I couldn't be more grateful.",
  },
  {
    authorName: "Robert P.",
    date: "October 12, 2023",
    content:
      "Professional, caring, and effective. FPSK provided our family with the tools and understanding we needed to support our child's learning differences.",
  },
];

export function TestimonialsSection() {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  // Duplicate testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section
      id="testimonials"
      className="py-24 bg-gray-50 overflow-hidden relative"
    >
      {/* Canvas Fractal Grid Background */}
      <div className="absolute inset-0 z-0">
        <CanvasFractalGrid
          dotSize={5}
          dotSpacing={25}
          dotOpacity={0.8}
          gradientAnimationDuration={5}
          waveIntensity={40}
          waveRadius={250}
          dotColor="rgba(59, 130, 246, 0.2)"
          glowColor="rgba(59, 130, 246, 1)"
          enableNoise={true}
          noiseOpacity={0.05}
          enableMouseGlow={false}
          initialPerformance="high"
          gradients={[
            {
              stops: [
                { color: "#3b82f6", position: 0 },
                { color: "#2563eb", position: 25 },
                { color: "#06b6d4", position: 50 },
                { color: "transparent", position: 75 },
              ],
              centerX: 30,
              centerY: 70,
            },
            {
              stops: [
                { color: "#0891b2", position: 0 },
                { color: "#2563eb", position: 25 },
                { color: "#3b82f6", position: 50 },
                { color: "transparent", position: 75 },
              ],
              centerX: 70,
              centerY: 30,
            },
          ]}
        />
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real stories from families and individuals who have found support
            and growth through our services.
          </p>
        </motion.div>
      </div>

      {/* Infinite Scrolling Carousel - Full Width */}
      <div className="cursor-grab active:cursor-grabbing relative w-full">
          <motion.div
            ref={carousel}
            className="overflow-hidden"
            whileTap={{ cursor: "grabbing" }}
          >
            <motion.div
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              className="flex gap-6"
              animate={{
                x: [0, -width / 2],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 60,
                  ease: "linear",
                },
              }}
            >
              {duplicatedTestimonials.map((testimonial, index) => (
                <div
                  key={`${testimonial.authorName}-${index}`}
                  className="min-w-[400px] md:min-w-[500px] flex-shrink-0"
                >
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
    </section>
  );
}
