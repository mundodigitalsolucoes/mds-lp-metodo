import { Star } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const reviews = [
  {
    initials: "V.A.",
    bg: "hsl(var(--royal))",
    name: "Victor Agreli",
    text: "Profissionalismo e resultado acima do esperado. A MDS entendeu nosso negócio de verdade e entregou um plano de ação que fez sentido desde o primeiro dia.",
    time: "Google · há 2 semanas",
  },
  {
    initials: "D.H.",
    bg: "hsl(142 50% 40%)",
    name: "Daniel Hamburger",
    text: "Investimos no Método MDS e em 3 meses já víamos diferença real no movimento. Equipe comprometida com resultado, não com relatório bonito.",
    time: "Google · há 1 mês",
  },
  {
    initials: "F.B.",
    bg: "hsl(10 60% 55%)",
    name: "Fernando Broker",
    text: "Finalmente uma agência que diagnóstica antes de vender. Saí da primeira reunião com clareza do que precisava fazer. Fechei na hora.",
    time: "Google · há 3 semanas",
  },
];

const DepoimentosSection = () => (
  <AnimatedSection className="section-light py-20 lg:py-28">
    <div className="container mx-auto px-6">
      <div className="text-center mb-14">
        <span className="animate-fade-in inline-block font-body font-medium text-sm tracking-widest uppercase text-accent-blue mb-3">
          O que dizem sobre a MDS
        </span>
        <h2 className="animate-fade-in font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl" style={{ transitionDelay: "0.1s" }}>
          Avaliações reais de clientes reais
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
        {reviews.map((r, i) => (
          <div key={r.name} className="animate-fade-in card-light" style={{ transitionDelay: `${0.15 * (i + 1)}s` }}>
            <div className="flex gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star key={j} size={16} fill="hsl(45 100% 50%)" stroke="hsl(45 100% 50%)" />
              ))}
            </div>
            <p className="font-body font-light text-sm leading-relaxed mb-5 opacity-80">"{r.text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold"
                style={{ backgroundColor: r.bg, color: "#fff" }}>
                {r.initials}
              </div>
              <div>
                <div className="font-body font-medium text-sm">{r.name}</div>
                <div className="font-body text-xs opacity-50">{r.time}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="animate-fade-in text-center font-body text-sm font-medium opacity-70" style={{ transitionDelay: "0.6s" }}>
        ⭐ 5.0 · Avaliações verificadas no Google
      </p>
    </div>
  </AnimatedSection>
);

export default DepoimentosSection;
