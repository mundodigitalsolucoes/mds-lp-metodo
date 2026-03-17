import { MessageCircle, Quote } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const cases = [
  {
    name: "Ótica São Paulo",
    nicho: "Varejo / Saúde Visual",
    resultado: "Faturamento 2x em 8 meses",
    texto: "A Ótica São Paulo chegou com presença digital descoordenada. Fizemos o rebranding completo e estruturamos toda a jornada do cliente. Em 8 meses o faturamento dobrou. Hoje são 3 anos de parceria.",
    badge: "⭐ 3 anos de parceria",
  },
  {
    name: "Chopp Brasser",
    nicho: "Food & Beverage — B2C + B2B",
    resultado: "Lançamento do zero ao mercado",
    texto: "Construímos tudo do zero — identidade, site, tráfego pago e redes sociais. O Chopp Brasser entrou no mercado de Rio Preto com estrutura desde o primeiro dia.",
    badge: "🚀 Lançamento estruturado",
  },
  {
    name: "Montalvão Classic",
    nicho: "Eventos / Fisiculturismo",
    resultado: "3.000 leads + 800 pessoas",
    texto: "Em 1 ano de parceria geramos mais de 3.000 leads qualificados e levamos 800 pessoas ao maior campeonato de fisiculturismo da região. Tráfego, conteúdo e funil funcionando juntos.",
    badge: "🏆 Maior evento da região",
  },
];

const CasesSection = () => (
  <AnimatedSection className="section-dark-deep py-20 lg:py-28">
    <div className="container mx-auto px-6">
      <div className="text-center mb-14">
        <span className="animate-fade-in inline-block font-body font-medium text-sm tracking-widest uppercase text-accent-blue mb-3">
          Resultados reais
        </span>
        <h2 className="animate-fade-in font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl" style={{ transitionDelay: "0.1s" }}>
          Clientes que cresceram com o Método MDS
        </h2>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
        {cases.map((c, i) => (
          <div key={c.name} className="animate-fade-in card-mds flex flex-col" style={{ transitionDelay: `${0.15 * (i + 1)}s` }}>
            <Quote size={24} className="text-accent-blue mb-3 opacity-50" />
            <span className="font-body text-xs text-off-white mb-1">{c.nicho}</span>
            <h3 className="font-display font-bold text-lg mb-1">{c.name}</h3>
            <div className="font-display font-extrabold text-xl text-accent-blue mb-3">{c.resultado}</div>
            <p className="font-body font-light text-sm text-off-white leading-relaxed flex-1 mb-4">{c.texto}</p>
            <span className="inline-block font-body text-xs font-medium px-3 py-1.5 rounded-full"
              style={{ backgroundColor: "hsl(var(--accent-blue) / 0.15)", color: "hsl(var(--accent-blue))" }}>
              {c.badge}
            </span>
          </div>
        ))}
      </div>

      <div className="animate-fade-in text-center" style={{ transitionDelay: "0.6s" }}>
        <p className="font-display font-bold text-xl mb-5">Quer ser o próximo case?</p>
        <a href="https://wa.me/5517992822597" target="_blank" rel="noopener noreferrer" className="btn-primary-cta">
          <MessageCircle size={18} /> Conversar com a MDS
        </a>
      </div>
    </div>
  </AnimatedSection>
);

export default CasesSection;
