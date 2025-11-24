import BasicModal from "@/components/smoothui/basic-modal";
import { type TeamMember } from "@/components/TeamCard";
import { Service } from "@/types/services";
import { getBookableTeamMembersByService } from "@/utils/teamMembers";
import { motion } from "framer-motion";

interface ProviderSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: Service;
  onProviderSelect?: (provider: TeamMember) => void;
}

export function ProviderSelectionModal({
  isOpen,
  onClose,
  service,
  onProviderSelect,
}: ProviderSelectionModalProps) {
  const providers = getBookableTeamMembersByService(service);

  const handleProviderSelect = (provider: TeamMember) => {
    // TODO: Implement booking functionality
    console.log(`Book service ${service} with provider ${provider.name}`);
    onProviderSelect?.(provider);
    onClose();
  };

  if (providers.length === 0) {
    return null;
  }

  return (
    <BasicModal
      isOpen={isOpen}
      onClose={onClose}
      title="Select a Provider"
      size="lg"
    >
      <div className="p-8">
        <p className="text-sm text-gray-600 mb-8 text-center">
          Choose a provider for this service:
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          {providers.map((provider, index) => (
            <motion.button
              key={provider.name}
              onClick={() => handleProviderSelect(provider)}
              className="flex flex-col items-center gap-3 group cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Avatar with preserved aspect ratio */}
              <div className="relative w-24 h-24 rounded-full overflow-hidden ring-2 ring-gray-200 group-hover:ring-blue-400 transition-all shadow-lg group-hover:shadow-xl">
                <img
                  src={provider.image}
                  alt={provider.name}
                  className="w-full h-full object-cover"
                  style={{ objectFit: "cover" }}
                />
              </div>
              {/* Name and Credential */}
              <div className="text-center">
                <h3 className="font-medium text-gray-900 text-sm leading-tight">
                  {provider.name}
                  {provider.credential && (
                    <span className="text-gray-600">
                      , {provider.credential}
                    </span>
                  )}
                </h3>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </BasicModal>
  );
}
