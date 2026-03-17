import AnimatedSection from "./AnimatedSection";

const etapas = [
  { num: "1", title: "Diagnóstico", desc: "Entendemos profundamente o seu negócio: dores, oportunidades, canais ativos e o que está sendo desperdiçado." },
  { num: "2", title: "Planejamento", desc: "Construímos o plano estratégico com metas claras, canais priorizados e cronograma de execução." },
  { num: "3", title: "Execução", desc: "Implementamos, ativamos os canais e colocamos a máquina de aquisição no ar com acompanhamento diário." },
  { num: "4", title: "Otimização contínua", desc: "Monitoramos dados, testamos variações e otimizamos cada semana. O sistema melhora com o tempo." },
];

const ProcessoSection = () => (
  <AnimatedSection className="section-white py-20 lg:py-28">
    <div className="container mx-auto px-6">
      <div className="text-center mb-14">
        <span className="animate-fade-in inline-block font-body font-medium text-sm tracking-widest uppercase text-accent-blue mb-3">
          Como trabalhamos
        </span>
        <h2 className="animate-fade-in font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl" style={{ transitionDelay: "0.1s" }}>
          4 etapas. Do diagnóstico ao crescimento.
        </h2>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Desktop horizontal */}
        <div className="hidden md:grid grid-cols-4 gap-6 relative">
          <div className="absolute top-8 left-[12.5%] right-[12.5%] h-0.5" style={{ backgroundColor: "hsl(var(--accent-blue) / 0.2)" }} />
          {etapas.map((e, i) => (
            <div key={e.num} className="animate-fade-in relative text-center" style={{ transitionDelay: `${0.15 * (i + 1)}s` }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 font-display font-extrabold text-xl relative z-10"
                style={{ backgroundColor: "hsl(var(--accent-blue))", color: "#fff" }}>
                {e.num}
              </div>
              <h3 className="font-display font-bold text-base mb-2">{e.title}</h3>
              <p className="font-body font-light text-sm opacity-70 leading-relaxed">{e.desc}</p>
            </div>
          ))}
        </div>

        {/* Mobile vertical */}
        <div className="md:hidden space-y-8">
          {etapas.map((e, i) => (
            <div key={e.num} className="animate-fade-in flex gap-4" style={{ transitionDelay: `${0.15 * (i + 1)}s` }}>
              <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-display font-extrabold text-lg"
                style={{ backgroundColor: "hsl(var(--accent-blue))", color: "#fff" }}>
                {e.num}
              </div>
              <div>
                <h3 className="font-display font-bold text-base mb-1">{e.title}</h3>
                <p className="font-body font-light text-sm opacity-70 leading-relaxed">{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </AnimatedSection>
);

export default ProcessoSection;
