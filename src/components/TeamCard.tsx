"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Calendar } from "lucide-react";
import ParticleButton from "@/components/kokonutui/particle-button";
import BasicModal from "@/components/smoothui/basic-modal";
import { Service, getServiceLabel } from "@/types/services";
import { Link } from "react-router-dom";
import type { ReactNode } from "react";

export interface TeamMember {
  image: string;
  name: string;
  credential?: string;
  title: string;
  services: Service[];
  // This is meant for team members that are bookable
  bookable?: boolean;
  // Detailed bio for the team member modal - can be string or JSX
  bio?: string | ReactNode;
}

export interface TeamCardProps extends TeamMember {
  backgroundColor?: string;
  isFlipped?: boolean;
  onFlip?: () => void;
}

export default function TeamCard({
  name,
  title,
  credential,
  services,
  image,
  backgroundColor,
  isFlipped = false,
  onFlip,
  bookable = false,
  bio,
}: TeamCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className="relative w-full h-[320px] group [perspective:2000px] cursor-pointer"
        onClick={() => onFlip?.()}
      >
        <div
          className={cn(
            "relative w-full h-full",
            "[transform-style:preserve-3d]",
            "transition-all duration-700",
            isFlipped
              ? "[transform:rotateY(180deg)]"
              : "[transform:rotateY(0deg)]"
          )}
        >
          {/* Front of card - Image with name */}
          <div
            className={cn(
              "absolute inset-0 w-full h-full",
              "[backface-visibility:hidden] [transform:rotateY(0deg)]",
              "overflow-hidden rounded-2xl",
              "border border-gray-200",
              "shadow-lg",
              "transition-all duration-700",
              "group-hover:shadow-xl",
              isFlipped ? "opacity-0" : "opacity-100"
            )}
          >
            {/* Background image */}
            <div className="absolute inset-0">
              {backgroundColor && (
                <div
                  className={`absolute inset-0 ${backgroundColor} opacity-80 z-0`}
                />
              )}
              <motion.img
                alt={name}
                src={image}
                className="absolute inset-0 w-full h-full object-cover z-0"
                whileHover={{
                  filter: "brightness(1.15)",
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
              />
              {/* Gradient only at bottom where text is */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/95 via-black/70 to-transparent z-10" />
            </div>

            {/* Name and title overlay - Bottom left, only in gradient area */}
            <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
              <h3 className="font-bold text-xl md:text-2xl drop-shadow-2xl text-white text-left leading-tight">
                {name}
                {credential && `, ${credential}`}
              </h3>
              {title && (
                <p className="text-xs md:text-sm text-white/90 drop-shadow-lg mt-1 leading-tight">
                  {title}
                </p>
              )}
              {/* Read More Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onFlip?.();
                }}
                className="mt-2 inline-flex items-center gap-1.5 text-xs md:text-sm font-medium text-white/90 hover:text-white transition-colors group"
              >
                Read more
                <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>

          {/* Back of card - Details */}
          <div
            className={cn(
              "absolute inset-0 w-full h-full",
              "[backface-visibility:hidden] [transform:rotateY(180deg)]",
              "p-6 rounded-2xl",
              "bg-white",
              "border border-gray-200",
              "shadow-lg",
              "flex flex-col",
              "transition-all duration-700",
              "group-hover:shadow-xl",
              "overflow-hidden",
              !isFlipped ? "opacity-0" : "opacity-100"
            )}
          >
            <div className="flex-1 min-h-0 space-y-4 overflow-y-auto custom-scrollbar pr-2">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-900 leading-snug">
                  {name}
                  {credential && `, ${credential}`}
                </h3>
                <p className="text-sm font-medium text-gray-600">{title}</p>
              </div>

              <div className="space-y-2 pt-2">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Services
                </p>
                {services.map((service, index) => (
                  <div
                    key={service}
                    className="flex items-start gap-2 text-sm"
                    style={{
                      transform: isFlipped
                        ? "translateX(0)"
                        : "translateX(-10px)",
                      opacity: isFlipped ? 1 : 0,
                      transitionDelay: `${index * 100 + 200}ms`,
                      transition: "all 0.3s ease-out",
                    }}
                  >
                    <span className="text-gray-400 mt-1">•</span>
                    <Link
                      to={`/service/${service}`}
                      onClick={(e) => e.stopPropagation()}
                      className="text-blue-300 hover:text-blue-400 transition-colors"
                    >
                      {getServiceLabel(service)}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div
              className="flex flex-row gap-2 pt-4 shrink-0"
              onClick={(e) => e.stopPropagation()}
            >
              {bookable ? (
                <>
                  <ParticleButton
                    className="flex-1 min-w-0 bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center text-xs px-2 py-1.5"
                    onClick={() => {
                      // TODO: Implement booking functionality
                      console.log(`Book consultation with ${name}`);
                    }}
                  >
                    <Calendar className="w-3.5 h-3.5 mr-1 shrink-0" />
                    <span className="truncate text-xs">Book</span>
                  </ParticleButton>
                  <ParticleButton
                    className="flex-1 min-w-0 bg-gray-100 hover:bg-gray-200 text-gray-900 flex items-center justify-center text-xs px-2 py-1.5"
                    onClick={() => {
                      setIsModalOpen(true);
                    }}
                  >
                    <BookOpen className="w-3.5 h-3.5 mr-1 shrink-0" />
                    <span className="truncate text-xs">Read</span>
                  </ParticleButton>
                </>
              ) : (
                <ParticleButton
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 flex items-center justify-center text-xs px-2 py-1.5"
                  onClick={() => {
                    setIsModalOpen(true);
                  }}
                >
                  <BookOpen className="w-3.5 h-3.5 mr-1 shrink-0" />
                  <span className="truncate text-xs">Read More</span>
                </ParticleButton>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Team Member Modal */}
      <BasicModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title=""
        size="full"
      >
        <div className="flex flex-col md:flex-row gap-0 -m-4 md:-m-6 h-[500px] md:h-[600px] lg:h-[650px] overflow-hidden">
          {/* Image Section - Hidden on mobile */}
          <div className="hidden md:block relative w-64 lg:w-80 shrink-0 overflow-hidden rounded-l-xl h-full">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
            {/* Gradient overlay merging into content */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-white" />
          </div>

          {/* Content Section */}
          <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
            {/* Sticky Header */}
            <div className="shrink-0 p-6 md:p-8 lg:p-10 pb-4 md:pb-6 border-b border-gray-200 bg-white">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                {name}
                {credential && `, ${credential}`}
              </h3>
              <p className="text-sm md:text-base font-medium text-gray-600">
                {title}
              </p>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8 lg:p-10 pt-4 md:pt-6 space-y-6">
              {/* Bio */}
              {bio && (
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">
                    About
                  </h4>
                  <div className="text-sm text-gray-700 leading-relaxed [&>p]:mb-4 [&>p:last-child]:mb-0">
                    {typeof bio === "string" ? <p>{bio}</p> : bio}
                  </div>
                </div>
              )}

              {/* Services */}
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-3">
                  Services
                </h4>
                <ul className="space-y-2">
                  {services.map((service) => (
                    <li
                      key={service}
                      className="flex items-start gap-2 text-sm"
                    >
                      <span className="text-blue-600 mt-1">•</span>
                      <Link
                        to={`/service/${service}`}
                        className="text-blue-300 hover:text-blue-400 transition-colors"
                      >
                        {getServiceLabel(service)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Book Consultation Button */}
              {bookable && (
                <div className="pt-4">
                  <ParticleButton
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center"
                    onClick={() => {
                      // TODO: Implement booking functionality
                      console.log(`Book consultation with ${name}`);
                    }}
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Consultation
                  </ParticleButton>
                </div>
              )}
            </div>
          </div>
        </div>
      </BasicModal>
    </>
  );
}
