import { useEffect, useRef, ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

const AnimatedSection = ({ children, className = "", id }: AnimatedSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = ref.current?.querySelectorAll(".animate-fade-in");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className={className} id={id}>
      {children}
    </section>
  );
};

export default AnimatedSection;
