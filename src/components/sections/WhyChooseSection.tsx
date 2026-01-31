import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { Users, Zap, Eye, Award, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const trustFactors = [
  {
    icon: Users,
    title: "Expert Advisors",
    description: "Our certified insurance experts provide personalized guidance to help you choose the right coverage for your needs.",
  },
  {
    icon: Zap,
    title: "Fast Service",
    description: "Get quotes in minutes, policies in hours, and claims settled quickly. We value your time as much as you do.",
  },
  {
    icon: Eye,
    title: "Transparent Process",
    description: "No hidden fees, no surprises. We believe in complete transparency in pricing, coverage, and claims.",
  },
  {
    icon: Award,
    title: "Customer First",
    description: "Your satisfaction is our priority. We go above and beyond to ensure you're protected and happy.",
  },
];

export function WhyChooseSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate left content
      if (leftContentRef.current) {
        gsap.from(leftContentRef.current.children, {
          opacity: 0,
          x: -50,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: leftContentRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // Animate cards with stagger
      if (cardsRef.current) {
        gsap.from(cardsRef.current.children, {
          opacity: 0,
          y: 60,
          scale: 0.9,
          duration: 0.6,
          stagger: 0.15,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: cardsRef.current,
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
          <div ref={leftContentRef}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Award className="w-4 h-4" />
              <span className="text-sm font-medium">Why Choose Us</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why Customers Trust Policy Pioneer
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              For over 15 years, we've been helping families protect what matters most. 
              Here's why over a million customers choose Policy Pioneer for their insurance needs.
            </p>

            <Button
              variant="default"
              size="lg"
              asChild
              className="group hover:scale-105 transition-transform"
            >
              <Link to="/why-choose-us" className="gap-2">
                Learn More About Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          <div ref={cardsRef} className="grid sm:grid-cols-2 gap-6">
            {trustFactors.map((factor) => (
              <AnimatedCard key={factor.title} className="p-6">
                <div className="icon-container-primary mb-4 group-hover:scale-110 transition-transform">
                  <factor.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{factor.title}</h3>
                <p className="text-sm text-muted-foreground">{factor.description}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
