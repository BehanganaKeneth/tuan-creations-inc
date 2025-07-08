
import { Network, Users, ArrowRight, CheckCircle, Target } from "lucide-react";

export const BusinessModel = () => {
  const modelPoints = [
    "TUAN builds the trunk. Partners form the branches.",
    "We lead strategic direction. Partners deliver under our supervision.",
    "All partners operate under TUAN branding and quality assurance.",
    "Clients experience seamless, one-brand delivery.",
    "Partners gain access to structured projects and growth opportunities."
  ];

  const benefits = [
    {
      title: "For TUAN",
      points: [
        "Scales operations with lean internal teams",
        "Retains quality, IP, and strategic control",
        "Positions as trusted delivery enterprise"
      ]
    },
    {
      title: "For Partners",
      points: [
        "Access to structured projects and clients",
        "Growth under TUAN's guidance",
        "Share in long-term value creation"
      ]
    },
    {
      title: "For Clients",
      points: [
        "One-stop delivery for diverse needs",
        "Seamless execution, consistent quality",
        "African-led, structured, accountable innovation"
      ]
    }
  ];

  return (
    <section id="model" className="py-20 bg-gradient-to-br from-blue-50/30 to-emerald-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-african-sky mb-6">
            Business Model
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ecosystem-Led, Platform-Driven Innovation
          </p>
        </div>

        {/* Core Model Explanation */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="card-african p-8 text-center">
            <div className="w-16 h-16 bg-african-gradient rounded-full flex items-center justify-center mx-auto mb-6">
              <Network className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-african-sky mb-4">
              TUAN is the Trunk. Partners are the Branches.
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              We focus on core internal services and extend our impact by partnering with 
              legally registered, high-capacity African tech firms. These partners operate 
              under TUAN's leadership to deliver scalable, Africa-led solutions.
            </p>
          </div>
        </div>

        {/* Model Implementation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
          <div className="card-african p-8">
            <h4 className="text-xl font-bold text-african-sky mb-6 flex items-center">
              <Target className="w-6 h-6 text-african-gold mr-3" />
              How It Works
            </h4>
            <div className="space-y-4">
              {modelPoints.map((point, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-african-emerald mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card-african p-8">
            <h4 className="text-xl font-bold text-african-sky mb-6 flex items-center">
              <Users className="w-6 h-6 text-african-gold mr-3" />
              Example: Digital Inclusion Initiative
            </h4>
            <div className="space-y-4">
              <div className="border-l-4 border-african-gold pl-4">
                <p className="font-medium text-african-sky">Software Division</p>
                <p className="text-sm text-gray-600">Leads platform development with partner engineers</p>
              </div>
              <div className="border-l-4 border-african-emerald pl-4">
                <p className="font-medium text-african-sky">Academy</p>
                <p className="text-sm text-gray-600">Designs curriculum, training centers run programs</p>
              </div>
              <div className="border-l-4 border-african-sunset pl-4">
                <p className="font-medium text-african-sky">Media Studio</p>
                <p className="text-sm text-gray-600">Leads content with production house support</p>
              </div>
              <div className="border-l-4 border-african-sky pl-4">
                <p className="font-medium text-african-sky">Telecom Division</p>
                <p className="text-sm text-gray-600">Manages infrastructure with licensed partners</p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="card-african p-6">
              <h4 className="text-xl font-bold text-african-sky mb-4 text-center">
                {benefit.title}
              </h4>
              <div className="space-y-3">
                {benefit.points.map((point, pointIndex) => (
                  <div key={pointIndex} className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-african-gold mr-2 mt-1 flex-shrink-0" />
                    <p className="text-sm text-gray-700">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
