import { Layout } from "@/components/layout";
import {
  HeroSection,
  CarInsuranceSection,
  BikeInsuranceSection,
  CompareSection,
  ClaimsSection,
  WhyChooseSection,
  TestimonialsSection,
  ContactSection,
} from "@/components/sections";

const Index = () => {
  return (
    <Layout>
      {/* Section 1: Hero / Company Introduction */}
      <HeroSection />
      
      {/* Section 2: Car Insurance Solutions */}
      <CarInsuranceSection />
      
      {/* Section 3: Bike Insurance Solutions */}
      <BikeInsuranceSection />
      
      {/* Section 4: Policy Comparison & Best Price */}
      <CompareSection />
      
      {/* Section 5: Claims Assistance & Support */}
      <ClaimsSection />
      
      {/* Section 6: Why Choose Policy Pioneer */}
      <WhyChooseSection />
      
      {/* Section 7: Customer Testimonials */}
      <TestimonialsSection />
      
      {/* Section 8: Contact & Get a Quote */}
      <ContactSection />
    </Layout>
  );
};

export default Index;
