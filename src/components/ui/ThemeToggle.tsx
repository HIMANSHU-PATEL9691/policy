import { useEffect, useRef } from "react";
import { Sun, Moon, Monitor } from "lucide-react";
import { gsap } from "gsap";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export function ThemeToggle({ className, showLabel = false }: ThemeToggleProps) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const iconRef = useRef<HTMLDivElement>(null);

  const cycleTheme = () => {
    const themes: Array<"light" | "dark" | "system"> = ["light", "dark", "system"];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    
    // Animate icon
    if (iconRef.current) {
      gsap.to(iconRef.current, {
        rotateY: 180,
        scale: 0,
        duration: 0.2,
        ease: "power2.in",
        onComplete: () => {
          setTheme(themes[nextIndex]);
          gsap.to(iconRef.current, {
            rotateY: 0,
            scale: 1,
            duration: 0.3,
            ease: "back.out(1.7)",
          });
        },
      });
    } else {
      setTheme(themes[nextIndex]);
    }
  };

  const Icon = theme === "system" ? Monitor : resolvedTheme === "dark" ? Moon : Sun;
  const label = theme === "system" ? "System" : theme === "dark" ? "Dark" : "Light";

  return (
    <button
      onClick={cycleTheme}
      className={cn(
        "relative flex items-center gap-2 p-2 rounded-lg",
        "bg-muted/50 hover:bg-muted transition-colors duration-300",
        "focus:outline-none focus:ring-2 focus:ring-primary/20",
        className
      )}
      aria-label={`Current theme: ${label}. Click to change.`}
    >
      <div ref={iconRef} className="w-5 h-5">
        <Icon className="w-5 h-5 text-foreground" />
      </div>
      {showLabel && (
        <span className="text-sm font-medium text-foreground">{label}</span>
      )}
    </button>
  );
}
