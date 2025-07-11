
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const RegistrationForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email body
    const emailBody = `
New Registration from TUAN Creations Website

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company/Organization: ${formData.company}
Interest as: ${formData.role}

Message:
${formData.message}
    `;

    // Create mailto link
    const mailtoLink = `mailto:tuancreations.africa@gmail.com?subject=New Registration - ${formData.role}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    toast({
      title: "Registration Initiated",
      description: "Your email client should open. Please send the email to complete your registration.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      role: "",
      message: ""
    });
  };

  return (
    <section id="register" className="py-24 bg-gradient-to-br from-african-sky/5 via-transparent to-african-emerald/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-african-sky mb-6">
            Join the <span className="text-gradient-african">TUAN Movement</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Be part of Africa's digital transformation. Register as an investor, co-founder, 
            client, or partner to build the future of African technology together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Registration Form */}
          <Card className="card-african">
            <CardHeader>
              <CardTitle className="text-2xl text-african-sky">Register Your Interest</CardTitle>
              <CardDescription>
                Fill out the form below and we'll connect with you directly.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+256 XXX XXX XXX"
                    />
                  </div>
                  <div>
                    <Label htmlFor="company">Company/Organization</Label>
                    <Input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      placeholder="Your company or organization"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="role">I'm interested as a *</Label>
                  <Select value={formData.role} onValueChange={(value) => setFormData({...formData, role: value})}>
                    <SelectTrigger data-role="co-founder-trigger">
                      <SelectValue placeholder="Select your interest" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="co-founder">Co-Founder</SelectItem>
                      <SelectItem value="investor">Investor</SelectItem>
                      <SelectItem value="client">Client</SelectItem>
                      <SelectItem value="partner">Strategic Partner</SelectItem>
                      <SelectItem value="talent">Talent/Developer</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Tell us about your interest</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Describe your interest in TUAN Creations, your background, and how you'd like to contribute or collaborate..."
                    rows={4}
                  />
                </div>

                <Button type="submit" className="btn-african w-full" size="lg">
                  Submit Registration
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
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

            <Card className="card-african">
              <CardHeader>
                <CardTitle className="text-xl text-african-sky">Why Join TUAN?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-african-gold rounded-full mt-2 flex-shrink-0"></span>
                    <span>Be part of Africa's first fully integrated ICT innovation suite</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-african-gold rounded-full mt-2 flex-shrink-0"></span>
                    <span>Access to cutting-edge technology and innovation opportunities</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-african-gold rounded-full mt-2 flex-shrink-0"></span>
                    <span>Network with like-minded innovators across Africa</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-african-gold rounded-full mt-2 flex-shrink-0"></span>
                    <span>Contribute to building Africa's technological sovereignty</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
