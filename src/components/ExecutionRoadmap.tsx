
import { Calendar, Target, Rocket, Star, Globe, Trophy } from "lucide-react";

export const ExecutionRoadmap = () => {
  const roadmapData = [
    {
      year: "2025",
      icon: Rocket,
      title: "Foundation & Launch",
      milestone: "Launch LMS + TUAN TV; pilot cross-department projects",
      color: "from-african-gold to-african-sunset"
    },
    {
      year: "2026",
      icon: Target,
      title: "Partner Program",
      milestone: "Formalize partner program; expand B2B contracts",
      color: "from-african-sunset to-african-emerald"
    },
    {
      year: "2027",
      icon: Star,
      title: "Technology Expansion",
      milestone: "Launch AI and telecom services; regional scale-up begins",
      color: "from-african-emerald to-african-sky"
    },
    {
      year: "2028",
      icon: Globe,
      title: "Innovation Forum",
      milestone: "Space tech pilot; first United African Innovation Forum",
      color: "from-african-sky to-african-gold"
    },
    {
      year: "2029",
      icon: Calendar,
      title: "Continental Scale",
      milestone: "Expand cloud, LMS, IoT to multiple African countries",
      color: "from-african-gold to-african-emerald"
    },
    {
      year: "2030",
      icon: Trophy,
      title: "Innovation City",
      milestone: "Reach 10M+ users; launch TUAN satellite; open Innovation City",
      color: "from-african-emerald to-african-sunset"
    }
  ];

  return (
    <section id="roadmap" className="py-20 bg-white/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-african-sky mb-6">
            Execution Roadmap
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strategic milestones for building Africa's digital future (2025–2030)
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-african-gold via-african-emerald to-african-sky rounded-full"></div>

            {/* Roadmap Items */}
            <div className="space-y-12">
              {roadmapData.map((item, index) => (
                <div key={index} className="relative flex items-center">
                  {/* Timeline Dot */}
                  <div className={`relative z-10 w-16 h-16 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center shadow-lg`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content Card */}
                  <div className="ml-8 flex-1">
                    <div className="card-african p-6 hover:scale-105 transition-transform duration-300">
                      <div className="flex items-center justify-between mb-3">
                        <span className={`text-2xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                          {item.year}
                        </span>
                        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                          Year {index + 1}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-african-sky mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {item.milestone}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vision 2030 Highlight */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-african-sky to-african-emerald p-8 rounded-2xl text-white text-center">
            <Trophy className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-4">Vision 2030</h3>
            <p className="text-xl leading-relaxed mb-4">
              By 2030, TUAN will be the cornerstone of Africa's digital transformation
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold">10M+</div>
                <div className="text-sm opacity-90">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">54</div>
                <div className="text-sm opacity-90">African Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">1</div>
                <div className="text-sm opacity-90">Innovation City</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
