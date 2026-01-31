import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

interface UseScrollAnimationOptions {
  trigger?: string;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  markers?: boolean;
  once?: boolean;
}

// Hook for scroll-triggered animations
export function useScrollAnimation<T extends HTMLElement>(
  animationConfig: gsap.TweenVars = {},
  options: UseScrollAnimationOptions = {}
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      gsap.from(element, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        ...animationConfig,
        scrollTrigger: {
          trigger: options.trigger || element,
          start: options.start || "top 85%",
          end: options.end || "bottom 20%",
          toggleActions: options.once ? "play none none none" : "play none none reverse",
          markers: options.markers || false,
        },
      });
    }, element);

    return () => ctx.revert();
  }, []);

  return ref;
}

// Hook for staggered children animations
export function useStaggerAnimation<T extends HTMLElement>(
  staggerAmount: number = 0.1,
  animationConfig: gsap.TweenVars = {},
  options: UseScrollAnimationOptions = {}
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const children = element.children;
    if (children.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.from(children, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: staggerAmount,
        ease: "power2.out",
        ...animationConfig,
        scrollTrigger: {
          trigger: element,
          start: options.start || "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }, element);

    return () => ctx.revert();
  }, [staggerAmount]);

  return ref;
}

// Hook for parallax effects
export function useParallax<T extends HTMLElement>(speed: number = 0.5) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      gsap.to(element, {
        y: () => window.innerHeight * speed * 0.5,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, element);

    return () => ctx.revert();
  }, [speed]);

  return ref;
}

// Hook for text reveal animation
export function useTextReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      const words = element.innerText.split(" ");
      element.innerHTML = words
        .map((word) => `<span class="inline-block overflow-hidden"><span class="word-reveal inline-block">${word}</span></span>`)
        .join(" ");

      gsap.from(element.querySelectorAll(".word-reveal"), {
        y: "100%",
        opacity: 0,
        duration: 0.8,
        stagger: 0.05,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, element);

    return () => ctx.revert();
  }, []);

  return ref;
}

// Hook for hover magnetic effect
export function useMagneticHover<T extends HTMLElement>(strength: number = 0.3) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(element, {
        x: x * strength,
        y: y * strength,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.3)",
      });
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [strength]);

  return ref;
}

// Hook for counter animation
export function useCounterAnimation<T extends HTMLElement>(
  endValue: number,
  duration: number = 2,
  suffix: string = ""
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      const counter = { value: 0 };

      gsap.to(counter, {
        value: endValue,
        duration,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        onUpdate: () => {
          element.textContent = Math.round(counter.value) + suffix;
        },
      });
    }, element);

    return () => ctx.revert();
  }, [endValue, duration, suffix]);

  return ref;
}

export { gsap, ScrollTrigger };
