
import { CheckSquare, FileText, Users, Target, DollarSign } from "lucide-react";

export const ImmediatePriorities = () => {
  const priorities = [
    {
      icon: FileText,
      title: "Finalize Partner Framework",
      description: "Complete partner onboarding framework and templates for seamless collaboration"
    },
    {
      icon: CheckSquare,
      title: "Publish Quality Playbook",
      description: "Launch TUAN Quality Assurance & Delivery Playbook for consistent standards"
    },
    {
      icon: Target,
      title: "Launch Pilot Projects",
      description: "Execute 2 cross-department pilot projects to demonstrate unified delivery"
    },
    {
      icon: Users,
      title: "Recruit Department Leads",
      description: "Onboard founding leads for Tech, Media, Cloud, and Telecom divisions"
    },
    {
      icon: DollarSign,
      title: "Package for Investment",
      description: "Prepare strategy for co-founder onboarding, funding, and government engagement"
    }
  ];

  return (
    <section className="py-20 bg-white/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-african-sky mb-6">
            Immediate Priorities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strategic next steps to transform this vision into operational reality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {priorities.map((priority, index) => (
            <div key={index} className="card-african p-6 hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 bg-african-gradient rounded-lg flex items-center justify-center mb-4">
                <priority.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-african-sky mb-3">
                {priority.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {priority.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-african-gold to-african-sunset p-8 rounded-2xl text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Ready to Build the Future?</h3>
            <p className="text-xl mb-8 leading-relaxed">
              Join us as we transform Africa's digital landscape through unified innovation, 
              strategic partnerships, and enterprise-grade delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-african-sky px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Become a Co-Founder
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Partner with TUAN
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
