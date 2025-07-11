
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MessageCircle } from "lucide-react";

export const ContactInfo = () => {
  return (
    <Card className="card-african">
      <CardHeader>
        <CardTitle className="text-2xl text-african-sky">Direct Contact</CardTitle>
        <CardDescription>
          Reach out to us directly through these channels
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-african-gradient rounded-lg flex items-center justify-center">
            <Mail className="w-6 h-6 text-white" />
          </div>
          <div>
            <h4 className="font-semibold text-african-sky">Email</h4>
            <a 
              href="mailto:tuancreations.africa@gmail.com"
              className="text-gray-600 hover:text-african-gold transition-colors"
            >
              tuancreations.africa@gmail.com
            </a>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-african-gradient rounded-lg flex items-center justify-center">
            <Phone className="w-6 h-6 text-white" />
          </div>
          <div>
            <h4 className="font-semibold text-african-sky">Phone</h4>
            <a 
              href="tel:+256753414058"
              className="text-gray-600 hover:text-african-gold transition-colors"
            >
              +256 753 414 058
            </a>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-african-gradient rounded-lg flex items-center justify-center">
            <MessageCircle className="w-6 h-6 text-white" />
          </div>
          <div>
            <h4 className="font-semibold text-african-sky">WhatsApp</h4>
            <a 
              href="https://wa.me/256753414058?text=Hello%20TUAN%20Creations!%20I'm%20interested%20in%20learning%20more%20about%20your%20Pan-African%20ICT%20innovation%20suite."
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-african-gold transition-colors"
            >
              Message us on WhatsApp
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
