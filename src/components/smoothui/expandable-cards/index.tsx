"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const EASING_X1 = 0.4;
const EASING_Y1 = 0.0;
const EASING_X2 = 0.2;
const EASING_Y2 = 1;

export type Card = {
  id: number;
  title: string;
  image: string;
  content: string;
  backgroundColor?: string;
  author?: {
    name: string;
    role: string;
    image: string;
  };
};

const getDefaultCards = (): Card[] => {
  return [];
};

const smoothEasing = [EASING_X1, EASING_Y1, EASING_X2, EASING_Y2] as const;

export type ExpandableCardsProps = {
  cards?: Card[];
  selectedCard?: number | null;
  onSelect?: (id: number | null) => void;
  className?: string;
  cardClassName?: string;
};

export default function ExpandableCards({
  cards = getDefaultCards(),
  selectedCard: controlledSelected,
  onSelect,
  className = "",
  cardClassName = "",
}: ExpandableCardsProps) {
  const [internalSelected, setInternalSelected] = useState<number | null>(null);

  const selectedCard =
    controlledSelected !== undefined ? controlledSelected : internalSelected;

  const handleCardClick = (id: number) => {
    if (selectedCard === id) {
      if (onSelect) {
        onSelect(null);
      } else {
        setInternalSelected(null);
      }
    } else {
      if (onSelect) {
        onSelect(id);
      } else {
        setInternalSelected(id);
      }
    }
  };

  return (
    <div className={`w-full ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {cards.map((card, index) => {
          const isSelected = selectedCard === card.id;

          // Determine expansion direction based on card position
          // Cards on the right side of screen should expand left, left side should expand right
          const getExpansionDirection = () => {
            if (!isSelected) return null;
            // Calculate column position based on grid layout
            const cols =
              typeof window !== "undefined"
                ? window.innerWidth >= 1280
                  ? 4
                  : window.innerWidth >= 1024
                  ? 3
                  : window.innerWidth >= 768
                  ? 2
                  : 1
                : 4;
            const cardCol = index % cols;
            // If card is in right half of grid, expand left; otherwise expand right
            return cardCol >= cols / 2 ? "left" : "right";
          };

          const expansionDirection = getExpansionDirection();

          return (
            <motion.div
              key={card.id}
              layout
              className={`relative cursor-pointer overflow-hidden rounded-2xl border shadow-lg transition-all duration-300 ${
                isSelected && expansionDirection === "right"
                  ? "md:col-span-2"
                  : isSelected && expansionDirection === "left"
                  ? "md:col-span-2 md:col-start-auto"
                  : ""
              } ${cardClassName}`}
              data-card-id={card.id}
              onClick={() => handleCardClick(card.id)}
              animate={{
                height: isSelected ? "auto" : "320px",
              }}
              whileHover={{
                y: isSelected ? 0 : -8,
                boxShadow: isSelected
                  ? "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
                  : "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)",
              }}
              transition={{
                duration: 0.5,
                ease: smoothEasing,
              }}
            >
              {/* Main Card Background Image */}
              <div className="absolute inset-0 h-[320px]">
                {/* Pastel background overlay - always visible */}
                {card.backgroundColor && (
                  <div
                    className={`absolute inset-0 ${card.backgroundColor} opacity-80`}
                  />
                )}

                {/* Background image */}
                <motion.img
                  alt={card.title}
                  className="absolute inset-0 h-full w-full object-cover"
                  src={card.image || "/placeholder.svg"}
                  whileHover={{
                    filter: "brightness(1.15)",
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                />

                {/* Prominent black gradient at bottom for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/30" />
              </div>

              {/* Name Overlay - Bottom left */}
              <div className="relative z-10 h-[320px] flex flex-col items-start justify-end px-5 pb-5">
                <h2 className="font-bold text-2xl md:text-3xl drop-shadow-2xl text-white text-left">
                  {card.title}
                </h2>
              </div>

              {/* Expanded Content Section - Completely hidden when collapsed */}
              <AnimatePresence mode="popLayout">
                {isSelected && (
                  <motion.div
                    initial={{ width: 0, opacity: 0, filter: "blur(5px)" }}
                    animate={{
                      width: "300px",
                      opacity: 1,
                      filter: "blur(0px)",
                    }}
                    exit={{ width: 0, opacity: 0, filter: "blur(5px)" }}
                    transition={{
                      duration: 0.5,
                      ease: smoothEasing,
                      opacity: { duration: 0.3, delay: 0.2 },
                    }}
                    className="absolute top-0 right-0 h-full bg-white/95 backdrop-blur-sm overflow-hidden"
                  >
                    <motion.div
                      initial={{ opacity: 0, x: 20, filter: "blur(5px)" }}
                      animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                      exit={{ opacity: 0, x: 20, filter: "blur(5px)" }}
                      transition={{ delay: 0.4, duration: 0.3 }}
                      className="flex h-full flex-col justify-between p-6"
                    >
                      <div className="mb-6">
                        <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
                          {card.content}
                        </p>
                      </div>

                      {/* Read More Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCardClick(card.id);
                        }}
                        className="w-full mt-4 px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
                      >
                        Read More
                      </button>

                      {card.author && (
                        <div className="flex items-center gap-3 pt-6 mt-6 border-t border-gray-200">
                          <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-gray-200 bg-gray-100 flex items-center justify-center shrink-0">
                            {/* biome-ignore lint/performance/noImgElement: Using img for author avatar without Next.js Image optimizations */}
                            <img
                              alt={card.author.name}
                              className="h-full w-full object-cover"
                              height={48}
                              src={card.author.image}
                              width={48}
                            />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">
                              {card.author.name}
                            </p>
                            <p className="text-gray-600 text-xs">
                              {card.author.role}
                            </p>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
