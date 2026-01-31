import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { Bike, Shield, UserCheck, Percent, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const bikeFeatures = [
  {
    icon: Shield,
    title: "Third-Party Cover",
    description: "Legal protection against third-party liabilities",
  },
  {
    icon: Bike,
    title: "Comprehensive Plan",
    description: "Complete coverage for your two-wheeler",
  },
  {
    icon: UserCheck,
    title: "Personal Accident",
    description: "Coverage for rider injuries up to ₹15 Lakhs",
  },
  {
    icon: Percent,
    title: "No Claim Bonus",
    description: "Earn discounts for claim-free years",
  },
];

export function BikeInsuranceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Visual from left
      if (visualRef.current) {
        gsap.from(visualRef.current, {
          opacity: 0,
          x: -60,
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

      // Content from right
      if (contentRef.current) {
        gsap.from(contentRef.current, {
          opacity: 0,
          x: 60,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // Features stagger
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-muted overflow-hidden">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Visual - Left side on desktop */}
          <div ref={visualRef} className="relative order-2 lg:order-1">
            <div className="bg-gradient-to-br from-secondary/10 to-accent/10 rounded-3xl p-8 lg:p-12">
              <AnimatedCard className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold">Bike Insurance</h3>
                  <span className="trust-badge-green">Best Value</span>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors cursor-pointer">
                    <span className="text-muted-foreground">Third-Party Only</span>
                    <span className="font-bold text-foreground">₹714/year</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-secondary/5 rounded-lg border-2 border-secondary hover:bg-secondary/10 transition-colors cursor-pointer">
                    <div>
                      <span className="text-foreground font-medium">Comprehensive</span>
                      <span className="ml-2 text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded animate-pulse">Recommended</span>
                    </div>
                    <span className="font-bold text-foreground">₹2,499/year</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors cursor-pointer">
                    <span className="text-muted-foreground">Premium + Add-ons</span>
                    <span className="font-bold text-foreground">₹3,999/year</span>
                  </div>
                </div>

                <Button variant="success" className="w-full group" size="lg" asChild>
                  <Link to="/contact">
                    Get Bike Insurance Quote
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </AnimatedCard>
            </div>
          </div>

          {/* Content - Right side on desktop */}
          <div ref={contentRef} className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary mb-6">
              <Bike className="w-4 h-4" />
              <span className="text-sm font-medium">Bike Insurance</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Two-Wheeler Insurance That Keeps You Moving
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Whether you're a daily commuter or weekend rider, our bike insurance 
              plans provide comprehensive protection at affordable prices. 
              Get covered and ride worry-free.
            </p>

            <div ref={featuresRef} className="grid sm:grid-cols-2 gap-6 mb-8">
              {bikeFeatures.map((feature) => (
                <div key={feature.title} className="flex gap-4 group cursor-default">
                  <div className="icon-container-secondary shrink-0 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="secondary" size="lg" asChild className="group hover:scale-105 transition-transform">
              <Link to="/bike-insurance" className="gap-2">
                View Bike Insurance Plans
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
