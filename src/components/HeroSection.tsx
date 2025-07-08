
import { ArrowRight, Sparkles, Globe, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-african-sky/10 via-transparent to-african-emerald/10"></div>
      <div className="absolute top-20 left-10 w-20 h-20 bg-african-gold/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-african-sunset/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-african-gradient p-1 rounded-full mb-8">
            <div className="bg-white rounded-full px-4 py-2">
              <span className="text-african-sky font-semibold text-sm">🌍 Africa Inspired!</span>
            </div>
            <span className="text-white px-4 py-2 text-sm font-medium">Enterprise Strategy Proposal</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient-african">TUAN CREATIONS</span>
            <br />
            <span className="text-african-sky">INC.</span>
          </h1>

          {/* Subheading */}
          <p className="text-2xl md:text-3xl text-african-sky/80 mb-4 font-medium">
            The United African Nation in Technology
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Building the strategic hub of Africa's digital economy through unified innovation ecosystems, 
            Pan-African technology solutions, and enterprise-grade delivery across software, media, 
            telecommunications, aerospace, and education.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="btn-african text-lg px-8 py-4">
              Explore Our Vision
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-african-sky border-african-sky hover:bg-african-sky hover:text-white text-lg px-8 py-4">
              Join as Co-Founder
            </Button>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 card-african">
              <div className="w-12 h-12 bg-african-gradient rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-african-sky mb-2">8 Divisions</h3>
              <p className="text-gray-600">Comprehensive innovation sectors</p>
            </div>
            <div className="text-center p-6 card-african">
              <div className="w-12 h-12 bg-african-gradient rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-african-sky mb-2">Pan-African</h3>
              <p className="text-gray-600">Continental digital transformation</p>
            </div>
            <div className="text-center p-6 card-african">
              <div className="w-12 h-12 bg-african-gradient rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-african-sky mb-2">2025-2030</h3>
              <p className="text-gray-600">Strategic execution roadmap</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
