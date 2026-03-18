import { MessageCircle, CalendarDays, Users, DollarSign, TrendingUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import AnimatedSection from "./AnimatedSection";
import logoNegativa from "@/assets/logo-mds-negativa.png";

const useCountUp = (end: number, duration = 2000, suffix = "") => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return { ref, count };
};

const HeroSection = () => {
  const stat1 = useCountUp(150, 2000);
  const stat2 = useCountUp(97, 2000);
  const stat3 = useCountUp(3, 1500);

  return (
    <AnimatedSection className="section-dark-deep min-h-screen flex items-center">
      <div className="container mx-auto px-6 py-20 lg:py-28">
        <div className="max-w-3xl mx-auto text-center">
          <div className="animate-fade-in mb-8">
            <img src={logoNegativa} alt="Mundo Digital Soluções" className="h-36 sm:h-42 mx-auto mb-10 opacity-80" />
            <span className="inline-flex items-center gap-2 rounded-full border px-5 py-2 text-xs font-body font-medium tracking-wide"
              style={{ borderColor: "hsl(0 0% 100% / 0.2)", color: "hsl(var(--off-white))" }}>
              <span className="w-2 h-2 rounded-full bg-accent-blue inline-block" />
              Método exclusivo MDS — Marketing e Vendas
            </span>
          </div>

          <h1 className="animate-fade-in font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-4" style={{ transitionDelay: "0.1s" }}>
            Você não precisa de mais uma agência.
          </h1>

          <p className="animate-fade-in font-display font-bold text-xl sm:text-2xl mb-6 text-off-white" style={{ transitionDelay: "0.2s" }}>
            Precisa de um método que faça marketing e vendas funcionarem juntos.
          </p>

          <p className="animate-fade-in font-body font-light text-base sm:text-lg leading-relaxed mb-12 text-off-white max-w-2xl mx-auto" style={{ transitionDelay: "0.3s" }}>
            A MDS não vende serviço. Entrega um sistema completo de aquisição, conversão e fidelização — com diagnóstico real, acompanhamento contínuo e resultados que você consegue medir.
          </p>

          {/* Animated Stats Bar */}
          <div className="animate-fade-in mb-12" style={{ transitionDelay: "0.4s" }}>
            <div className="max-w-3xl mx-auto rounded-2xl py-8 px-6" style={{ backgroundColor: "hsl(var(--navy) / 0.7)", borderTop: "2px solid hsl(var(--accent-blue) / 0.4)" }}>
              <div className="grid grid-cols-3 gap-4 sm:gap-8">
                <div ref={stat1.ref} className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <Users size={24} className="text-accent-blue" />
                    <span className="font-display font-extrabold text-3xl sm:text-5xl">{stat1.count}+</span>
                  </div>
                  <div className="font-body font-light text-xs sm:text-sm text-off-white">Clientes atendidos</div>
                </div>
                <div ref={stat2.ref} className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <DollarSign size={24} className="text-accent-blue" />
                    <span className="font-display font-extrabold text-3xl sm:text-5xl">{stat2.count}%</span>
                  </div>
                  <div className="font-body font-light text-xs sm:text-sm text-off-white">Clientes Satisfeitos</div>
                </div>
                <div ref={stat3.ref} className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <TrendingUp size={24} className="text-accent-blue" />
                    <span className="font-display font-extrabold text-3xl sm:text-5xl">{stat3.count}x</span>
                  </div>
                  <div className="font-body font-light text-xs sm:text-sm text-off-white">Aumento de ROI</div>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-fade-in flex flex-col sm:flex-row gap-4 justify-center mb-4" style={{ transitionDelay: "0.5s" }}>
            <a href="https://wa.me/5517992822597" target="_blank" rel="noopener noreferrer" className="btn-primary-cta">
              <MessageCircle size={18} /> Falar no WhatsApp
            </a>
            <a href="#agendar" className="btn-accent-cta">
              <CalendarDays size={18} /> Agendar consultoria gratuita
            </a>
          </div>

          <p className="animate-fade-in font-body font-light text-sm text-off-white opacity-70" style={{ transitionDelay: "0.6s" }}>
            Sem compromisso. Você sai com um diagnóstico real do seu negócio.
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default HeroSection;
