import { Layout } from "@/components/layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Target, Eye, Heart, Award, Users, Clock, CheckCircle, ArrowRight } from "lucide-react";

const milestones = [
  { year: "2010", title: "Founded", description: "Policy Pioneer Insurance was established with a vision to simplify insurance" },
  { year: "2015", title: "100K Customers", description: "Reached our first major milestone of 100,000 happy customers" },
  { year: "2018", title: "Digital First", description: "Launched our digital platform for instant quotes and policy issuance" },
  { year: "2022", title: "1M+ Protected", description: "Crossed 1 million customers protected across India" },
  { year: "2024", title: "Industry Leader", description: "Recognized as one of the top insurance aggregators in the country" },
];

const values = [
  {
    icon: Heart,
    title: "Customer First",
    description: "Every decision we make starts with one question: Is this good for our customers?",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "No hidden fees, no fine print surprises. What you see is what you get.",
  },
  {
    icon: Shield,
    title: "Trust",
    description: "We're committed to being a reliable partner you can count on when it matters most.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We continuously strive to improve our services and exceed expectations.",
  },
];

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient text-primary-foreground py-20">
        <div className="container-wide">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm mb-6">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">About Us</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Policy Pioneer Insurance
            </h1>
            <p className="text-xl text-primary-foreground/80">
              For over 15 years, we've been helping families and businesses protect 
              what matters most. Learn about our journey, values, and commitment to you.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Policy Pioneer Insurance was founded in 2010 with a simple mission: 
                to make insurance accessible, affordable, and understandable for everyone. 
                What started as a small team of passionate insurance experts has grown 
                into one of India's most trusted insurance platforms.
              </p>
              <p className="text-muted-foreground mb-4">
                Today, we partner with over 15 leading insurance companies to bring you 
                the best coverage options at competitive prices. Our technology-driven 
                approach ensures you can compare, purchase, and manage your policies 
                with just a few clicks.
              </p>
              <p className="text-muted-foreground">
                But beyond the technology, it's our people who make the difference. 
                Our team of certified insurance advisors is always ready to guide you 
                through complex decisions and be there when you need to file a claim.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary/5 rounded-2xl p-6 text-center">
                <p className="text-4xl font-bold text-primary mb-2">15+</p>
                <p className="text-sm text-muted-foreground">Years of Experience</p>
              </div>
              <div className="bg-secondary/5 rounded-2xl p-6 text-center">
                <p className="text-4xl font-bold text-secondary mb-2">1M+</p>
                <p className="text-sm text-muted-foreground">Happy Customers</p>
              </div>
              <div className="bg-accent/5 rounded-2xl p-6 text-center">
                <p className="text-4xl font-bold text-accent mb-2">98%</p>
                <p className="text-sm text-muted-foreground">Claims Settled</p>
              </div>
              <div className="bg-primary/5 rounded-2xl p-6 text-center">
                <p className="text-4xl font-bold text-primary mb-2">15+</p>
                <p className="text-sm text-muted-foreground">Insurance Partners</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <div className="icon-container-primary mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To simplify insurance for every Indian family by providing transparent, 
                affordable, and hassle-free protection. We believe everyone deserves 
                peace of mind, and we're committed to making that accessible to all.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <div className="icon-container-secondary mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To become India's most trusted insurance platform, known for putting 
                customers first, embracing innovation, and setting new standards in 
                service excellence. We envision a future where insurance is simple, 
                fair, and always there when you need it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-muted-foreground">
              These principles guide everything we do at Policy Pioneer Insurance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="bg-card rounded-2xl p-6 shadow-soft card-hover text-center">
                <div className="icon-container-primary mx-auto mb-4">
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Journey</h2>
            <p className="text-muted-foreground">
              Key milestones in our mission to protect millions of Indians.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                    {milestone.year}
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-border mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="text-lg font-semibold text-foreground mb-1">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-wide text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Protected?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join over a million customers who trust Policy Pioneer for their insurance needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/contact" className="gap-2">
                Get a Free Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="lg" className="text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link to="/why-choose-us">Learn Why Customers Trust Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
