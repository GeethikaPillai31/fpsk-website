import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-image.png";

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
        className="absolute inset-0 isolate opacity-65 contain-strict lg:block -z-20"
      >
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="mountain landscape background"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Gradient overlays for depth */}
      <div
        aria-hidden
        className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block -z-10"
      >
        <div className="w-[560px] h-[1280px] -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
        <div className="h-[1280px] absolute left-0 top-0 w-[240px] -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] translate-x-[5%] -translate-y-[50%]" />
        <div className="h-[1280px] -translate-y-[350px] absolute left-0 top-0 w-[240px] -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
      </div>

      {/* Fade gradient at bottom */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,rgba(255,255,255,0.95)_75%)]"
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
                className="mx-auto mt-8 max-w-4xl text-balance text-5xl max-md:font-semibold md:text-7xl lg:mt-16 xl:text-[5.25rem] font-bold text-gray-900"
              >
                Comprehensive Mental Health Services
                <br />
                for Your Family
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
                className="mx-auto mt-8 max-w-2xl text-balance text-lg text-gray-800"
              >
                Offering a broad range of mental health services to meet the
                needs of our community. From assessments and evaluations to
                therapy and coaching, we support children, teens, and adults in
                Kirkland and beyond.
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
                  className="text-gray-900 hover:text-gray-700 rounded-xl px-5 py-3 text-base font-medium transition-colors border border-gray-300 hover:border-gray-400 bg-white/50 backdrop-blur-sm"
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
              <div className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200/50 flex items-center justify-center shadow-lg group-hover:bg-white/90 transition-all">
                <ChevronDown className="w-5 h-5 text-gray-900" />
              </div>
            </motion.div>
          </a>
        </motion.div>
      </section>
    </main>
  );
}
