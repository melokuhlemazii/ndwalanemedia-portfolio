import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { Facebook, Instagram } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Please complete the form",
        description: "All fields are required.",
        variant: "destructive"
      });
      return;
    }

    // Create mailto link
    const subject = encodeURIComponent(`Website inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    
    window.location.href = `mailto:Ndwalanemedia@gmail.com?subject=${subject}&body=${body}`;
    
    toast({
      title: "Email client opened",
      description: "Your message is ready to send!"
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mx-auto">
          <div className="glass-card space-y-6">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-semibold">Contact</h3>
              <p className="text-muted-foreground">
                Interested in booking or commissioning work? Send a message below or email{" "}
                <a 
                  href="mailto:Ndwalanemedia@gmail.com" 
                  className="text-accent hover:underline"
                >
                  Ndwalanemedia@gmail.com
                </a>
                .
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                className="form-input w-full"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                className="form-input w-full"
                required
              />
              <textarea
                name="message"
                placeholder="Tell me about your project"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="form-input w-full resize-none"
                required
              />
              <Button type="submit" className="w-full btn-hero btn-primary">
                Send message
              </Button>
            </form>

            <div className="text-center space-y-4 pt-6 border-t border-border">
              <div className="text-sm text-muted-foreground">
                Follow us on social media
              </div>
              <div className="flex justify-center gap-4">
                <a href="#" className="social-icon" aria-label="Facebook">
                  <Facebook size={18} />
                </a>
                <a href="#" className="social-icon" aria-label="Instagram">
                  <Instagram size={18} />
                </a>
                <a href="#" className="social-icon" aria-label="TikTok">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;