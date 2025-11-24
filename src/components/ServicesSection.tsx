export function ServicesSection() {
  const assessments = [
    {
      title: "ADHD and Learning Disabilities",
      description:
        "Evaluations for children, adolescents, and adults designed to identify learning disabilities and ADHD.",
    },
    {
      title: "Autism Diagnostic Evaluations",
      description:
        "ASD evaluations for individuals ranging in age from 3 years through adulthood.",
    },
    {
      title: "Concussion, Neurological Illness/Injury, Cognitive Decline",
      description:
        "Comprehensive assessments for differential diagnosis of a broad range of disorders.",
    },
    {
      title: "Kindergarten Early Entrance Assessment",
      description: "Administered by school psychologists.",
    },
    {
      title: "Independent Educational Evaluation",
      description:
        "In-depth evaluations providing parents and school district staff with an independent assessment of a student's current functioning and academic needs.",
    },
  ];

  const therapyServices = [
    {
      title: "Psychotherapy",
      description:
        "Individual and family therapy for children, teens, and adults.",
    },
    {
      title: "EF Skills Coaching",
      description:
        "Master's level coaches work on building skills around executive functioning.",
    },
    {
      title: "ADHD-Informed Couples and Family Therapy",
      description: "Therapy focused on supporting ADHD families and couples.",
    },
    {
      title: "EMDR Therapy",
      description: "Eye Movement Desensitization and Reprocessing.",
    },
    {
      title: "Forest Bathing",
      description:
        "Walks are offered in local parks with easy terrain in mind; at a gentle and slow pace, suitable for all-bodies.",
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

        {/* Assessments */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Assessments
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {assessments.map((assessment, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {assessment.title}
                </h4>
                <p className="text-gray-600">{assessment.description}</p>
                <a
                  href="#"
                  className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium"
                >
                  Read More →
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Therapy/Coaching */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Therapy & Coaching
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {therapyServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h4>
                <p className="text-gray-600">{service.description}</p>
                <a
                  href="#"
                  className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium"
                >
                  Read More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
