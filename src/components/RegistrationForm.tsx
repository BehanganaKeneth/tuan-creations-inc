
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { FormFields } from "./FormFields";
import { ContactInfo } from "./ContactInfo";
import { BenefitsCard } from "./BenefitsCard";

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

  const [files, setFiles] = useState({
    cv: [] as File[],
    certifications: [] as File[],
    portfolio: [] as File[]
  });

  const requiresCV = ['co-founder', 'talent'].includes(formData.role);

  // Check for co-founder hash and set role
  useEffect(() => {
    if (window.location.hash === '#register' && window.location.search.includes('role=co-founder')) {
      setFormData(prev => ({ ...prev, role: 'co-founder' }));
      
      // Open the role selector to show it's been pre-selected
      setTimeout(() => {
        const trigger = document.querySelector('[data-role="co-founder-trigger"]') as HTMLElement;
        if (trigger) {
          trigger.click();
          setTimeout(() => trigger.click(), 100); // Close it after showing
        }
      }, 500);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate CV requirement
    if (requiresCV && files.cv.length === 0) {
      toast({
        title: "CV Required",
        description: "Please upload your CV/Resume for this role.",
        variant: "destructive"
      });
      return;
    }

    // Create file list for email body
    const fileList = [];
    if (files.cv.length > 0) {
      fileList.push(`CV/Resume: ${files.cv.map(f => f.name).join(', ')}`);
    }
    if (files.certifications.length > 0) {
      fileList.push(`Certifications: ${files.certifications.map(f => f.name).join(', ')}`);
    }
    if (files.portfolio.length > 0) {
      fileList.push(`Portfolio/Work Samples: ${files.portfolio.map(f => f.name).join(', ')}`);
    }

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

${fileList.length > 0 ? `
FILES TO ATTACH:
${fileList.join('\n')}

IMPORTANT: Please manually attach the above files to this email before sending.
` : ''}
    `;

    // Create mailto link
    const mailtoLink = `mailto:tuancreations.africa@gmail.com?subject=New Registration - ${formData.role}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    const hasFiles = files.cv.length > 0 || files.certifications.length > 0 || files.portfolio.length > 0;
    
    toast({
      title: "Registration Initiated",
      description: hasFiles 
        ? "Your email client should open. Please manually attach your files before sending the email."
        : "Your email client should open. Please send the email to complete your registration.",
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
    setFiles({
      cv: [],
      certifications: [],
      portfolio: []
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
                <FormFields 
                  formData={formData}
                  setFormData={setFormData}
                  files={files}
                  setFiles={setFiles}
                />

                <Button type="submit" className="btn-african w-full" size="lg">
                  Submit Registration
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <ContactInfo />
            <BenefitsCard />
          </div>
        </div>
      </div>
    </section>
  );
};
