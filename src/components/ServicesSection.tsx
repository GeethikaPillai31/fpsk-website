import { Link } from "react-router-dom";
import {
  Service,
  getServiceLabel,
  getServiceDescription,
} from "@/types/services";

export function ServicesSection() {
  const assessments = [
    {
      serviceId: Service.ADHD_LEARNING_DISABILITIES_EVALUATIONS,
      gradient: "from-blue-100 via-blue-50 to-cyan-50",
    },
    {
      serviceId: Service.AUTISM_DIAGNOSTIC_EVALUATIONS,
      gradient: "from-indigo-100 via-indigo-50 to-blue-50",
    },
    {
      serviceId: Service.CONCUSSION_NEUROLOGICAL_COGNITIVE_DECLINE,
      gradient: "from-slate-100 via-slate-50 to-blue-50",
    },
    {
      serviceId: Service.KINDERGARTEN_EARLY_ENTRANCE_ASSESSMENT,
      gradient: "from-teal-100 via-teal-50 to-emerald-50",
    },
    {
      serviceId: Service.INDEPENDENT_EDUCATIONAL_EVALUATION,
      gradient: "from-cyan-100 via-cyan-50 to-blue-50",
    },
  ];

  const therapyServices = [
    {
      serviceId: Service.PSYCHOTHERAPY,
      gradient: "from-green-100 via-green-50 to-emerald-50",
    },
    {
      serviceId: Service.EF_SKILLS_COACHING,
      gradient: "from-emerald-100 via-emerald-50 to-teal-50",
    },
    {
      serviceId: Service.ADHD_INFORMED_COUPLES_FAMILY_THERAPY,
      gradient: "from-teal-100 via-teal-50 to-cyan-50",
    },
    {
      serviceId: Service.EMDR_THERAPY,
      gradient: "from-violet-100 via-violet-50 to-purple-50",
    },
    {
      serviceId: Service.FOREST_BATHING,
      gradient: "from-green-100 via-green-50 to-lime-50",
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Offering a broad range of mental health services to meet the needs
            of our community.
          </p>
        </div>

        {/* Assessments and Therapy/Coaching Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Assessments */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Assessments
            </h3>
            <div className="grid grid-cols-1 gap-6">
              {assessments.map((assessment, index) => (
                <div
                  key={index}
                  className={`relative rounded-xl border border-gray-200/50 overflow-hidden hover:shadow-lg transition-all duration-300 group bg-gradient-to-r ${assessment.gradient}`}
                >
                  {/* Content */}
                  <div className="relative z-10 p-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">
                      {getServiceLabel(assessment.serviceId)}
                    </h4>
                    <p className="text-gray-700 mb-4">
                      {getServiceDescription(assessment.serviceId)}
                    </p>
                    <Link
                      to={`/service/${assessment.serviceId}`}
                      className="inline-flex items-center gap-1 text-gray-900 hover:text-gray-700 font-medium transition-colors group/link"
                    >
                      Read More
                      <span className="transition-transform group-hover/link:translate-x-1">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Therapy/Coaching */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Therapy & Coaching
            </h3>
            <div className="grid grid-cols-1 gap-6">
              {therapyServices.map((service, index) => (
                <div
                  key={index}
                  className={`relative rounded-xl border border-gray-200/50 overflow-hidden hover:shadow-lg transition-all duration-300 group bg-gradient-to-r ${service.gradient}`}
                >
                  {/* Content */}
                  <div className="relative z-10 p-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">
                      {getServiceLabel(service.serviceId)}
                    </h4>
                    <p className="text-gray-700 mb-4">
                      {getServiceDescription(service.serviceId)}
                    </p>
                    <Link
                      to={`/service/${service.serviceId}`}
                      className="inline-flex items-center gap-1 text-gray-900 hover:text-gray-700 font-medium transition-colors group/link"
                    >
                      Read More
                      <span className="transition-transform group-hover/link:translate-x-1">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
