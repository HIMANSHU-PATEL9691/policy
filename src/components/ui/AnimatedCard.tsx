import { useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  hoverScale?: number;
  hoverRotate?: number;
}

export function AnimatedCard({
  children,
  className,
  hoverScale = 1.02,
  hoverRotate = 1,
}: AnimatedCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (!cardRef.current) return;
    
    gsap.to(cardRef.current, {
      scale: hoverScale,
      rotateY: hoverRotate,
      rotateX: -hoverRotate,
      duration: 0.4,
      ease: "power2.out",
    });

    if (glowRef.current) {
      gsap.to(glowRef.current, {
        opacity: 1,
        duration: 0.3,
      });
    }
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    
    gsap.to(cardRef.current, {
      scale: 1,
      rotateY: 0,
      rotateX: 0,
      duration: 0.4,
      ease: "power2.out",
    });

    if (glowRef.current) {
      gsap.to(glowRef.current, {
        opacity: 0,
        duration: 0.3,
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !glowRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    gsap.to(glowRef.current, {
      background: `radial-gradient(circle at ${x}px ${y}px, hsl(var(--primary) / 0.15) 0%, transparent 50%)`,
      duration: 0.2,
    });
  };

  return (
    <div
      ref={cardRef}
      className={cn(
        "relative overflow-hidden rounded-2xl bg-card shadow-soft",
        "transform-gpu perspective-1000",
        className
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Glow effect overlay */}
      <div
        ref={glowRef}
        className="absolute inset-0 pointer-events-none opacity-0 z-10"
      />
      {children}
    </div>
  );
}
