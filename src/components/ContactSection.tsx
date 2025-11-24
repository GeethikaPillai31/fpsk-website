export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We welcome inquiries about our services. Please reach out to us
            using the form below or contact information provided.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Primary Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <div className="bg-gray-50 rounded-lg p-8">
              {/* Content */}
              <div className="flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Get in Touch
                </h3>
                <div className="flex lg:flex-row gap-6">
                  <div className="space-y-6 flex-shrink-0">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">
                        Address
                      </h4>
                      <p className="text-gray-600">
                        312 11th Avenue West
                        <br />
                        Suite 201
                        <br />
                        Kirkland, WA 98033
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">
                        Phone
                      </h4>
                      <p className="text-gray-600">(425) 576-1817</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">
                        Fax
                      </h4>
                      <p className="text-gray-600">(425) 827-7210</p>
                    </div>
                  </div>

                  {/* Apple-style Map */}
                  <div className="flex-1 rounded-xl overflow-hidden shadow-md border border-gray-200 min-h-[320px]">
                    <div className="relative w-full h-full min-h-[320px] bg-gray-100">
                      <iframe
                        src="https://www.google.com/maps?q=312+11th+Avenue+West+Suite+201,Kirkland+WA+98033&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="absolute inset-0 w-full h-full"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white/90 via-white/50 to-transparent h-24 pointer-events-none" />
                      <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
                        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-200/50">
                          <div className="flex items-start gap-3">
                            <div className="shrink-0 mt-0.5">
                              <div className="w-2 h-2 bg-blue-500 rounded-full" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-semibold text-gray-900 mb-1">
                                312 11th Avenue West
                              </p>
                              <p className="text-xs text-gray-600">
                                Suite 201, Kirkland, WA 98033
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Note spanning full width */}
                <div className="mt-6 pt-6 border-t border-gray-300">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">
                    Note
                  </h4>
                  <p className="text-sm text-gray-600">
                    Please note that sensitive information should not be
                    communicated via email. Assessments are currently scheduled
                    2 weeks to 2 months out.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
