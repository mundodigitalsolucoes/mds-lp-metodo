import { XCircle, Clock, TrendingUp, CalendarDays } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const profiles = [
  {
    icon: XCircle,
    title: "Você já investiu em agência",
    text: "Fez tráfego, gestão de redes, contratou alguém. Gastou, não viu resultado, perdeu a confiança. O problema não era o canal — era a falta de método.",
  },
  {
    icon: Clock,
    title: "Você vive na operação",
    text: "Está sempre apagando incêndio. Marketing fica em segundo plano. Precisa de algo que funcione com o mínimo de demanda do seu lado.",
  },
  {
    icon: TrendingUp,
    title: "Você quer crescimento previsível",
    text: "Seu negócio funciona, mas cresce de forma irregular. Você sabe que tem potencial — falta estrutura para escalar sem depender da sorte.",
  },
];

const ParaQuemSection = () => (
  <AnimatedSection className="section-light py-20 lg:py-28">
    <div className="container mx-auto px-6">
      <div className="text-center mb-14">
        <span className="animate-fade-in inline-block font-body font-medium text-sm tracking-widest uppercase text-accent-blue mb-3">
          Para quem é o Método MDS
        </span>
        <h2 className="animate-fade-in font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl" style={{ transitionDelay: "0.1s" }}>
          Feito para quem já tentou e não funcionou.
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
        {profiles.map((p, i) => (
          <div key={p.title} className="animate-fade-in card-light" style={{ transitionDelay: `${0.15 * (i + 1)}s` }}>
            <p.icon size={32} className="text-accent-blue mb-4" />
            <h3 className="font-display font-bold text-lg mb-3">{p.title}</h3>
            <p className="font-body font-light text-sm leading-relaxed opacity-80">{p.text}</p>
          </div>
        ))}
      </div>

      <div className="animate-fade-in text-center" style={{ transitionDelay: "0.6s" }}>
        <a href="#agendar" className="btn-accent-dark-cta">
          <CalendarDays size={18} /> Agendar Consultoria Gratuita
        </a>
      </div>
    </div>
  </AnimatedSection>
);

export default ParaQuemSection;
