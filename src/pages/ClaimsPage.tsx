import { Layout } from "@/components/layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  FileText, Clock, CheckCircle, Headphones, 
  Camera, FileCheck, CreditCard, Phone, 
  MessageCircle, ArrowRight, MapPin 
} from "lucide-react";

const claimSteps = [
  {
    step: 1,
    icon: Phone,
    title: "Report the Incident",
    description: "Call our 24/7 claims helpline at 1800-123-4567 or report online through our portal. Report within 24 hours for smooth processing.",
    tips: ["Note down the date, time, and location", "Take photos of the damage", "File FIR if theft or accident"],
  },
  {
    step: 2,
    icon: FileText,
    title: "Submit Claim Form",
    description: "Fill out the claim intimation form with all required details. Our team will guide you through the documentation process.",
    tips: ["Keep your policy number handy", "Provide accurate information", "Submit all required documents"],
  },
  {
    step: 3,
    icon: Camera,
    title: "Vehicle Inspection",
    description: "Our surveyor will inspect the damaged vehicle. For minor repairs, you can use our network garage for cashless claims.",
    tips: ["Don't repair before inspection", "Keep the vehicle accessible", "Cooperate with the surveyor"],
  },
  {
    step: 4,
    icon: FileCheck,
    title: "Claim Approval",
    description: "Once documents are verified and inspection is complete, your claim will be approved. We aim for approval within 72 hours.",
    tips: ["Track status online", "Respond to queries promptly", "Keep documents safe"],
  },
  {
    step: 5,
    icon: CreditCard,
    title: "Settlement",
    description: "Receive your claim amount via cashless settlement at network garage or reimbursement to your bank account.",
    tips: ["Cashless is faster", "Bank transfer within 7 days", "Keep repair bills"],
  },
];

const requiredDocs = [
  "Duly filled claim form",
  "Copy of insurance policy",
  "Copy of registration certificate (RC)",
  "Copy of driving license",
  "FIR copy (for theft/accident)",
  "Original repair bills and invoices",
  "Photos of damaged vehicle",
  "Bank account details (for reimbursement)",
];

const cashlessGarages = [
  { city: "Mumbai", count: 250 },
  { city: "Delhi NCR", count: 320 },
  { city: "Bangalore", count: 180 },
  { city: "Chennai", count: 150 },
  { city: "Hyderabad", count: 140 },
  { city: "Pune", count: 120 },
];

export default function ClaimsPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient text-primary-foreground py-20">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm mb-6">
                <Headphones className="w-4 h-4" />
                <span className="text-sm font-medium">Claims Support</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Hassle-Free Claims Assistance
              </h1>
              <p className="text-xl text-primary-foreground/80 mb-8">
                We're here when you need us most. Our dedicated claims team ensures 
                quick settlements with minimal paperwork and 24/7 support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero-outline" size="lg" asChild>
                  <a href="tel:1800-123-4567" className="gap-2">
                    <Phone className="w-4 h-4" />
                    Report a Claim
                  </a>
                </Button>
                <Button variant="ghost" size="lg" className="text-primary-foreground hover:bg-primary-foreground/10" asChild>
                  <a href="https://wa.me/911234567890" className="gap-2">
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp Support
                  </a>
                </Button>
              </div>
            </div>

            <div className="bg-card text-foreground rounded-2xl p-6 shadow-float">
              <h3 className="text-xl font-bold mb-6">Track Your Claim</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Claim Number</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background"
                    placeholder="Enter your claim number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Registered Mobile</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background"
                    placeholder="Enter registered mobile number"
                  />
                </div>
                <Button variant="default" className="w-full" size="lg">
                  Track Claim Status
                </Button>
              </form>
              
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground text-center">
                  Need help? Call <a href="tel:1800-123-4567" className="text-primary font-medium">1800-123-4567</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Claim Stats */}
      <section className="py-12 bg-muted">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "98%", label: "Claims Settled" },
              { value: "24 hrs", label: "Avg. Response Time" },
              { value: "5000+", label: "Network Garages" },
              { value: "24/7", label: "Support Available" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Step-by-Step Claim Process</h2>
            <p className="text-muted-foreground">
              Follow these simple steps to file and settle your insurance claim.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {claimSteps.map((step) => (
              <div key={step.step} className="bg-card rounded-2xl p-6 shadow-soft">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl shrink-0">
                      {step.step}
                    </div>
                    <div className="md:hidden">
                      <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="hidden md:block text-xl font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground mb-4">{step.description}</p>
                    
                    <div className="bg-muted rounded-lg p-4">
                      <p className="text-sm font-medium text-foreground mb-2">Quick Tips:</p>
                      <ul className="space-y-1">
                        {step.tips.map((tip) => (
                          <li key={tip} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-secondary" />
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cashless Claims */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Cashless Claims Network</h2>
              <p className="text-muted-foreground mb-6">
                With over 5,000 network garages across India, you can get your vehicle 
                repaired without paying upfront. Simply visit a network garage, and we 
                settle the bill directly with them.
              </p>

              <div className="bg-card rounded-xl p-6 shadow-soft mb-6">
                <h3 className="font-semibold text-foreground mb-4">How Cashless Claims Work:</h3>
                <ul className="space-y-3">
                  {[
                    "Report the claim and get approval",
                    "Visit any network garage near you",
                    "Show your policy and claim approval",
                    "Get your vehicle repaired",
                    "We settle directly with the garage",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center text-secondary text-sm font-medium shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button variant="outline" size="lg" asChild>
                <Link to="/contact" className="gap-2">
                  <MapPin className="w-4 h-4" />
                  Find Nearest Garage
                </Link>
              </Button>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">Network Coverage</h3>
              <div className="grid grid-cols-2 gap-4">
                {cashlessGarages.map((garage) => (
                  <div key={garage.city} className="bg-card rounded-xl p-4 shadow-soft">
                    <p className="font-semibold text-foreground">{garage.city}</p>
                    <p className="text-2xl font-bold text-primary">{garage.count}+</p>
                    <p className="text-xs text-muted-foreground">Network Garages</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-4 text-center">
                + 4000 more garages across 500+ cities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Required Documents</h2>
              <p className="text-muted-foreground">
                Keep these documents ready for a smooth claim process.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {requiredDocs.map((doc) => (
                <div key={doc} className="bg-card rounded-xl p-4 shadow-soft flex items-center gap-3">
                  <FileText className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-foreground">{doc}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-primary/5 border border-primary/20 rounded-xl p-6 text-center">
              <p className="text-muted-foreground mb-4">
                Missing documents? Don't worry. Our claims team will guide you 
                through the process and help you gather what's needed.
              </p>
              <Button variant="default" asChild>
                <a href="tel:1800-123-4567" className="gap-2">
                  <Phone className="w-4 h-4" />
                  Call Claims Support
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-8">
            <a
              href="tel:1800-123-4567"
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-primary-foreground/20 transition-colors"
            >
              <Phone className="w-10 h-10 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">24/7 Helpline</h3>
              <p className="text-primary-foreground/80">1800-123-4567</p>
            </a>

            <a
              href="mailto:claims@policypioneer.com"
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-primary-foreground/20 transition-colors"
            >
              <FileText className="w-10 h-10 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email Claims</h3>
              <p className="text-primary-foreground/80">claims@policypioneer.com</p>
            </a>

            <a
              href="https://wa.me/911234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-primary-foreground/20 transition-colors"
            >
              <MessageCircle className="w-10 h-10 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">WhatsApp</h3>
              <p className="text-primary-foreground/80">Quick Chat Support</p>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
