export function OurTeamSection() {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet our experienced team of mental health professionals dedicated
            to supporting you and your family.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team member cards will go here */}
          <div className="text-center p-6">
            <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Team Member
            </h3>
            <p className="text-gray-600 mb-2">Credentials</p>
            <p className="text-sm text-gray-500">
              Click to learn more about this team member.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
