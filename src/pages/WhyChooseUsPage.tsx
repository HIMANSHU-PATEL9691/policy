import { Layout } from "@/components/layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Users, Zap, Eye, Award, Shield, Heart, 
  CheckCircle, ArrowRight, Phone, Star 
} from "lucide-react";

const whyChooseUs = [
  {
    icon: Users,
    title: "Expert Insurance Advisors",
    description: "Our team of IRDAI-certified insurance professionals brings decades of combined experience. They don't just sell policies—they understand your needs and recommend the best coverage for your unique situation.",
    stats: "500+ certified advisors",
  },
  {
    icon: Zap,
    title: "Lightning-Fast Service",
    description: "Time is precious. That's why we've optimized every step of the insurance journey. Get quotes in 2 minutes, policies in hours, and claims settled in days, not weeks.",
    stats: "2-minute quote process",
  },
  {
    icon: Eye,
    title: "Complete Transparency",
    description: "No hidden fees, no fine print surprises, no pushy sales tactics. We show you exactly what you're getting, what it costs, and what's covered. Your trust is our foundation.",
    stats: "100% transparent pricing",
  },
  {
    icon: Award,
    title: "Industry Recognition",
    description: "Our commitment to excellence has earned us recognition from leading industry bodies. We're consistently rated among the top insurance platforms for customer satisfaction.",
    stats: "4.8/5 customer rating",
  },
];

const commitments = [
  {
    title: "Best Price Guarantee",
    description: "Find a lower price for the same coverage elsewhere, and we'll match it. We partner with 15+ insurers to ensure you always get the best deal.",
  },
  {
    title: "Claims Advocacy",
    description: "When you file a claim, we become your advocate. Our dedicated claims team works with insurers on your behalf to ensure fair and speedy settlements.",
  },
  {
    title: "Lifetime Support",
    description: "Our relationship doesn't end when you buy a policy. We're here for renewals, upgrades, queries, and any insurance needs you have—for life.",
  },
  {
    title: "Data Security",
    description: "Your personal information is protected with bank-grade encryption. We never share your data without explicit consent and comply with all data protection regulations.",
  },
];

const serviceStandards = [
  { metric: "Quote Response", standard: "Under 2 minutes" },
  { metric: "Policy Issuance", standard: "Same day" },
  { metric: "Claim Acknowledgment", standard: "Within 4 hours" },
  { metric: "Claim Settlement", standard: "7-10 business days" },
  { metric: "Customer Support", standard: "24/7 availability" },
  { metric: "Advisor Callback", standard: "Within 30 minutes" },
];

export default function WhyChooseUsPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient text-primary-foreground py-20">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm mb-6">
              <Award className="w-4 h-4" />
              <span className="text-sm font-medium">Why Choose Us</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Why Customers Trust Policy Pioneer
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              We're not just an insurance platform. We're your partner in protection, 
              committed to making insurance simple, fair, and accessible for everyone.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["15+ Years Experience", "1M+ Happy Customers", "98% Claims Settled", "4.8★ Rating"].map((badge) => (
                <span key={badge} className="px-4 py-2 rounded-full bg-primary-foreground/10 text-sm font-medium">
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Reasons */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">What Sets Us Apart</h2>
            <p className="text-muted-foreground">
              These are the pillars that make Policy Pioneer different.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {whyChooseUs.map((reason) => (
              <div key={reason.title} className="bg-card rounded-2xl p-8 shadow-soft card-hover">
                <div className="flex items-start gap-4">
                  <div className="icon-container-primary shrink-0">
                    <reason.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{reason.title}</h3>
                    <p className="text-muted-foreground mb-4">{reason.description}</p>
                    <span className="trust-badge-blue">{reason.stats}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitments */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary mb-6">
                <Heart className="w-4 h-4" />
                <span className="text-sm font-medium">Our Commitments</span>
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Promises We Keep Every Day
              </h2>
              <p className="text-muted-foreground mb-8">
                These aren't just words on a website. They're commitments we hold ourselves 
                accountable to every single day, with every single customer.
              </p>

              <div className="space-y-6">
                {commitments.map((commitment) => (
                  <div key={commitment.title} className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-secondary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{commitment.title}</h3>
                      <p className="text-sm text-muted-foreground">{commitment.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <h3 className="text-xl font-bold text-foreground mb-6 text-center">Service Standards</h3>
              <div className="space-y-4">
                {serviceStandards.map((service) => (
                  <div key={service.metric} className="flex justify-between items-center p-4 bg-muted rounded-lg">
                    <span className="text-muted-foreground">{service.metric}</span>
                    <span className="font-semibold text-primary">{service.standard}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Satisfaction */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Customer Satisfaction is Everything</h2>
                <p className="text-muted-foreground mb-6">
                  We measure our success not by policies sold, but by customers protected 
                  and satisfied. Every review, every feedback, every interaction helps us 
                  improve and serve you better.
                </p>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-8 h-8 fill-primary text-primary" />
                    ))}
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">4.8/5</p>
                    <p className="text-sm text-muted-foreground">Based on 50,000+ reviews</p>
                  </div>
                </div>

                <Button variant="outline" asChild>
                  <Link to="/testimonials" className="gap-2">
                    Read Customer Stories
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Would Recommend", value: "96%" },
                  { label: "Claims Satisfaction", value: "94%" },
                  { label: "Support Rating", value: "4.9/5" },
                  { label: "Renewal Rate", value: "87%" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-card rounded-xl p-6 text-center shadow-soft">
                    <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Ethics */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                <Shield className="w-4 h-4" />
                <span className="text-sm font-medium">Professional Ethics</span>
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Ethical Standards</h2>
              <p className="text-muted-foreground">
                We hold ourselves to the highest ethical standards in the industry.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "IRDAI Registered",
                  description: "Fully licensed and regulated by the Insurance Regulatory and Development Authority of India.",
                },
                {
                  title: "Unbiased Advice",
                  description: "We recommend based on your needs, not commissions. Your interest always comes first.",
                },
                {
                  title: "Data Privacy",
                  description: "Bank-grade security and strict compliance with data protection regulations.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-card rounded-xl p-6 shadow-soft text-center">
                  <CheckCircle className="w-10 h-10 text-secondary mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-wide text-center">
          <h2 className="text-3xl font-bold mb-4">Experience the Difference</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join over a million customers who've made Policy Pioneer their trusted insurance partner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/contact" className="gap-2">
                Get a Free Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="lg" className="text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <a href="tel:1800-123-4567" className="gap-2">
                <Phone className="w-4 h-4" />
                Talk to an Advisor
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
