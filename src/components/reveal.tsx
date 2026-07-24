import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: keyof HTMLElementTagNameMap;
}) {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-visible");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add("is-visible"), delay);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    io.observe(el);
    const safety = setTimeout(() => el.classList.add("is-visible"), 2500);
    return () => {
      io.disconnect();
      clearTimeout(safety);
    };
  }, [delay]);
  const Component = Tag as string;
  return (
    // @ts-expect-error dynamic tag
    <Component ref={ref} className={cn("reveal-on-scroll", className)}>
      {children}
    </Component>
  );
}
