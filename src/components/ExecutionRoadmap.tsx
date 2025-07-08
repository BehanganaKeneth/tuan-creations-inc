
import { Calendar, Target, Rocket, Star, Globe, Trophy, Satellite, Tv } from "lucide-react";

export const ExecutionRoadmap = () => {
  const roadmapData = [
    {
      year: "2025",
      icon: Rocket,
      title: "Foundation & Launch",
      milestone: "Launch TUAN LMS + TUAN TV; prototype smart devices; 6 flagship shows + 10+ certified courses",
      color: "from-african-gold to-african-sunset"
    },
    {
      year: "2026",
      icon: Target,
      title: "B2B Expansion",
      milestone: "Sign 10+ B2B/government contracts; formalize partner program; expand telecoms infrastructure",
      color: "from-african-sunset to-african-emerald"
    },
    {
      year: "2027",
      icon: Star,
      title: "Technology Integration",
      milestone: "Launch AI services and aerospace payload development; regional scale-up of IoT systems",
      color: "from-african-emerald to-african-sky"
    },
    {
      year: "2028",
      icon: Satellite,
      title: "Space & Innovation Forum",
      milestone: "Begin satellite telemetry development; host inaugural United African Innovation Week",
      color: "from-african-sky to-african-gold"
    },
    {
      year: "2029",
      icon: Globe,
      title: "Continental Expansion",
      milestone: "Expand cloud, LMS, IoT to multiple African countries; reach 100K+ certified professionals",
      color: "from-african-gold to-african-emerald"
    },
    {
      year: "2030",
      icon: Trophy,
      title: "Innovation City & Satellite",
      milestone: "Launch Africa's first youth-built satellite; establish TUAN Innovation City; reach 10M+ users",
      color: "from-african-emerald to-african-sunset"
    }
  ];

  return (
    <section id="roadmap" className="py-20 bg-white/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-african-sky mb-6">
            Launch Roadmap
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strategic milestones for building Africa's technological sovereignty (2025–2030)
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
            <h3 className="text-3xl font-bold mb-4">Vision 2030: Technological Sovereignty</h3>
            <p className="text-xl leading-relaxed mb-4">
              By 2030, TUAN will be Africa's leading integrated ICT, media, and aerospace enterprise
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold">10M+</div>
                <div className="text-sm opacity-90">Platform Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">100K+</div>
                <div className="text-sm opacity-90">Certified Professionals</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">1st</div>
                <div className="text-sm opacity-90">Youth-Built Satellite</div>
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
