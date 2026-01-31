import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { Star, Quote, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Business Owner",
    rating: 5,
    text: "Policy Pioneer made getting car insurance so easy! The comparison tool saved me ₹4,000 and the policy was issued within hours.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Sharma",
    role: "IT Professional",
    text: "When my bike was stolen, the claims team was incredibly supportive. Got my settlement within a week. Highly recommend!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Amit Patel",
    role: "Doctor",
    rating: 5,
    text: "The zero depreciation cover saved me lakhs during an accident claim. Best investment I made for my car insurance.",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
  },
];

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate header
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

      // Animate cards
      if (cardsRef.current) {
        gsap.from(cardsRef.current.children, {
          opacity: 0,
          y: 60,
          rotationY: 15,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
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
    <section ref={sectionRef} className="section-padding bg-muted overflow-hidden">
      <div className="container-wide">
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Star className="w-4 h-4" />
            <span className="text-sm font-medium">Customer Stories</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            What Our Customers Say
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it. Here's what our happy customers 
            have to say about their experience with Policy Pioneer.
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <AnimatedCard key={index} className="p-6 relative">
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
              
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                />
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-primary text-primary transition-transform hover:scale-125"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  />
                ))}
              </div>

              <p className="text-muted-foreground">{testimonial.text}</p>
            </AnimatedCard>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            asChild
            className="group hover:scale-105 transition-transform"
          >
            <Link to="/testimonials" className="gap-2">
              Read All Reviews
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
