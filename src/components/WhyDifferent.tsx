
import { Shield, Network, Lightbulb, CheckCircle, Satellite, Cpu } from "lucide-react";

export const WhyDifferent = () => {
  const differentiators = [
    {
      icon: Shield,
      title: "Indigenous ICT Powerhouse",
      description: "Africa's first fully integrated ecosystem combining software, aerospace, media, and telecom under one roof"
    },
    {
      icon: Network,
      title: "Interconnected Infrastructure",
      description: "We deliver unified digital, physical, and creative infrastructure, not fragmented siloed services"
    },
    {
      icon: Satellite,
      title: "Frontier Technology Leadership",
      description: "Leading in neglected African deep tech: satellites, AI, robotics, embedded systems, and space engineering"
    }
  ];

  const achievements = [
    "Pan-African ICT Innovation Suite",
    "Comprehensive Technology Sovereignty",
    "Indigenous IP Creation & Ownership",
    "Unified Digital Infrastructure",
    "Aerospace & Space Technology",
    "Continental Innovation Leadership"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-african-sky/10 to-african-emerald/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-african-sky mb-6">
            Why TUAN Is Different
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just another tech company. We're building The United African Nation in Technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {differentiators.map((item, index) => (
            <div key={index} className="card-african p-8 text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-african-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-african-sky mb-4">
                {item.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Core Message */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border-2 border-african-gold/30 text-center">
            <div className="flex items-center justify-center mb-6">
              <Cpu className="w-8 h-8 text-african-gold mr-3" />
              <h3 className="text-3xl font-bold text-african-sky">
                More Than a Company — A Call to Action
              </h3>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              TUAN Creations is a blueprint for building Africa's technological sovereignty. 
              By uniting software, hardware, AI, aerospace, telecoms, digital content, and youth development 
              into one powerhouse, we enable Africa not only to consume global technology—but to create it, shape it, and export it.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-african-emerald mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
