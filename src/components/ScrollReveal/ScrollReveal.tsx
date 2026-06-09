import { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import type { SxProps, Theme } from "@mui/material/styles";

interface ScrollRevealProps {
  children: React.ReactNode;
  /** Atraso em ms antes de iniciar a transição (para efeitos escalonados) */
  delay?: number;
  /** Direção do slide de entrada */
  direction?: "up" | "down" | "left" | "right" | "none";
  /** Distância do deslocamento em px */
  distance?: number;
  /** Limiar do IntersectionObserver (0–1) */
  threshold?: number;
  sx?: SxProps<Theme>;
}

const TRANSLATE: Record<string, (d: number) => string> = {
  up: (d) => `translateY(${d}px)`,
  down: (d) => `translateY(-${d}px)`,
  left: (d) => `translateX(${d}px)`,
  right: (d) => `translateX(-${d}px)`,
  none: () => "none",
};

export default function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  distance = 36,
  threshold = 0.12,
  sx,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // anima uma única vez
        }
      },
      { threshold, rootMargin: "0px 0px -48px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <Box
      ref={ref}
      sx={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : TRANSLATE[direction](distance),
        transition: `opacity 0.55s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms,
                     transform 0.55s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
        willChange: "opacity, transform",
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}
