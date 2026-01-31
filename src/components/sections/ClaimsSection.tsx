import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { FileText, Clock, CheckCircle, Headphones, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const claimSteps = [
  {
    step: "01",
    icon: FileText,
    title: "Report Claim",
    description: "File your claim online or via our 24/7 helpline",
  },
  {
    step: "02",
    icon: Clock,
    title: "Quick Assessment",
    description: "Our team assesses your claim within 24 hours",
  },
  {
    step: "03",
    icon: CheckCircle,
    title: "Approval",
    description: "Get instant approval for genuine claims",
  },
  {
    step: "04",
    icon: Headphones,
    title: "Settlement",
    description: "Receive settlement directly in your account",
  },
];

export function ClaimsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      if (headerRef.current) {
        gsap.from(headerRef.current.children, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // Steps animation with connector line drawing
      if (stepsRef.current) {
        const steps = stepsRef.current.children;
        gsap.from(steps, {
          opacity: 0,
          y: 50,
          scale: 0.9,
          duration: 0.6,
          stagger: 0.2,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: stepsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });

        // Animate connector lines
        const lines = stepsRef.current.querySelectorAll(".connector-line");
        gsap.from(lines, {
          scaleX: 0,
          duration: 0.5,
          stagger: 0.2,
          delay: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: stepsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // Stats animation
      if (statsRef.current) {
        gsap.from(statsRef.current, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });

        // Counter animation for stats
        const statValues = statsRef.current.querySelectorAll(".stat-value");
        statValues.forEach((el) => {
          const endValue = parseInt(el.getAttribute("data-value") || "0");
          const suffix = el.getAttribute("data-suffix") || "";
          const counter = { value: 0 };

          gsap.to(counter, {
            value: endValue,
            duration: 2,
            delay: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
            onUpdate: () => {
              el.textContent = Math.round(counter.value) + suffix;
            },
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-muted overflow-hidden">
      <div className="container-wide">
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Headphones className="w-4 h-4" />
            <span className="text-sm font-medium">Claims Support</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Hassle-Free Claims Assistance
          </h2>
          
          <p className="text-lg text-muted-foreground">
            We're with you when you need us most. Our streamlined claims process 
            ensures quick settlements with minimal paperwork and 24/7 support.
          </p>
        </div>

        {/* Claims Process Steps */}
        <div ref={stepsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {claimSteps.map((item, index) => (
            <div key={item.step} className="relative">
              {/* Connector Line */}
              {index < claimSteps.length - 1 && (
                <div className="connector-line hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-primary/30 origin-left" />
              )}
              
              <AnimatedCard className="p-6 text-center relative z-10">
                <div className="text-4xl font-bold text-primary/20 mb-4">{item.step}</div>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </AnimatedCard>
            </div>
          ))}
        </div>

        {/* Stats and CTA */}
        <div ref={statsRef} className="bg-card rounded-2xl p-8 shadow-soft">
          <div className="grid md:grid-cols-4 gap-8 items-center">
            <div className="text-center">
              <p className="stat-value text-4xl font-bold text-primary" data-value="98" data-suffix="%">0</p>
              <p className="text-sm text-muted-foreground">Claims Settled</p>
            </div>
            <div className="text-center">
              <p className="stat-value text-4xl font-bold text-primary" data-value="24" data-suffix=" hrs">0</p>
              <p className="text-sm text-muted-foreground">Avg. Response Time</p>
            </div>
            <div className="text-center">
              <p className="stat-value text-4xl font-bold text-primary" data-value="5000" data-suffix="+">0</p>
              <p className="text-sm text-muted-foreground">Network Garages</p>
            </div>
            <div className="text-center">
              <Button variant="default" size="lg" asChild className="group hover:scale-105 transition-transform">
                <Link to="/claims" className="gap-2">
                  Know the Claim Process
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
