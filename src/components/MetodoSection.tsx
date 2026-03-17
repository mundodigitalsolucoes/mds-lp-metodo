import { Search, Map, Zap, BarChart2, Filter, Heart } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const pilares = [
  { icon: Search, num: "01", title: "Benchmarking", desc: "Análise de concorrentes, diferenciais e oportunidades de mercado com dados reais." },
  { icon: Map, num: "02", title: "Planejamento Estratégico", desc: "ICP, persona, SWOT, metas SMART e mapa de palavras-chave para os 3 horizontes." },
  { icon: Zap, num: "03", title: "Canais de Aquisição", desc: "Ativação dos canais certos: Instagram, Google, WhatsApp, tráfego pago, SEO local." },
  { icon: BarChart2, num: "04", title: "Dados (GCAO)", desc: "Gerar → Coletar → Analisar → Otimizar. Toda decisão orientada por métricas reais." },
  { icon: Filter, num: "05", title: "Segmentação de Listas", desc: "Leads classificados e funis específicos por segmento via WhatsApp e e-mail." },
  { icon: Heart, num: "06", title: "Fidelização", desc: "Programa de fidelidade, NPS, comunidade VIP e campanhas de reativação para aumentar LTV." },
];

const MetodoSection = () => (
  <AnimatedSection className="section-dark py-20 lg:py-28">
    <div className="container mx-auto px-6">
      <div className="text-center mb-14">
        <span className="animate-fade-in inline-block font-body font-medium text-sm tracking-widest uppercase text-accent-blue mb-3">
          Nossa metodologia exclusiva
        </span>
        <h2 className="animate-fade-in font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-4" style={{ transitionDelay: "0.1s" }}>
          O Método MDS de Marketing e Vendas
        </h2>
        <p className="animate-fade-in font-body font-light text-base sm:text-lg text-off-white max-w-2xl mx-auto" style={{ transitionDelay: "0.2s" }}>
          6 pilares integrados. Cada um alimenta o próximo. Tudo funcionando como sistema.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
        {pilares.map((p, i) => (
          <div key={p.num} className="animate-fade-in card-mds" style={{ transitionDelay: `${0.1 * (i + 1)}s` }}>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center" style={{ backgroundColor: "hsl(var(--accent-blue) / 0.15)" }}>
                <p.icon size={20} className="text-accent-blue" />
              </div>
              <div>
                <span className="font-body text-xs font-medium text-accent-blue tracking-wider">PILAR {p.num}</span>
                <h3 className="font-display font-bold text-lg mt-1 mb-2">{p.title}</h3>
                <p className="font-body font-light text-sm text-off-white leading-relaxed">{p.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default MetodoSection;
