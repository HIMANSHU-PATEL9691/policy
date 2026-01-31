import { useState } from "react";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { 
  Phone, Mail, MapPin, Clock, MessageCircle, 
  Send, ArrowRight, CheckCircle 
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    insuranceType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Quote Request Submitted!",
      description: "Our advisor will contact you within 30 minutes.",
    });
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      insuranceType: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient text-primary-foreground py-20">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm mb-6">
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm font-medium">Contact Us</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Have questions? Need a quote? Our insurance experts are here to help. 
              Reach out and we'll respond within 30 minutes.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-12 bg-muted">
        <div className="container-wide">
          <div className="grid md:grid-cols-4 gap-6">
            <a
              href="tel:1800-123-4567"
              className="bg-card rounded-xl p-6 shadow-soft text-center hover:shadow-elevated transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Call Us</h3>
              <p className="text-primary font-medium">1800-123-4567</p>
              <p className="text-xs text-muted-foreground">Toll Free, 24/7</p>
            </a>

            <a
              href="mailto:support@policypioneer.com"
              className="bg-card rounded-xl p-6 shadow-soft text-center hover:shadow-elevated transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Email Us</h3>
              <p className="text-primary font-medium text-sm">support@policypioneer.com</p>
              <p className="text-xs text-muted-foreground">Response within 4 hours</p>
            </a>

            <a
              href="https://wa.me/911234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card rounded-xl p-6 shadow-soft text-center hover:shadow-elevated transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">WhatsApp</h3>
              <p className="text-secondary font-medium">+91 12345 67890</p>
              <p className="text-xs text-muted-foreground">Quick chat support</p>
            </a>

            <div className="bg-card rounded-xl p-6 shadow-soft text-center">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Business Hours</h3>
              <p className="text-accent font-medium">24/7 Support</p>
              <p className="text-xs text-muted-foreground">Always available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <h2 className="text-2xl font-bold text-foreground mb-6">Get a Free Quote</h2>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Insurance Type *
                  </label>
                  <select
                    name="insuranceType"
                    value={formData.insuranceType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                  >
                    <option value="">Select insurance type</option>
                    <option value="car">Car Insurance</option>
                    <option value="bike">Bike Insurance</option>
                    <option value="both">Both Car & Bike</option>
                    <option value="renewal">Policy Renewal</option>
                    <option value="claims">Claims Support</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary focus:border-primary transition-all resize-none"
                    placeholder="Tell us about your insurance needs..."
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="quote" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      Get Free Quote
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting, you agree to our Terms of Service and Privacy Policy
                </p>
              </form>
            </div>

            {/* Info */}
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Why Contact Us?</h2>
                <ul className="space-y-3">
                  {[
                    "Get personalized insurance recommendations",
                    "Compare quotes from 15+ insurers",
                    "Expert guidance on policy selection",
                    "Assistance with claims and renewals",
                    "24/7 customer support",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Office Address */}
              <div className="bg-muted rounded-2xl p-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Head Office</h3>
                    <p className="text-muted-foreground">
                      Policy Pioneer Insurance Pvt. Ltd.<br />
                      123 Insurance Tower, 15th Floor<br />
                      Bandra Kurla Complex<br />
                      Mumbai, Maharashtra 400051
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-muted rounded-2xl h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                  <p className="text-muted-foreground">Map Integration</p>
                  <p className="text-sm text-muted-foreground">Click to view on Google Maps</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Need Immediate Assistance?</h2>
            <p className="text-primary-foreground/80">
              Our team is standing by to help you with any questions or concerns.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="tel:1800-123-4567"
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-primary-foreground/20 transition-colors"
            >
              <Phone className="w-10 h-10 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Quick Call</h3>
              <p className="text-primary-foreground/80 text-sm mb-4">
                Speak directly with an advisor
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-medium">
                Call Now <ArrowRight className="w-4 h-4" />
              </span>
            </a>

            <a
              href="https://wa.me/911234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-primary-foreground/20 transition-colors"
            >
              <MessageCircle className="w-10 h-10 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">WhatsApp Chat</h3>
              <p className="text-primary-foreground/80 text-sm mb-4">
                Quick responses on WhatsApp
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-medium">
                Start Chat <ArrowRight className="w-4 h-4" />
              </span>
            </a>

            <a
              href="mailto:urgent@policypioneer.com"
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-primary-foreground/20 transition-colors"
            >
              <Mail className="w-10 h-10 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Priority Email</h3>
              <p className="text-primary-foreground/80 text-sm mb-4">
                For urgent matters
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-medium">
                Email Now <ArrowRight className="w-4 h-4" />
              </span>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
