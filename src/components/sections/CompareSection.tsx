import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Scale, TrendingDown, Check, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const comparisonPoints = [
  "Compare 15+ insurance providers in seconds",
  "Transparent pricing with no hidden charges",
  "Side-by-side coverage comparison",
  "Expert recommendations based on your needs",
  "Guaranteed best price or we match it",
];

export function CompareSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const tableRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

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

      // Table animation
      if (tableRef.current) {
        gsap.from(tableRef.current, {
          opacity: 0,
          x: -50,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: tableRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });

        // Animate table rows
        const rows = tableRef.current.querySelectorAll(".comparison-row");
        gsap.from(rows, {
          opacity: 0,
          x: -30,
          duration: 0.5,
          stagger: 0.1,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: tableRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // List animation
      if (listRef.current) {
        gsap.from(listRef.current, {
          opacity: 0,
          x: 50,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: listRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });

        const items = listRef.current.querySelectorAll("li");
        gsap.from(items, {
          opacity: 0,
          x: 30,
          duration: 0.5,
          stagger: 0.1,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: listRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const tableRows = [
    { name: "Provider A", premium: "₹8,499", coverage: "₹10L", rating: "4.5★" },
    { name: "Provider B", premium: "₹9,299", coverage: "₹10L", rating: "4.3★" },
    { name: "Provider C", premium: "₹7,899", coverage: "₹8L", rating: "4.2★" },
    { name: "Best Match", premium: "₹6,999", coverage: "₹12L", rating: "4.8★", highlight: true },
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-background overflow-hidden">
      <div className="container-wide">
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6">
            <Scale className="w-4 h-4" />
            <span className="text-sm font-medium">Smart Comparison</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Compare & Get the Best Insurance Price
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Don't overpay for insurance. Our smart comparison tool helps you find 
            the perfect policy at the best price, all in under 2 minutes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Comparison Visual */}
          <div ref={tableRef} className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-3xl p-8">
            <div className="bg-card rounded-2xl shadow-elevated overflow-hidden">
              {/* Header */}
              <div className="bg-primary p-4 text-primary-foreground">
                <div className="grid grid-cols-4 gap-4 text-center text-sm font-medium">
                  <div>Insurer</div>
                  <div>Premium</div>
                  <div>Coverage</div>
                  <div>Rating</div>
                </div>
              </div>
              
              {/* Rows */}
              <div className="divide-y divide-border">
                {tableRows.map((row, index) => (
                  <div
                    key={index}
                    className={`comparison-row grid grid-cols-4 gap-4 p-4 text-center text-sm transition-colors hover:bg-muted/50 cursor-pointer ${
                      row.highlight ? "bg-secondary/10 border-l-4 border-secondary" : ""
                    }`}
                  >
                    <div className={`font-medium ${row.highlight ? "text-secondary" : "text-foreground"}`}>
                      {row.name}
                    </div>
                    <div className={row.highlight ? "text-secondary font-bold" : "text-muted-foreground"}>
                      {row.premium}
                    </div>
                    <div className={row.highlight ? "text-secondary" : "text-muted-foreground"}>
                      {row.coverage}
                    </div>
                    <div className={row.highlight ? "text-secondary" : "text-muted-foreground"}>
                      {row.rating}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center justify-center gap-2 text-secondary">
              <TrendingDown className="w-5 h-5 animate-bounce" />
              <span className="font-medium">Average savings: ₹2,500/year</span>
            </div>
          </div>

          {/* Benefits List */}
          <div ref={listRef}>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Why Compare with Policy Pioneer?
            </h3>
            
            <ul className="space-y-4 mb-8">
              {comparisonPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3 group">
                  <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 group-hover:bg-secondary/20 transition-all">
                    <Check className="w-4 h-4 text-secondary" />
                  </div>
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">{point}</span>
                </li>
              ))}
            </ul>

            <Button variant="default" size="lg" asChild className="group hover:scale-105 transition-transform">
              <Link to="/compare" className="gap-2">
                Compare Insurance Policies
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
