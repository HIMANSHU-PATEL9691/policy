import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { Car, Shield, FileCheck, Wrench, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const carFeatures = [
  {
    icon: Shield,
    title: "Third-Party Liability",
    description: "Mandatory coverage protecting against third-party claims",
  },
  {
    icon: Car,
    title: "Comprehensive Cover",
    description: "Full protection for your vehicle against all risks",
  },
  {
    icon: FileCheck,
    title: "Zero Depreciation",
    description: "Get full claim amount without depreciation deduction",
  },
  {
    icon: Wrench,
    title: "Roadside Assistance",
    description: "24/7 emergency support wherever you are",
  },
];

export function CarInsuranceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Content animation from left
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
      }

      // Features stagger animation
      if (featuresRef.current) {
        gsap.from(featuresRef.current.children, {
          opacity: 0,
          y: 30,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // Visual card animation from right
      if (visualRef.current) {
        gsap.from(visualRef.current, {
          opacity: 0,
          x: 60,
          scale: 0.95,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: visualRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-background overflow-hidden">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div ref={contentRef}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Car className="w-4 h-4" />
              <span className="text-sm font-medium">Car Insurance</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Comprehensive Car Insurance for Complete Peace of Mind
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Drive with confidence knowing your car is protected against accidents, 
              theft, natural disasters, and more. Our car insurance plans offer 
              extensive coverage at competitive premiums.
            </p>

            <div ref={featuresRef} className="grid sm:grid-cols-2 gap-6 mb-8">
              {carFeatures.map((feature) => (
                <div key={feature.title} className="flex gap-4 group cursor-default">
                  <div className="icon-container-primary shrink-0 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="default" size="lg" asChild className="group hover:scale-105 transition-transform">
              <Link to="/car-insurance" className="gap-2">
                View Car Insurance Plans
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Visual */}
          <div ref={visualRef} className="relative">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 lg:p-12">
              <AnimatedCard className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold">Quick Quote</h3>
                  <span className="trust-badge-blue">Save up to 75%</span>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors cursor-pointer">
                    <span className="text-muted-foreground">Third-Party</span>
                    <span className="font-bold text-foreground">₹2,094/year</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-primary/5 rounded-lg border-2 border-primary hover:bg-primary/10 transition-colors cursor-pointer">
                    <div>
                      <span className="text-foreground font-medium">Comprehensive</span>
                      <span className="ml-2 text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded animate-pulse">Popular</span>
                    </div>
                    <span className="font-bold text-foreground">₹8,499/year</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors cursor-pointer">
                    <span className="text-muted-foreground">Zero Dep + Comprehensive</span>
                    <span className="font-bold text-foreground">₹12,999/year</span>
                  </div>
                </div>

                <Button variant="quote" className="w-full group" size="lg" asChild>
                  <Link to="/contact">
                    Get Personalized Quote
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </AnimatedCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
