import { MessageCircle, CalendarDays } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import logoNegativa from "@/assets/logo-mds-negativa.png";

const HeroSection = () => (
  <AnimatedSection className="section-dark-deep min-h-screen flex items-center">
    <div className="container mx-auto px-6 py-20 lg:py-28">
      <div className="max-w-3xl mx-auto text-center">
        <div className="animate-fade-in mb-8">
          <img src={logoNegativa} alt="Mundo Digital Soluções" className="h-14 mx-auto mb-10 opacity-80" />
          <span className="inline-flex items-center gap-2 rounded-full border px-5 py-2 text-xs font-body font-medium tracking-wide"
            style={{ borderColor: "hsl(0 0% 100% / 0.2)", color: "hsl(var(--off-white))" }}>
            <span className="w-2 h-2 rounded-full bg-accent-blue inline-block" />
            Método exclusivo MDS — Marketing e Vendas como Sistema
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

        <div className="animate-fade-in grid grid-cols-3 gap-4 sm:gap-8 max-w-lg mx-auto mb-12" style={{ transitionDelay: "0.4s" }}>
          {[
            { number: "2x", label: "Faturamento duplicado" },
            { number: "3.000+", label: "Leads gerados" },
            { number: "3 anos", label: "Parceria média" },
          ].map((stat) => (
            <div key={stat.number} className="text-center">
              <div className="font-display font-extrabold text-2xl sm:text-3xl text-accent-blue">{stat.number}</div>
              <div className="font-body font-light text-xs sm:text-sm text-off-white mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="animate-fade-in flex flex-col sm:flex-row gap-4 justify-center mb-4" style={{ transitionDelay: "0.5s" }}>
          <a href="https://wa.me/5517992822597" target="_blank" rel="noopener noreferrer" className="btn-primary-cta">
            <MessageCircle size={18} /> Falar no WhatsApp
          </a>
          <a href="#agendar" className="btn-outline-cta">
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

export default HeroSection;
