import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import { Shield, Phone, CheckCircle, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-insurance.jpg";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  /* ================= GSAP ANIMATIONS (UNCHANGED) ================= */
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { scale: 1.2 },
          { scale: 1, duration: 1.5, ease: "power2.out" }
        );
      }

      tl.fromTo(badgeRef.current, { opacity: 0, y: 30, scale: 0.9 }, { opacity: 1, y: 0, scale: 1, duration: 0.6 })
        .fromTo(headlineRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.3")
        .fromTo(subheadRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
        .fromTo(
          benefitsRef.current?.children || [],
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, duration: 0.5, stagger: 0.1 },
          "-=0.3"
        )
        .fromTo(
          ctaRef.current?.children || [],
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.15 },
          "-=0.2"
        )
        .fromTo(
          statsRef.current?.querySelectorAll(".stat-item") || [],
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.15 },
          "-=0.3"
        );

      statsRef.current?.querySelectorAll(".stat-item").forEach((item) => {
        const valueEl = item.querySelector(".stat-value") as HTMLElement | null;
        if (!valueEl) return;

        const endValue = Number(valueEl.dataset.value);
        const suffix = valueEl.dataset.suffix || "";
        const counter = { value: 0 };

        gsap.to(counter, {
          value: endValue,
          duration: 2,
          delay: 0.8,
          ease: "power2.out",
          onUpdate: () => {
            valueEl.textContent = Math.round(counter.value) + suffix;
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /* ================= PARALLAX (UNCHANGED) ================= */
  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    if (!section || !content) return;

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;

      gsap.to(content, { x: x * 10, y: y * 5, duration: 0.5, ease: "power2.out" });
      if (imageRef.current) {
        gsap.to(imageRef.current, { x: x * -20, y: y * -10, duration: 0.5, ease: "power2.out" });
      }
    };

    section.addEventListener("mousemove", handleMouseMove);
    return () => section.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-[90vh] flex items-center overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img ref={imageRef} src={heroImage} alt="Insurance hero" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
      </div>

      {/* Glow */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/25 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="container-wide relative z-10 py-20">
        <div ref={contentRef} className="max-w-2xl text-background">

          {/* Badge */}
          <div
            ref={badgeRef}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                       bg-primary/25 text-background backdrop-blur-sm mb-8"
          >
            <Shield className="w-4 h-4" />
            <span className="text-sm font-medium">Trusted by 1 Million+ Customers</span>
          </div>

          {/* Heading */}
          <h1 ref={headlineRef} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Your Trusted Partner for{" "}
            <span className="text-primary relative">
              Car & Bike
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12">
                <path
                  d="M2 10C50 2 150 2 198 10"
                  stroke="hsl(var(--primary))"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="animate-draw"
                />
              </svg>
            </span>{" "}
            Insurance
          </h1>

          {/* Subhead */}
          <p ref={subheadRef} className="text-lg md:text-xl text-background/80 mb-8 max-w-xl">
            Comprehensive protection with instant quotes, hassle-free claims, and 24/7 support.
          </p>

          {/* Benefits */}
          <div ref={benefitsRef} className="flex flex-wrap gap-4 mb-10">
            {["Zero Paperwork", "Instant Policy", "24/7 Support", "Best Prices"].map((b) => (
              <div key={b} className="flex items-center gap-2 text-background/90">
                <CheckCircle className="w-5 h-5 text-secondary" />
                <span className="text-sm font-medium">{b}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="quote" size="xl" asChild>
              <Link to="/contact" className="gap-2">
                Get a Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <Link to="/contact" className="gap-2">
                <Phone className="w-5 h-5" />
                Talk to an Advisor
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div ref={statsRef} className="flex items-center gap-8 text-background/70">
            {[
              { v: 15, s: "+", l: "Years Experience" },
              { v: 1, s: "M+", l: "Happy Customers" },
              { v: 98, s: "%", l: "Claims Settled" },
            ].map((stat, i) => (
              <div key={i} className="stat-item text-center">
                <p className="stat-value text-3xl font-bold text-background" data-value={stat.v} data-suffix={stat.s}>
                  0
                </p>
                <p className="text-sm">{stat.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-background/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-background/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
