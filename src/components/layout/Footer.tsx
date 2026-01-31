import { Link } from "react-router-dom";
import {
  Shield,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

const footerLinks = {
  insurance: [
    { name: "Car Insurance", href: "/car-insurance" },
    { name: "Bike Insurance", href: "/bike-insurance" },
    { name: "Compare Plans", href: "/compare" },
    { name: "Get a Quote", href: "/contact" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Why Choose Us", href: "/why-choose-us" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Claims Support", href: "/claims" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      {/* Main Footer */}
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">
          
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl hero-gradient flex items-center justify-center shadow-md">
                <Shield className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  Policy Pioneer
                </h2>
                <p className="text-sm text-muted-foreground">
                  Insurance
                </p>
              </div>
            </Link>

            <p className="text-muted-foreground max-w-sm mb-6">
              Your trusted partner for comprehensive car and bike insurance
              solutions. Protecting what matters most to you since 2010.
            </p>

            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center
                             text-muted-foreground hover:bg-primary hover:text-primary-foreground
                             transition-all duration-200"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Insurance Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">
              Insurance
            </h3>
            <ul className="space-y-3">
              {footerLinks.insurance.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">
              Contact
            </h3>
            <ul className="space-y-5">
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="text-sm text-muted-foreground">Toll Free</p>
                  <a
                    href="tel:1800-123-4567"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    1800-123-4567
                  </a>
                </div>
              </li>

              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a
                    href="mailto:support@policypioneer.com"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    support@policypioneer.com
                  </a>
                </div>
              </li>

              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="text-sm text-muted-foreground">Head Office</p>
                  <p className="text-foreground">
                    123 Insurance Tower,<br />
                    Financial District, Mumbai
                  </p>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container-wide py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Policy Pioneer Insurance. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm">
            {["Privacy Policy", "Terms of Service", "Disclaimer"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
