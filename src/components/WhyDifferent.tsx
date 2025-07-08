
import { Shield, Network, Lightbulb, CheckCircle } from "lucide-react";

export const WhyDifferent = () => {
  const differentiators = [
    {
      icon: Shield,
      title: "African IP Creation",
      description: "We create African intellectual property, not replicas of foreign models"
    },
    {
      icon: Network,
      title: "Interconnected Infrastructure",
      description: "We deliver interconnected infrastructure, not siloed services"
    },
    {
      icon: Lightbulb,
      title: "Pan-African Digital Force",
      description: "We are building a structured, scalable, and African-led innovation ecosystem"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-african-sky/10 to-african-emerald/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-african-sky mb-6">
            Why TUAN Is Different
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just another tech company. We're building the United African Nation in Innovation.
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
            <h3 className="text-3xl font-bold text-african-sky mb-6">
              We are TUAN — The United African Nation in Innovation
            </h3>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              And we are here to lead Africa's digital transformation through unified innovation, 
              strategic partnerships, and enterprise-grade delivery that keeps value on the continent.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-african-emerald mr-3" />
                  <span className="text-gray-700">Structured Enterprise Approach</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-african-emerald mr-3" />
                  <span className="text-gray-700">Pan-African Scale & Vision</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-african-emerald mr-3" />
                  <span className="text-gray-700">Innovation Ecosystem Leadership</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-african-emerald mr-3" />
                  <span className="text-gray-700">Africa-First Technology Solutions</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-african-emerald mr-3" />
                  <span className="text-gray-700">Strategic Government Partnerships</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-african-emerald mr-3" />
                  <span className="text-gray-700">Sustainable Value Creation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
