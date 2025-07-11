
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertCircle, FileText, Award } from "lucide-react";
import { FileUpload } from "./FileUpload";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  role: string;
  message: string;
}

interface Files {
  cv: File[];
  certifications: File[];
  portfolio: File[];
}

interface FormFieldsProps {
  formData: FormData;
  setFormData: (data: FormData) => void;
  files: Files;
  setFiles: (files: Files) => void;
}

export const FormFields = ({ formData, setFormData, files, setFiles }: FormFieldsProps) => {
  const requiresCV = ['co-founder', 'talent'].includes(formData.role);

  return (
    <>
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

      {/* File Upload Sections */}
      {formData.role && (
        <div className="space-y-6 border-t pt-6">
          <h3 className="text-lg font-semibold text-african-sky">Professional Documents</h3>
          
          {requiresCV && (
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-800">
                  CV/Resume is required for {formData.role} applications
                </span>
              </div>
            </div>
          )}

          <FileUpload
            id="cv-upload"
            label="CV/Resume"
            accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            required={requiresCV}
            files={files.cv}
            onFilesChange={(newFiles) => setFiles({...files, cv: newFiles})}
            maxSize={5}
            icon={<FileText className="w-4 h-4" />}
          />

          <FileUpload
            id="certifications-upload"
            label="Certifications & Credentials"
            accept=".pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png"
            multiple
            files={files.certifications}
            onFilesChange={(newFiles) => setFiles({...files, certifications: newFiles})}
            maxSize={5}
            icon={<Award className="w-4 h-4" />}
          />

          <FileUpload
            id="portfolio-upload"
            label="Portfolio/Work Samples"
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,image/jpeg,image/png"
            multiple
            files={files.portfolio}
            onFilesChange={(newFiles) => setFiles({...files, portfolio: newFiles})}
            maxSize={10}
            icon={<FileText className="w-4 h-4" />}
          />
        </div>
      )}

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
    </>
  );
};
