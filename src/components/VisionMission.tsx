
import { Target, Eye, Heart } from "lucide-react";

export const VisionMission = () => {
  return (
    <section id="vision" className="py-20 bg-white/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-african-sky mb-6">
            Vision & Mission
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Driving Africa's digital transformation through strategic innovation and unified ecosystems
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Vision */}
          <div className="card-african p-8 h-full">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-african-gradient rounded-xl flex items-center justify-center mr-4">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-african-sky">Our Vision</h3>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed">
              To be the <span className="font-semibold text-african-gold">strategic hub</span> of 
              Africa's digital economy and transformation.
            </p>
            <div className="mt-6 p-4 bg-african-gold/10 rounded-lg">
              <p className="text-african-sky font-medium">
                We envision a unified African digital ecosystem where innovation thrives, 
                talent flourishes, and technology serves the continent's unique needs.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="card-african p-8 h-full">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-african-gradient rounded-xl flex items-center justify-center mr-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-african-sky">Our Mission</h3>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              To uncover Africa's digital potential by building innovation capacity, 
              connecting ecosystems, and delivering Africa-first solutions.
            </p>
            
            <div className="grid grid-cols-1 gap-4">
              {[
                "Software & AI Innovation",
                "Media & Creative Economy",
                "Telecommunications Infrastructure", 
                "Aerospace Technology",
                "Digital Education",
                "Innovation Ecosystems"
              ].map((area, index) => (
                <div key={index} className="flex items-center">
                  <Heart className="w-4 h-4 text-african-gold mr-3" />
                  <span className="text-gray-700">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
