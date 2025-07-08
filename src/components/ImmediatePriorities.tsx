
import { CheckSquare, FileText, Users, Target, DollarSign, Tv, Satellite, Rocket } from "lucide-react";

export const ImmediatePriorities = () => {
  const priorities = [
    {
      icon: Tv,
      title: "Launch TUAN LMS and TUAN TV",
      description: "Deploy online learning platform and 24/7 broadcasting system with flagship educational programming"
    },
    {
      icon: FileText,
      title: "Release Content & Certification",
      description: "Launch 6 flagship shows and 10+ certified courses across software, AI, media, and telecom"
    },
    {
      icon: Rocket,
      title: "Prototype Smart Devices",
      description: "Develop and test embedded systems, IoT kits, and smart hardware for African markets"
    },
    {
      icon: Target,
      title: "Host Innovation Week",
      description: "Organize inaugural United African Innovation Week to showcase technology and attract partners"
    },
    {
      icon: Users,
      title: "Secure B2B Contracts",
      description: "Sign 10+ contracts with governments and enterprises for ICT infrastructure and training"
    },
    {
      icon: Satellite,
      title: "Begin Aerospace Development",
      description: "Start satellite payload and telemetry system development for space technology program"
    }
  ];

  return (
    <section className="py-20 bg-white/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-african-sky mb-6">
            12-Month Launch Strategy
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strategic priorities to transform TUAN into Africa's leading ICT innovation powerhouse
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
            <h3 className="text-3xl font-bold mb-4">Ready to Build Africa's Digital Future?</h3>
            <p className="text-xl mb-8 leading-relaxed">
              Join us as we transform Africa's digital landscape through unified innovation, 
              comprehensive ICT solutions, and indigenous technology development that keeps 
              value and intellectual property on the continent.
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
