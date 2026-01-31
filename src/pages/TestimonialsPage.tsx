import { Layout } from "@/components/layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Star, Quote, ArrowRight, Car, Bike, CheckCircle } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Business Owner",
    location: "Mumbai",
    rating: 5,
    text: "Policy Pioneer made getting car insurance so easy! The comparison tool saved me ₹4,000 on my premium. The policy was issued within 2 hours of payment. Highly impressed with the service!",
    insuranceType: "Car Insurance",
    icon: Car,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Sharma",
    role: "IT Professional",
    location: "Bangalore",
    text: "When my bike was stolen, I was devastated. But the claims team at Policy Pioneer was incredibly supportive. They guided me through every step and I got my settlement within a week. Can't thank them enough!",
    rating: 5,
    insuranceType: "Bike Insurance",
    icon: Bike,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Amit Patel",
    role: "Doctor",
    location: "Ahmedabad",
    rating: 5,
    text: "The zero depreciation cover saved me almost ₹80,000 during an accident claim. The advisor recommended this add-on which I was initially skeptical about. Best decision ever!",
    insuranceType: "Car Insurance",
    icon: Car,
    image: "https://randomuser.me/api/portraits/men/67.jpg",
  },
  {
    name: "Sneha Reddy",
    role: "Marketing Manager",
    location: "Hyderabad",
    rating: 5,
    text: "Renewed my bike insurance through Policy Pioneer for the third year now. The NCB transfer was seamless, and I saved 45% on my premium. The app makes everything so convenient!",
    insuranceType: "Bike Insurance",
    icon: Bike,
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Vikram Singh",
    role: "Entrepreneur",
    location: "Delhi",
    rating: 5,
    text: "I have insurance for 3 cars and 2 bikes with Policy Pioneer. Their relationship manager handles everything from renewals to claims. It's like having a personal insurance advisor!",
    insuranceType: "Car & Bike Insurance",
    icon: Car,
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Meera Iyer",
    role: "Teacher",
    location: "Chennai",
    rating: 5,
    text: "As someone who doesn't understand insurance jargon, I really appreciated how the advisor explained everything in simple terms. No pressure, no complicated language. Just honest advice.",
    insuranceType: "Car Insurance",
    icon: Car,
    image: "https://randomuser.me/api/portraits/women/33.jpg",
  },
];

const caseStudies = [
  {
    title: "Major Accident Claim Settled in 10 Days",
    description: "Mr. Sharma's car met with a major accident on the highway. Despite extensive damage worth ₹3.5 lakhs, our claims team ensured complete settlement within 10 days through our network garage.",
    outcome: "₹3.5 Lakh claim settled",
    type: "Comprehensive Car Insurance",
  },
  {
    title: "Theft Claim Processed Smoothly",
    description: "When Ms. Gupta's scooter was stolen from a parking lot, she was worried about the lengthy claims process. Our team helped her file the FIR, submit documents, and receive settlement in 2 weeks.",
    outcome: "Full IDV received",
    type: "Comprehensive Bike Insurance",
  },
  {
    title: "Flood Damage Coverage",
    description: "During the 2023 floods, Mr. Rao's car was completely submerged. Thanks to his comprehensive cover with engine protection add-on, he received the complete repair cost without any hassles.",
    outcome: "100% repair cost covered",
    type: "Comprehensive + Engine Protection",
  },
];

export default function TestimonialsPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient text-primary-foreground py-20">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm mb-6">
              <Star className="w-4 h-4" />
              <span className="text-sm font-medium">Customer Stories</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              What Our Customers Say
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Real stories from real customers who trust Policy Pioneer 
              for their insurance needs.
            </p>
            
            <div className="flex items-center justify-center gap-4">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-primary-foreground text-primary-foreground" />
                ))}
              </div>
              <span className="text-lg font-semibold">4.8/5 from 50,000+ reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-muted">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "1M+", label: "Happy Customers" },
              { value: "96%", label: "Would Recommend" },
              { value: "50K+", label: "5-Star Reviews" },
              { value: "15+", label: "Years of Trust" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Customer Testimonials</h2>
            <p className="text-muted-foreground">
              Hear directly from our customers about their experience with Policy Pioneer.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 shadow-soft card-hover relative"
              >
                <Quote className="w-10 h-10 text-primary/10 absolute top-6 right-6" />
                
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-4">{testimonial.text}</p>

                <div className="flex items-center gap-2 pt-4 border-t border-border">
                  <testimonial.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm text-primary font-medium">{testimonial.insuranceType}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Success Stories</h2>
            <p className="text-muted-foreground">
              Real claim cases that showcase our commitment to our customers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 shadow-soft">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{study.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{study.description}</p>
                
                <div className="pt-4 border-t border-border">
                  <p className="text-secondary font-semibold mb-1">{study.outcome}</p>
                  <p className="text-xs text-muted-foreground">{study.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Placeholder */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 md:p-12">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-4">Share Your Story</h2>
              <p className="text-muted-foreground mb-8">
                Had a great experience with Policy Pioneer? We'd love to hear from you! 
                Share your story and help others make informed decisions.
              </p>
              <Button variant="default" size="lg" asChild>
                <Link to="/contact" className="gap-2">
                  Submit Your Review
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-wide text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Happy Customers</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Experience the Policy Pioneer difference for yourself.
          </p>
          <Button variant="hero-outline" size="lg" asChild>
            <Link to="/contact" className="gap-2">
              Get Your Free Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
