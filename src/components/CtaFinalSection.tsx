import { MessageCircle, CalendarDays, Check } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const CtaFinalSection = () => (
  <AnimatedSection className="section-dark-deep py-20 lg:py-28" id="agendar">
    <div className="container mx-auto px-6">
      <div className="max-w-2xl mx-auto text-center">
        <span className="animate-fade-in inline-block font-body font-medium text-sm tracking-widest uppercase text-accent-blue mb-3">
          Dê o primeiro passo
        </span>
        <h2 className="animate-fade-in font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-4" style={{ transitionDelay: "0.1s" }}>
          Consultoria gratuita de 30 minutos
        </h2>
        <p className="animate-fade-in font-body font-light text-base sm:text-lg text-off-white mb-10 leading-relaxed" style={{ transitionDelay: "0.2s" }}>
          Você sai com um diagnóstico real do seu negócio e um plano de ação com prioridades. Sem compromisso. Sem enrolação.
        </p>

        <div className="animate-fade-in space-y-3 mb-10 inline-block text-left" style={{ transitionDelay: "0.3s" }}>
          {[
            "Diagnóstico completo do seu momento atual",
            "Identificação das principais oportunidades",
            "Plano de ação com prioridades claras",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "hsl(var(--accent-blue) / 0.2)" }}>
                <Check size={14} className="text-accent-blue" />
              </div>
              <span className="font-body font-light text-sm text-off-white">{item}</span>
            </div>
          ))}
        </div>

        <div className="animate-fade-in flex flex-col sm:flex-row gap-4 justify-center mb-5" style={{ transitionDelay: "0.4s" }}>
          <a href="https://wa.me/5517992822597" target="_blank" rel="noopener noreferrer" className="btn-primary-cta text-lg px-10 py-5">
            <MessageCircle size={20} /> Falar agora no WhatsApp
          </a>
          <a href="#calendly-embed" className="btn-outline-cta text-lg px-10 py-5">
            <CalendarDays size={20} /> Agendar no calendário
          </a>
        </div>

        <p className="animate-fade-in font-body font-light text-sm text-off-white opacity-60" style={{ transitionDelay: "0.5s" }}>
          Respondemos em menos de 1 hora nos dias úteis
        </p>

        {/* CALENDLY EMBED PLACEHOLDER */}
        {/* <div id="calendly-embed" className="mt-12 min-h-[700px]" data-url="CALENDLY_URL"></div> */}
      </div>
    </div>
  </AnimatedSection>
);

export default CtaFinalSection;
