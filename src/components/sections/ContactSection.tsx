import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MessageCircle, ArrowRight, Send } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const [formState, setFormState] = useState({ name: "", phone: "", type: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Content from left
      if (contentRef.current) {
        gsap.from(contentRef.current, {
          opacity: 0,
          x: -60,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });

        // Stagger contact cards
        const cards = contentRef.current.querySelectorAll(".contact-card");
        gsap.from(cards, {
          opacity: 0,
          y: 30,
          duration: 0.5,
          stagger: 0.15,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // Form from right
      if (formRef.current) {
        gsap.from(formRef.current, {
          opacity: 0,
          x: 60,
          rotationY: 10,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Success animation
    if (formRef.current) {
      gsap.to(formRef.current, {
        scale: 1.02,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: "power2.out",
      });
    }
    
    setIsSubmitting(false);
    setFormState({ name: "", phone: "", type: "" });
  };

  return (
    <section ref={sectionRef} className="section-padding bg-gradient-to-br from-primary to-accent text-primary-foreground overflow-hidden">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div ref={contentRef}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Protected?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Get a free, no-obligation quote in minutes. Our insurance experts 
              are standing by to help you find the perfect coverage.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <a
                href="tel:1800-123-4567"
                className="contact-card flex items-center gap-4 bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4 hover:bg-primary-foreground/20 hover:scale-105 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/70">Call Us</p>
                  <p className="font-semibold">1800-123-4567</p>
                </div>
              </a>

              <a
                href="mailto:support@policypioneer.com"
                className="contact-card flex items-center gap-4 bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4 hover:bg-primary-foreground/20 hover:scale-105 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/70">Email Us</p>
                  <p className="font-semibold">support@policypioneer.com</p>
                </div>
              </a>
            </div>

            <a
              href="https://wa.me/911234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary-foreground hover:opacity-80 transition-opacity group"
            >
              <MessageCircle className="w-5 h-5 group-hover:animate-bounce" />
              <span className="underline">Chat with us on WhatsApp</span>
            </a>
          </div>

          {/* Quick Quote Form */}
          <div ref={formRef} className="bg-card text-foreground rounded-2xl p-8 shadow-float">
            <h3 className="text-xl font-bold mb-6">Get a Free Quote</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="group">
                <label className="block text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  value={formState.name}
                  onChange={(e) => setFormState(s => ({ ...s, name: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary focus:border-primary transition-all group-hover:border-primary/50"
                  placeholder="Enter your name"
                  required
                />
              </div>
              
              <div className="group">
                <label className="block text-sm font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  value={formState.phone}
                  onChange={(e) => setFormState(s => ({ ...s, phone: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary focus:border-primary transition-all group-hover:border-primary/50"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              
              <div className="group">
                <label className="block text-sm font-medium mb-2">Insurance Type</label>
                <select
                  value={formState.type}
                  onChange={(e) => setFormState(s => ({ ...s, type: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary focus:border-primary transition-all group-hover:border-primary/50"
                  required
                >
                  <option value="">Select insurance type</option>
                  <option value="car">Car Insurance</option>
                  <option value="bike">Bike Insurance</option>
                </select>
              </div>

              <Button
                type="submit"
                variant="quote"
                className="w-full group"
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Submitting...
                  </span>
                ) : (
                  <>
                    Get Free Quote
                    <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>

            <p className="text-xs text-muted-foreground mt-4 text-center">
              By submitting, you agree to our Terms & Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
