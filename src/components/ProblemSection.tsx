
import { AlertTriangle, Wifi, Wrench, Users, Cpu, Globe, Shield, Satellite } from "lucide-react";

export const ProblemSection = () => {
  const problems = [
    {
      icon: Globe,
      title: "Fragmented ICT Sectors",
      description: "Software developers, media producers, telecom innovators, and AI engineers work in isolation without unified coordination"
    },
    {
      icon: Satellite,
      title: "Neglected Frontier Technologies",
      description: "Robotics, chip design, embedded systems, satellite engineering, and immersive media are overlooked due to resource limitations"
    },
    {
      icon: Shield,
      title: "Reliance on Foreign Platforms",
      description: "Data, media, software tools, and infrastructure are controlled by companies outside Africa"
    },
    {
      icon: Wrench,
      title: "Limited IP & Content Ownership",
      description: "Africa's creativity fuels global platforms, but creators lack equitable revenue and control over their innovations"
    },
    {
      icon: Users,
      title: "Digital Skills Mismatch",
      description: "Booming youth population lacks exposure to industry-grade tools and innovation labs for deep tech development"
    },
    {
      icon: Cpu,
      title: "Underrepresentation in Deep Tech",
      description: "Africa is nearly invisible in global patents, conferences, and innovation indices in AI, hardware, and aerospace"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-red-50/30 to-orange-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
            <AlertTriangle className="w-8 h-8 text-red-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-african-sky mb-6">
            The Problem We're Solving
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Africa lacks a homegrown, multidisciplinary ICT ecosystem that combines all critical 
            technology sectors into unified, accessible, Africa-first solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {problems.map((problem, index) => (
            <div key={index} className="card-african p-6 hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <problem.icon className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-african-sky mb-3">
                {problem.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-african-sky to-african-emerald p-8 rounded-2xl text-white text-center">
            <h3 className="text-2xl font-bold mb-4">
              TUAN's Response: Unified ICT Innovation Ecosystem
            </h3>
            <p className="text-lg leading-relaxed">
              We're building Africa's first fully integrated ICT powerhouse that addresses these challenges 
              through coordinated innovation, strategic partnerships, and Africa-first solutions spanning 
              digital, physical, and creative infrastructure that keeps value and intellectual property on the continent.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
