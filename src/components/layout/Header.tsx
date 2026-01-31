import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Shield } from "lucide-react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { AnimatedMenuToggle } from "@/components/ui/AnimatedMenuToggle";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Car Insurance", href: "/car-insurance" },
  { name: "Bike Insurance", href: "/bike-insurance" },
  { name: "Compare", href: "/compare" },
  { name: "Claims", href: "/claims" },
  { name: "Why Us", href: "/why-choose-us" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  /* Scroll detection */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Header entrance */
  useEffect(() => {
    if (!headerRef.current) return;
    gsap.from(headerRef.current, {
      y: -80,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    });
  }, []);

  /* Mobile menu animation */
  useEffect(() => {
    if (!mobileMenuRef.current) return;

    if (mobileMenuOpen) {
      gsap.fromTo(
        mobileMenuRef.current,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.35, ease: "power2.out" }
      );

      gsap.fromTo(
        mobileMenuRef.current.querySelectorAll(".mobile-nav-item"),
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.05, duration: 0.25, delay: 0.1 }
      );
    } else {
      gsap.to(mobileMenuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.25,
        ease: "power2.in",
      });
    }
  }, [mobileMenuOpen]);

  /* Close on route change */
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      ref={headerRef}
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="container-wide py-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl hero-gradient flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-110">
              <Shield className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground leading-tight">
                Policy Pioneer
              </h1>
              <p className="text-xs text-muted-foreground">
                Insurance
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.slice(0, 7).map((item) => {
              const active = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                    active
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  {item.name}
                  <span
                    className={cn(
                      "absolute left-1/2 -translate-x-1/2 bottom-1 h-0.5 rounded-full bg-primary transition-all duration-300",
                      active ? "w-6 opacity-100" : "w-0 opacity-0"
                    )}
                  />
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />

            <Button
              variant="outline"
              size="sm"
              asChild
              className="rounded-full"
            >
              <Link to="/contact">Talk to Advisor</Link>
            </Button>

            <Button
              variant="quote"
              size="sm"
              asChild
              className="rounded-full shadow-md hover:shadow-lg"
            >
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile Controls */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <AnimatedMenuToggle
              isOpen={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            />
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          ref={mobileMenuRef}
          className="lg:hidden overflow-hidden"
          style={{ height: 0, opacity: 0 }}
        >
          <div className="mt-4 rounded-2xl border border-border bg-card shadow-lg p-4">
            <div className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "mobile-nav-item px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                    location.pathname === item.href
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  {item.name}
                </Link>
              ))}

              <div className="mt-4 pt-4 border-t border-border flex flex-col gap-2">
                <Button variant="outline" asChild className="rounded-full">
                  <Link to="/contact">Talk to Advisor</Link>
                </Button>
                <Button variant="quote" asChild className="rounded-full">
                  <Link to="/contact">Get a Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

      </nav>
    </header>
  );
}
