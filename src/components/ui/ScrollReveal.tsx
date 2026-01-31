import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

type AnimationType = "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale" | "rotate";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  stagger?: number;
  once?: boolean;
}

const animationConfigs: Record<AnimationType, gsap.TweenVars> = {
  "fade-up": { opacity: 0, y: 60 },
  "fade-down": { opacity: 0, y: -60 },
  "fade-left": { opacity: 0, x: 60 },
  "fade-right": { opacity: 0, x: -60 },
  "scale": { opacity: 0, scale: 0.8 },
  "rotate": { opacity: 0, rotation: 10, scale: 0.95 },
};

export function ScrollReveal({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  duration = 0.8,
  stagger = 0,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const targets = stagger > 0 ? element.children : element;
    
    const ctx = gsap.context(() => {
      gsap.from(targets, {
        ...animationConfigs[animation],
        duration,
        delay,
        stagger: stagger > 0 ? stagger : undefined,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: once ? "play none none none" : "play none none reverse",
        },
      });
    }, element);

    return () => ctx.revert();
  }, [animation, delay, duration, stagger, once]);

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}

// Container for staggered children animations
interface ScrollStaggerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  animation?: AnimationType;
}

export function ScrollStagger({
  children,
  className,
  staggerDelay = 0.1,
  animation = "fade-up",
}: ScrollStaggerProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const children = element.children;
    if (children.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.from(children, {
        ...animationConfigs[animation],
        duration: 0.8,
        stagger: staggerDelay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }, element);

    return () => ctx.revert();
  }, [staggerDelay, animation]);

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}
