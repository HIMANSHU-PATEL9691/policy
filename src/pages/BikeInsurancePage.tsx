import { Layout } from "@/components/layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Bike, Shield, UserCheck, Percent, AlertTriangle, 
  CheckCircle, Plus, ArrowRight, Phone 
} from "lucide-react";

const coverageTypes = [
  {
    title: "Third-Party Insurance",
    description: "Mandatory legal coverage for third-party liabilities. Affordable and essential for all two-wheelers.",
    features: [
      "Third-party injury coverage",
      "Third-party property damage",
      "Legal liability protection",
      "Mandatory by Motor Vehicles Act",
    ],
    price: "Starting ₹714/year",
    popular: false,
  },
  {
    title: "Comprehensive Insurance",
    description: "Complete protection covering both third-party liabilities and damage to your own bike.",
    features: [
      "All third-party benefits",
      "Own damage protection",
      "Theft coverage",
      "Fire and natural disasters",
      "Personal accident cover",
      "Riot and strike damage",
    ],
    price: "Starting ₹2,499/year",
    popular: true,
  },
  {
    title: "Premium Protection",
    description: "Our most comprehensive plan with all add-ons for maximum peace of mind.",
    features: [
      "All comprehensive benefits",
      "Zero depreciation cover",
      "Roadside assistance 24/7",
      "Engine protection",
      "Pillion rider cover",
      "NCB protection",
    ],
    price: "Starting ₹3,999/year",
    popular: false,
  },
];

const addOns = [
  { name: "Zero Depreciation", description: "Get full claim without depreciation" },
  { name: "Roadside Assistance", description: "24/7 breakdown support" },
  { name: "Personal Accident", description: "Up to ₹15 Lakh PA cover" },
  { name: "Pillion Rider Cover", description: "Protection for passenger" },
  { name: "Engine Protection", description: "Coverage for engine damage" },
  { name: "Return to Invoice", description: "Get full invoice value" },
];

const eligibility = [
  "Must have a valid driving license",
  "Bike should be registered in India",
  "Age of bike should be within policy limits",
  "Valid pollution certificate required",
  "No outstanding claims or legal issues",
];

export default function BikeInsurancePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary to-accent py-20">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-foreground/10 backdrop-blur-sm mb-6">
                <Bike className="w-4 h-4 text-secondary-foreground" />
                <span className="text-sm font-medium text-secondary-foreground">Bike Insurance</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-secondary-foreground">
                Two-Wheeler Insurance Plans
              </h1>
              <p className="text-xl text-secondary-foreground/80 mb-8">
                Affordable bike insurance for daily commuters and weekend riders. 
                Get comprehensive protection at the best prices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero-outline" size="lg" className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary" asChild>
                  <Link to="/contact" className="gap-2">
                    Get Free Quote
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button variant="ghost" size="lg" className="text-secondary-foreground hover:bg-secondary-foreground/10" asChild>
                  <a href="tel:1800-123-4567" className="gap-2">
                    <Phone className="w-4 h-4" />
                    Talk to Advisor
                  </a>
                </Button>
              </div>
            </div>

            <div className="bg-card text-foreground rounded-2xl p-6 shadow-float">
              <h3 className="text-xl font-bold mb-4">Get Bike Insurance Quote</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Bike Brand & Model</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-input bg-background">
                    <option>Select your bike</option>
                    <option>Hero Splendor</option>
                    <option>Honda Activa</option>
                    <option>TVS Apache</option>
                    <option>Royal Enfield Classic</option>
                    <option>Bajaj Pulsar</option>
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
                <Button variant="success" className="w-full" size="lg">
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
              Find the perfect protection for your two-wheeler.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {coverageTypes.map((coverage) => (
              <div 
                key={coverage.title}
                className={`bg-card rounded-2xl p-6 shadow-soft card-hover relative ${
                  coverage.popular ? 'ring-2 ring-secondary' : ''
                }`}
              >
                {coverage.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm font-medium">
                      Recommended
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
                  <p className="text-lg font-bold text-secondary mb-4">{coverage.price}</p>
                  <Button 
                    variant={coverage.popular ? "secondary" : "outline"} 
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
            <h2 className="text-3xl font-bold text-foreground mb-4">Add-On Covers</h2>
            <p className="text-muted-foreground">
              Enhance your bike insurance with these optional add-ons.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOns.map((addon) => (
              <div key={addon.name} className="bg-card rounded-xl p-5 shadow-soft flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                  <Plus className="w-5 h-5 text-secondary" />
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

      {/* No Claim Bonus */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="icon-container-secondary mb-6">
                <Percent className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">No Claim Bonus (NCB)</h2>
              <p className="text-muted-foreground mb-6">
                Enjoy increasing discounts on your premium for every claim-free year. 
                Your responsible riding pays off with significant savings.
              </p>
              
              <div className="bg-muted rounded-xl p-6">
                <div className="space-y-4">
                  {[
                    { year: "1 Year", discount: "20%" },
                    { year: "2 Years", discount: "25%" },
                    { year: "3 Years", discount: "35%" },
                    { year: "4 Years", discount: "45%" },
                    { year: "5+ Years", discount: "50%" },
                  ].map((ncb) => (
                    <div key={ncb.year} className="flex justify-between items-center">
                      <span className="text-muted-foreground">{ncb.year} Claim-Free</span>
                      <span className="font-bold text-secondary">{ncb.discount} Discount</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <h3 className="text-xl font-bold text-foreground mb-6">Eligibility Requirements</h3>
              <ul className="space-y-4">
                {eligibility.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary text-secondary-foreground">
        <div className="container-wide text-center">
          <h2 className="text-3xl font-bold mb-4">Get Your Bike Insured Today</h2>
          <p className="text-secondary-foreground/80 mb-8 max-w-2xl mx-auto">
            Quick quotes, instant policy, and 24/7 claims support.
          </p>
          <Button 
            variant="outline" 
            size="xl" 
            className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary"
            asChild
          >
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
