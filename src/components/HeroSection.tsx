import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring" as const,
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

export function HeroSection() {
  return (
    <main className="overflow-hidden relative">
      {/* Hero Background Image */}
      <div
        aria-hidden
        className="absolute inset-0 isolate opacity-90 contain-strict lg:block -z-20"
      >
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="mountain landscape background"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Gradient overlays for depth - reduced opacity */}
      <div
        aria-hidden
        className="absolute inset-0 isolate hidden opacity-30 contain-strict lg:block -z-10"
      >
        <div className="w-[560px] h-[1280px] -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.04)_0,hsla(0,0%,55%,.01)_50%,hsla(0,0%,45%,0)_80%)]" />
        <div className="h-[1280px] absolute left-0 top-0 w-[240px] -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.03)_0,hsla(0,0%,45%,.01)_80%,transparent_100%)] translate-x-[5%] -translate-y-[50%]" />
        <div className="h-[1280px] -translate-y-[350px] absolute left-0 top-0 w-[240px] -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.02)_0,hsla(0,0%,45%,.01)_80%,transparent_100%)]" />
      </div>

      {/* Dark gradient overlay at bottom fading to transparent at top */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 size-full bg-gradient-to-t from-black/80 via-black/40 to-transparent"
      />

      <section
        id="home"
        className="min-h-screen flex items-center justify-center"
      >
        <div className="relative w-full pt-24 md:pt-36 pb-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  bounce: 0.3,
                  duration: 2,
                  delay: 0.3,
                }}
                className="mx-auto mt-8 max-w-4xl text-balance text-5xl max-md:font-semibold md:text-7xl lg:mt-16 xl:text-[5.25rem] font-bold text-white"
              >
                Empowering Families Through Compassionate Care
              </motion.h1>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  bounce: 0.3,
                  duration: 2,
                  delay: 0.5,
                }}
                className="mx-auto mt-8 max-w-2xl text-balance text-lg text-white"
              >
                Supporting children, teens, and adults across Washington with
                thorough evaluations, evidence-based therapy, and personalized
                guidance. We focus on understanding each person’s unique needs
                so families can access clear answers, effective support, and a
                path toward lasting wellbeing.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.75,
                    },
                  },
                }}
                className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row"
              >
                <motion.div
                  variants={transitionVariants.item}
                  className="rounded-[calc(0.75rem+0.125rem)] p-0.5"
                >
                  <a
                    href="#services"
                    className="bg-gray-900 text-white hover:bg-gray-800 rounded-xl px-5 py-3 text-base font-medium transition-colors inline-block shadow-lg"
                  >
                    <span className="text-nowrap">Our Services</span>
                  </a>
                </motion.div>
                <motion.a
                  variants={transitionVariants.item}
                  href="#contact"
                  className="text-white hover:text-white/90 rounded-xl px-5 py-3 text-base font-medium transition-colors border border-white/30 hover:border-white/50 bg-white/10 backdrop-blur-sm"
                >
                  <span className="text-nowrap">Contact Us</span>
                </motion.a>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 2,
            duration: 0.8,
          }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
        >
          <a
            href="#team"
            className="flex flex-col items-center gap-3 group cursor-pointer"
            aria-label="Scroll to next section"
          >
            <motion.div
              animate={{
                y: [0, 10, 0],
                opacity: [1, 0.7, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex flex-col items-center"
            >
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center shadow-lg group-hover:bg-white/30 transition-all">
                <ChevronDown className="w-5 h-5 text-white" />
              </div>
            </motion.div>
          </a>
        </motion.div>
      </section>
    </main>
  );
}
