import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";

interface AnimatedMenuToggleProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

export function AnimatedMenuToggle({ isOpen, onClick, className }: AnimatedMenuToggleProps) {
  const topLineRef = useRef<HTMLSpanElement>(null);
  const middleLineRef = useRef<HTMLSpanElement>(null);
  const bottomLineRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const top = topLineRef.current;
    const middle = middleLineRef.current;
    const bottom = bottomLineRef.current;

    if (!top || !middle || !bottom) return;

    if (isOpen) {
      // Animate to X
      gsap.to(top, {
        rotate: 45,
        y: 8,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(middle, {
        opacity: 0,
        scaleX: 0,
        duration: 0.2,
        ease: "power2.out",
      });
      gsap.to(bottom, {
        rotate: -45,
        y: -8,
        duration: 0.3,
        ease: "power2.out",
      });
    } else {
      // Animate to hamburger
      gsap.to(top, {
        rotate: 0,
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(middle, {
        opacity: 1,
        scaleX: 1,
        duration: 0.2,
        delay: 0.1,
        ease: "power2.out",
      });
      gsap.to(bottom, {
        rotate: 0,
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }, [isOpen]);

  return (
    <button
      onClick={onClick}
      className={cn(
        "relative w-10 h-10 flex flex-col items-center justify-center gap-1.5",
        "rounded-lg hover:bg-muted transition-colors",
        "focus:outline-none focus:ring-2 focus:ring-primary/20",
        className
      )}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
    >
      <span
        ref={topLineRef}
        className="block w-6 h-0.5 bg-foreground origin-center transition-colors"
      />
      <span
        ref={middleLineRef}
        className="block w-6 h-0.5 bg-foreground origin-center transition-colors"
      />
      <span
        ref={bottomLineRef}
        className="block w-6 h-0.5 bg-foreground origin-center transition-colors"
      />
    </button>
  );
}
