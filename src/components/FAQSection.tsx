import BasicAccordion from "@/components/smoothui/basic-accordion";

const faqItems = [
  {
    id: "insurance",
    title: "What insurance plans do you accept?",
    content: (
      <p className="text-blue-900">
        FPSK is in network with Premera and Lifewise only. We do not bill
        directly to any other insurance carrier. Payment is due at the time of
        services.
      </p>
    ),
  },
  {
    id: "payment-plans",
    title: "Do you offer payment plans?",
    content: (
      <p className="text-blue-900">
        Yes, we offer payment plans. Contact{" "}
        <a
          href="mailto:billing@fpskirkland.com"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          billing@fpskirkland.com
        </a>{" "}
        for more details.
      </p>
    ),
  },
  {
    id: "superbills",
    title: "When are superbills provided?",
    content: (
      <p className="text-blue-900">
        Superbills are provided on the first Wednesday of the following month
        for all out-of-pocket clients.
      </p>
    ),
  },
  {
    id: "insurance-coverage",
    title: "How can I check my insurance coverage?",
    content: (
      <p className="text-blue-900">
        We suggest all clients check with their insurance carrier directly for
        their current deductible and out of pocket maximum for the year as this
        can change often.
      </p>
    ),
  },
  {
    id: "cpt-codes",
    title: "How can I get CPT codes?",
    content: (
      <p className="text-blue-900">
        CPT codes are readily available upon request at{" "}
        <a
          href="mailto:billing@fpskirkland.com"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          billing@fpskirkland.com
        </a>
        .
      </p>
    ),
  },
  {
    id: "coaching-insurance",
    title: "Is ADHD/Executive Functioning Coaching covered by insurance?",
    content: (
      <p className="text-blue-900">
        ADHD/Executive Functioning Coaching is out of pocket and not reimbursable
        by insurance.
      </p>
    ),
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about billing, insurance, and our
            services.
          </p>
        </div>

        <BasicAccordion items={faqItems} allowMultiple={true} />
      </div>
    </section>
  );
}

