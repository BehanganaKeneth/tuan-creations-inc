
import { ArrowRight, Sparkles, Globe, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  const handleExploreVision = () => {
    const visionSection = document.getElementById('vision');
    if (visionSection) {
      visionSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleJoinAsCoFounder = () => {
    const registerSection = document.getElementById('register');
    if (registerSection) {
      registerSection.scrollIntoView({ behavior: 'smooth' });
      
      // Wait for scroll to complete, then pre-select co-founder option
      setTimeout(() => {
        const roleSelect = document.querySelector('[data-role="co-founder-trigger"]') as HTMLElement;
        if (roleSelect) {
          roleSelect.click();
        }
      }, 800);
    }
  };

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
            <span className="text-white px-4 py-2 text-sm font-medium">Pan-African ICT Innovation Suite</span>
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

          {/* Enhanced Description */}
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Building Africa's first fully integrated ICT ecosystem spanning software engineering, 
            AI & robotics, digital media & broadcasting, telecommunications infrastructure, 
            aerospace engineering, cybersecurity, and innovation incubation across the continent.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="btn-african text-lg px-8 py-4" onClick={handleExploreVision}>
              Explore Our Vision
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-african-sky border-african-sky hover:bg-african-sky hover:text-white text-lg px-8 py-4" onClick={handleJoinAsCoFounder}>
              Join as Co-Founder
            </Button>
          </div>

          {/* Enhanced Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="text-center p-6 card-african">
              <div className="w-12 h-12 bg-african-gradient rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-african-sky mb-2">8 Divisions</h3>
              <p className="text-gray-600">Comprehensive ICT sectors</p>
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
              <h3 className="text-2xl font-bold text-african-sky mb-2">100K+</h3>
              <p className="text-gray-600">Digital professionals by 2030</p>
            </div>
            <div className="text-center p-6 card-african">
              <div className="w-12 h-12 bg-african-gradient rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-african-sky mb-2">10M+</h3>
              <p className="text-gray-600">Users across platforms by 2030</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
