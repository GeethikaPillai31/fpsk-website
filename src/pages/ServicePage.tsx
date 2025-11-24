import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  Service,
  getServiceLabel,
  getServiceLongDescription,
  getServiceCoverImage,
} from "@/types/services";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Calendar } from "lucide-react";
import ParticleButton from "@/components/kokonutui/particle-button";
import { ProviderSelectionModal } from "@/components/ProviderSelectionModal";
import { getBookableTeamMembersByService } from "@/utils/teamMembers";
import { motion } from "framer-motion";

export function ServicePage() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const [isProviderModalOpen, setIsProviderModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleBackToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate("/");
    // Wait for navigation and DOM to be ready, then scroll to services section
    setTimeout(() => {
      requestAnimationFrame(() => {
        const element = document.querySelector("#services");
        if (element) {
          // Account for fixed header offset
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      });
    }, 150);
  };

  // Find the service from the enum
  const service = Object.values(Service).find((s) => s === serviceId) as
    | Service
    | undefined;

  if (!service) {
    return (
      <>
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Service Not Found
            </h1>
            <p className="text-gray-600 mb-6">
              The service you're looking for doesn't exist.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-400 font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const serviceLabel = getServiceLabel(service);
  const serviceDescription = getServiceLongDescription(service);
  const coverImage = getServiceCoverImage(service);
  const bookableProviders = getBookableTeamMembersByService(service);
  const hasMultipleProviders = bookableProviders.length > 1;
  const hasProviders = bookableProviders.length > 0;

  const handleBookService = () => {
    if (hasMultipleProviders) {
      setIsProviderModalOpen(true);
    } else if (hasProviders) {
      // TODO: Direct booking for single provider
      console.log(
        `Book service ${service} with provider ${bookableProviders[0].name}`
      );
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 pt-24 pb-32">
        <div className="mx-auto max-w-5xl px-6">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="relative z-10 mb-4"
          >
            <Link
              to="/"
              onClick={handleBackToServices}
              className="inline-flex items-center gap-2 text-blue-900 hover:text-blue-700 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span className="text-sm font-medium">Back to Home</span>
            </Link>
          </motion.div>

          {/* Cover Image with Gradient Transition */}
          {coverImage && (
            <div className="relative h-64 md:h-80 rounded-t-2xl overflow-hidden mb-0">
              <img
                src={coverImage}
                alt={serviceLabel}
                className="w-full h-full object-cover"
              />
              {/* Gradient fade to card */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/90 to-transparent" />
            </div>
          )}

          {/* Service Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`bg-white ${
              coverImage ? "rounded-b-2xl" : "rounded-2xl"
            } shadow-lg p-8 md:p-10 ${coverImage ? "-mt-0" : "mt-0"}`}
          >
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {serviceLabel}
              </h1>
              <div className="h-1 w-20 bg-gradient-to-r from-blue-300 to-blue-500 rounded-full" />
            </div>

            {/* Description */}
            <div className="prose prose-lg max-w-none mb-8">
              {typeof serviceDescription === "string" ? (
                <p className="text-lg text-gray-700 leading-relaxed">
                  {serviceDescription}
                </p>
              ) : (
                <div className="text-lg text-gray-700 leading-relaxed">
                  {serviceDescription}
                </div>
              )}
            </div>

            {/* Additional Details Section */}
            <div className="border-t border-gray-200 pt-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                What to Expect
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Our comprehensive approach ensures that you receive
                  personalized care tailored to your unique needs. We combine
                  evidence-based practices with compassionate support to help
                  you achieve your mental health goals.
                </p>
                <p>
                  During your initial consultation, we'll discuss your concerns,
                  goals, and develop a personalized treatment plan. Our team is
                  committed to providing a safe, confidential, and supportive
                  environment for your journey toward wellness.
                </p>
              </div>
            </div>

            {/* Book Service Button */}
            {hasProviders && (
              <div className="border-t border-gray-200 pt-8">
                <ParticleButton
                  onClick={handleBookService}
                  className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2 px-6 py-3 text-base font-medium"
                >
                  <Calendar className="w-5 h-5" />
                  <span>
                    {hasMultipleProviders
                      ? "Book Service"
                      : `Book with ${bookableProviders[0].name}`}
                  </span>
                </ParticleButton>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Provider Selection Modal */}
      <ProviderSelectionModal
        isOpen={isProviderModalOpen}
        onClose={() => setIsProviderModalOpen(false)}
        service={service}
        onProviderSelect={(provider) => {
          // TODO: Navigate to booking page or handle booking
          console.log(`Selected provider: ${provider.name}`);
        }}
      />

      <Footer />
    </>
  );
}
