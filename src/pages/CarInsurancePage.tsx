import { Layout } from "@/components/layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Car, Shield, FileCheck, Wrench, AlertTriangle, 
  CheckCircle, Plus, ArrowRight, Phone 
} from "lucide-react";

const coverageTypes = [
  {
    title: "Third-Party Insurance",
    description: "Mandatory coverage that protects you against legal liabilities arising from injury or damage caused to a third party.",
    features: [
      "Covers third-party bodily injuries",
      "Covers third-party property damage",
      "Legal liability coverage",
      "Mandatory by law",
    ],
    price: "Starting ₹2,094/year",
    popular: false,
  },
  {
    title: "Comprehensive Insurance",
    description: "Complete protection for your car covering both third-party liabilities and damage to your own vehicle.",
    features: [
      "All third-party coverage included",
      "Own damage protection",
      "Theft coverage",
      "Natural disaster coverage",
      "Fire and explosion coverage",
      "Personal accident cover",
    ],
    price: "Starting ₹8,499/year",
    popular: true,
  },
  {
    title: "Zero Depreciation Cover",
    description: "Get full claim amount without any deduction for depreciation on parts. Ideal for new cars.",
    features: [
      "No depreciation deduction",
      "Full parts replacement value",
      "Ideal for cars under 5 years",
      "Covers plastic and rubber parts",
      "Includes comprehensive benefits",
    ],
    price: "Starting ₹12,999/year",
    popular: false,
  },
];

const addOns = [
  { name: "Roadside Assistance", description: "24/7 emergency support for breakdowns" },
  { name: "Engine Protection", description: "Coverage for engine damage due to water ingress" },
  { name: "Return to Invoice", description: "Get invoice value in case of total loss" },
  { name: "NCB Protection", description: "Protect your No Claim Bonus" },
  { name: "Key Replacement", description: "Coverage for lost or stolen car keys" },
  { name: "Consumables Cover", description: "Coverage for oil, coolant, nuts, bolts, etc." },
];

const claimProcess = [
  { step: 1, title: "Report the Incident", description: "Call our 24/7 helpline or report online within 24 hours" },
  { step: 2, title: "Document Everything", description: "Take photos, note details, and file FIR if needed" },
  { step: 3, title: "Submit Claim Form", description: "Fill out the claim form with required documents" },
  { step: 4, title: "Vehicle Inspection", description: "Our surveyor will assess the damage" },
  { step: 5, title: "Claim Settlement", description: "Receive settlement via cashless or reimbursement" },
];

export default function CarInsurancePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient text-primary-foreground py-20">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm mb-6">
                <Car className="w-4 h-4" />
                <span className="text-sm font-medium">Car Insurance</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Comprehensive Car Insurance Plans
              </h1>
              <p className="text-xl text-primary-foreground/80 mb-8">
                Protect your car with India's most trusted insurance coverage. 
                Compare plans, get instant quotes, and drive with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero-outline" size="lg" asChild>
                  <Link to="/contact" className="gap-2">
                    Get Free Quote
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button variant="ghost" size="lg" className="text-primary-foreground hover:bg-primary-foreground/10" asChild>
                  <a href="tel:1800-123-4567" className="gap-2">
                    <Phone className="w-4 h-4" />
                    Talk to Advisor
                  </a>
                </Button>
              </div>
            </div>

            <div className="bg-card text-foreground rounded-2xl p-6 shadow-float">
              <h3 className="text-xl font-bold mb-4">Quick Quote Calculator</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Car Brand & Model</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-input bg-background">
                    <option>Select your car</option>
                    <option>Maruti Suzuki Swift</option>
                    <option>Hyundai i20</option>
                    <option>Honda City</option>
                    <option>Toyota Innova</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Registration Year</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-input bg-background">
                    <option>Select year</option>
                    <option>2024</option>
                    <option>2023</option>
                    <option>2022</option>
                    <option>2021</option>
                    <option>2020</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">RTO Location</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background"
                    placeholder="e.g., MH-12"
                  />
                </div>
                <Button variant="quote" className="w-full" size="lg">
                  View Prices
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Types */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Choose Your Coverage</h2>
            <p className="text-muted-foreground">
              Select the right protection level for your car and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {coverageTypes.map((coverage) => (
              <div 
                key={coverage.title}
                className={`bg-card rounded-2xl p-6 shadow-soft card-hover relative ${
                  coverage.popular ? 'ring-2 ring-primary' : ''
                }`}
              >
                {coverage.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <h3 className="text-xl font-bold text-foreground mb-3 mt-2">{coverage.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{coverage.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {coverage.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-border pt-4">
                  <p className="text-lg font-bold text-primary mb-4">{coverage.price}</p>
                  <Button 
                    variant={coverage.popular ? "default" : "outline"} 
                    className="w-full"
                    asChild
                  >
                    <Link to="/contact">Get Quote</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Enhance Your Coverage</h2>
            <p className="text-muted-foreground">
              Add extra protection with our popular add-on covers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOns.map((addon) => (
              <div key={addon.name} className="bg-card rounded-xl p-5 shadow-soft flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Plus className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{addon.name}</h3>
                  <p className="text-sm text-muted-foreground">{addon.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exclusions */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="bg-destructive/5 border border-destructive/20 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <AlertTriangle className="w-8 h-8 text-destructive shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">What's Not Covered</h2>
                  <p className="text-muted-foreground">
                    Standard car insurance policies typically exclude the following:
                  </p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Damage due to drunk driving",
                  "Normal wear and tear",
                  "Driving without valid license",
                  "Mechanical breakdown",
                  "War and nuclear risks",
                  "Consequential losses",
                  "Using car for commercial purposes",
                  "Damage outside geographical limits",
                ].map((exclusion) => (
                  <div key={exclusion} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-destructive" />
                    <span className="text-sm text-muted-foreground">{exclusion}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Claim Process */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Claim Process</h2>
            <p className="text-muted-foreground">
              Filing a claim is quick and hassle-free. Here's how it works:
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {claimProcess.map((step, index) => (
              <div key={step.step} className="relative">
                {index < claimProcess.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-border" />
                )}
                <div className="bg-card rounded-2xl p-5 shadow-soft text-center relative z-10">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-xs text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-wide text-center">
          <h2 className="text-3xl font-bold mb-4">Get Your Car Insured Today</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Compare quotes from 15+ insurers and get the best price in minutes.
          </p>
          <Button variant="hero-outline" size="xl" asChild>
            <Link to="/contact" className="gap-2">
              Get Free Quote Now
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
