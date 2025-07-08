
import { Mail, MapPin, Phone, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="contact" className="bg-african-sky text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/5207bd62-8d2e-4833-9aa7-7a4103ad4068.png" 
                alt="TUAN Creations Logo"
                className="h-16 w-auto"
              />
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Building the strategic hub of Africa's digital economy through unified innovation 
              ecosystems, enterprise-grade delivery, and Pan-African technology solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-african-gold/20 rounded-lg flex items-center justify-center hover:bg-african-gold/30 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-african-gold/20 rounded-lg flex items-center justify-center hover:bg-african-gold/30 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-african-gold">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#vision" className="text-gray-300 hover:text-white transition-colors">Vision & Mission</a></li>
              <li><a href="#divisions" className="text-gray-300 hover:text-white transition-colors">Our Divisions</a></li>
              <li><a href="#model" className="text-gray-300 hover:text-white transition-colors">Business Model</a></li>
              <li><a href="#roadmap" className="text-gray-300 hover:text-white transition-colors">Execution Roadmap</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-african-gold">Connect With Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-african-gold" />
                <span className="text-gray-300">info@tuancreations.africa</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-african-gold" />
                <span className="text-gray-300">+234 XXX XXX XXXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-african-gold" />
                <span className="text-gray-300">Lagos, Nigeria</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 TUAN Creations Inc. All rights reserved. Africa Inspired!
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
