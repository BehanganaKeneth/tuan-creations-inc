
import { 
  Brain, 
  Video, 
  Wifi, 
  Rocket, 
  Shield, 
  GraduationCap, 
  Target,
  Building 
} from "lucide-react";

export const DivisionsSection = () => {
  const divisions = [
    {
      icon: Brain,
      emoji: "🧠",
      title: "Software, AI, Robotics & Hardware Lab",
      description: "Custom enterprise software, machine learning, robotics, embedded systems, smart chips, and IoT devices for African markets"
    },
    {
      icon: Video,
      emoji: "🎥",
      title: "Media Studio & TUAN TV",
      description: "24/7 broadcasting platform, content production, educational series, innovation journalism, and multi-language programming"
    },
    {
      icon: Wifi,
      emoji: "🌐",
      title: "Telecom, Connectivity & Communication Systems",
      description: "Enterprise VoIP, mesh networks, satellite internet, IoT infrastructure, telecom APIs, and indigenous equipment R&D"
    },
    {
      icon: Rocket,
      emoji: "🚀",
      title: "Aerospace, Satellites & Rocketry Program",
      description: "Small-scale rockets, UAVs, satellite payloads, telemetry systems, weather monitoring, and ground station construction"
    },
    {
      icon: Shield,
      emoji: "☁️",
      title: "Cloud, Cybersecurity & Data Science",
      description: "Regional cloud infrastructure, blockchain development, penetration testing, data lakes, and AI-enhanced analytics"
    },
    {
      icon: GraduationCap,
      emoji: "🎓",
      title: "Digital Academy & Innovation Incubator",
      description: "Tech bootcamps, certification programs, hardware maker labs, women in STEM empowerment, and LMS delivery"
    },
    {
      icon: Target,
      emoji: "🧩",
      title: "Strategy & Partnerships Office",
      description: "Coordination with governments, donors, universities, telcos, and anchoring enterprise growth initiatives"
    },
    {
      icon: Building,
      emoji: "🏛",
      title: "Executive Office",
      description: "Leadership, compliance, investor relations, finance management, and overall governance coordination"
    }
  ];

  return (
    <section id="divisions" className="py-20 bg-white/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-african-sky mb-6">
            ICT Innovation Suite
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            8 specialized divisions operating under unified governance, providing complete, 
            interoperable services across Africa's digital, physical, and creative infrastructure stack
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {divisions.map((division, index) => (
            <div 
              key={index} 
              className="card-african p-6 hover:scale-105 transition-all duration-300 group cursor-pointer"
            >
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">{division.emoji}</div>
                <division.icon className="w-8 h-8 text-african-gold mx-auto mb-3 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-lg font-bold text-african-sky mb-3 text-center">
                {division.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed text-center">
                {division.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-african-gold/10 to-african-emerald/10 p-8 rounded-2xl border border-african-gold/20">
            <h3 className="text-2xl font-bold text-african-sky text-center mb-4">
              Africa's First Fully Integrated ICT Ecosystem
            </h3>
            <p className="text-lg text-gray-700 text-center leading-relaxed">
              Each division operates independently while contributing to TUAN's comprehensive 
              approach to African digital transformation. Together, they form an interconnected 
              ecosystem that addresses every aspect of the continent's technology needs - from software to satellites.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
