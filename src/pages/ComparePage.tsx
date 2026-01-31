import { Layout } from "@/components/layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Scale, TrendingDown, CheckCircle, HelpCircle, 
  ArrowRight, Shield, Clock, Award 
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const comparisonData = [
  {
    name: "HDFC ERGO",
    carPremium: "₹8,499",
    bikePremium: "₹2,499",
    coverage: "₹10 Lakh",
    claimRatio: "97%",
    rating: 4.5,
  },
  {
    name: "ICICI Lombard",
    carPremium: "₹9,199",
    bikePremium: "₹2,699",
    coverage: "₹10 Lakh",
    claimRatio: "96%",
    rating: 4.4,
  },
  {
    name: "Bajaj Allianz",
    carPremium: "₹7,899",
    bikePremium: "₹2,299",
    coverage: "₹8 Lakh",
    claimRatio: "95%",
    rating: 4.3,
  },
  {
    name: "New India",
    carPremium: "₹8,999",
    bikePremium: "₹2,599",
    coverage: "₹12 Lakh",
    claimRatio: "98%",
    rating: 4.6,
  },
  {
    name: "Reliance General",
    carPremium: "₹7,499",
    bikePremium: "₹2,199",
    coverage: "₹8 Lakh",
    claimRatio: "94%",
    rating: 4.2,
  },
];

const benefits = [
  {
    icon: Scale,
    title: "Unbiased Comparison",
    description: "We show you plans from all major insurers without any bias or hidden preferences.",
  },
  {
    icon: TrendingDown,
    title: "Best Price Guarantee",
    description: "Find a lower price elsewhere? We'll match it. Guaranteed savings on every policy.",
  },
  {
    icon: Clock,
    title: "2-Minute Quotes",
    description: "Get instant quotes from 15+ insurers in less than 2 minutes. No waiting.",
  },
  {
    icon: Award,
    title: "Expert Guidance",
    description: "Our insurance experts help you understand complex terms and choose wisely.",
  },
];

const faqs = [
  {
    question: "How does the comparison work?",
    answer: "We partner with over 15 leading insurance companies to fetch real-time quotes based on your vehicle details. You can compare premiums, coverage, add-ons, and claim settlement ratios side by side to make an informed decision.",
  },
  {
    question: "Are the prices on Policy Pioneer the same as going directly to the insurer?",
    answer: "Yes, absolutely! We show you the exact same prices as the insurance companies. In fact, you often get additional discounts and offers exclusive to our platform.",
  },
  {
    question: "How do I know which policy is best for me?",
    answer: "Consider factors like your vehicle age, usage pattern, budget, and coverage needs. Our comparison tool highlights key differences, and our advisors can help you make the right choice based on your specific situation.",
  },
  {
    question: "Can I trust the claim settlement ratio shown?",
    answer: "Yes, all claim settlement ratios are sourced from official IRDAI data. This ratio indicates the percentage of claims an insurer has settled in a given year, helping you gauge their reliability.",
  },
  {
    question: "What if I want to switch my existing policy?",
    answer: "You can easily switch to a new insurer when your current policy is up for renewal. Your No Claim Bonus (NCB) is transferable, so you don't lose your accumulated discounts.",
  },
  {
    question: "Is my personal information safe?",
    answer: "Absolutely. We use bank-grade encryption to protect your data. Your information is only shared with insurers when you explicitly request a quote or buy a policy.",
  },
];

export default function ComparePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient text-primary-foreground py-20">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm mb-6">
              <Scale className="w-4 h-4" />
              <span className="text-sm font-medium">Smart Comparison</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Compare & Find the Best Insurance
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Compare quotes from 15+ top insurers instantly. Transparent pricing, 
              unbiased recommendations, and guaranteed best prices.
            </p>
            <Button variant="hero-outline" size="xl" asChild>
              <Link to="/contact" className="gap-2">
                Start Comparing Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Sample Comparison</h2>
            <p className="text-muted-foreground">
              Here's an example of how our comparison looks for a 2022 sedan.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-card rounded-2xl shadow-soft overflow-hidden">
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Insurer</th>
                  <th className="px-6 py-4 text-center font-semibold">Car Premium</th>
                  <th className="px-6 py-4 text-center font-semibold">Bike Premium</th>
                  <th className="px-6 py-4 text-center font-semibold">Coverage</th>
                  <th className="px-6 py-4 text-center font-semibold">Claim Ratio</th>
                  <th className="px-6 py-4 text-center font-semibold">Rating</th>
                  <th className="px-6 py-4 text-center font-semibold">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {comparisonData.map((insurer, index) => (
                  <tr key={insurer.name} className={index === 3 ? "bg-secondary/5" : ""}>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Shield className="w-5 h-5 text-primary" />
                        </div>
                        <span className="font-medium text-foreground">{insurer.name}</span>
                        {index === 3 && (
                          <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">Best Value</span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center font-medium text-foreground">{insurer.carPremium}</td>
                    <td className="px-6 py-4 text-center font-medium text-foreground">{insurer.bikePremium}</td>
                    <td className="px-6 py-4 text-center text-muted-foreground">{insurer.coverage}</td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-secondary font-medium">{insurer.claimRatio}</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-primary font-medium">{insurer.rating}★</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Button variant="outline" size="sm" asChild>
                        <Link to="/contact">Get Quote</Link>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              * Premiums are indicative and vary based on vehicle, location, and other factors.
            </p>
            <Button variant="default" size="lg" asChild>
              <Link to="/contact" className="gap-2">
                Compare for Your Vehicle
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Compare with Us?</h2>
            <p className="text-muted-foreground">
              We make finding the right insurance simple, transparent, and rewarding.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-card rounded-2xl p-6 shadow-soft card-hover text-center">
                <div className="icon-container-primary mx-auto mb-4">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Choose */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                How to Choose the Right Policy
              </h2>
              <p className="text-muted-foreground mb-8">
                Choosing the right insurance isn't just about price. Here's what you should consider:
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "1. Assess Your Coverage Needs",
                    description: "Consider your vehicle age, value, and how you use it. New cars benefit from comprehensive cover with zero depreciation.",
                  },
                  {
                    title: "2. Check Claim Settlement Ratio",
                    description: "Higher ratio means the insurer settles more claims. Look for 95%+ for peace of mind.",
                  },
                  {
                    title: "3. Compare Add-Ons Carefully",
                    description: "Not all add-ons are necessary. Choose based on your specific needs like roadside assistance or engine protection.",
                  },
                  {
                    title: "4. Read Reviews & Ratings",
                    description: "Customer experiences can tell you a lot about claim processes and customer service quality.",
                  },
                ].map((step) => (
                  <div key={step.title} className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8">
              <div className="bg-card rounded-2xl p-6 shadow-elevated">
                <h3 className="text-xl font-bold text-foreground mb-6 text-center">
                  Get Personalized Recommendations
                </h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Vehicle Type</label>
                    <select className="w-full px-4 py-3 rounded-lg border border-input bg-background">
                      <option>Select type</option>
                      <option>Car</option>
                      <option>Bike</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Vehicle Age</label>
                    <select className="w-full px-4 py-3 rounded-lg border border-input bg-background">
                      <option>Select age</option>
                      <option>Less than 1 year</option>
                      <option>1-3 years</option>
                      <option>3-5 years</option>
                      <option>More than 5 years</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Current Insurance</label>
                    <select className="w-full px-4 py-3 rounded-lg border border-input bg-background">
                      <option>Select status</option>
                      <option>New vehicle (no insurance)</option>
                      <option>Renewal (existing policy)</option>
                      <option>Expired (need new policy)</option>
                    </select>
                  </div>
                  <Button variant="quote" className="w-full" size="lg">
                    Get Recommendations
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-muted" id="faq">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <HelpCircle className="w-4 h-4" />
              <span className="text-sm font-medium">FAQs</span>
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">
              Got questions? We've got answers.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card rounded-xl px-6 shadow-soft border-none"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-wide text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find the Best Deal?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Compare quotes from 15+ insurers and start saving today.
          </p>
          <Button variant="hero-outline" size="xl" asChild>
            <Link to="/contact" className="gap-2">
              Compare Now
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
