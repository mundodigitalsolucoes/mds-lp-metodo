import { useState } from "react";
import { ChevronDown } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const faqs = [
  {
    q: "Já tentei agência e não funcionou. Por que a MDS seria diferente?",
    a: "Faz sentido você estar desconfiante — a maioria das agências vende entrega sem método. O que a MDS faz é diferente: antes de qualquer proposta, fazemos um diagnóstico completo do seu negócio. Só depois mostramos como o Método MDS se conecta às suas dores específicas. Se não fizer sentido para você, não fechamos. Simples assim.",
  },
  {
    q: "Preciso ver resultado antes de fechar. Como funciona?",
    a: "É exatamente por isso que oferecemos uma consultoria gratuita de 30 minutos. Você sai com um diagnóstico real do seu negócio e um plano de ação com as prioridades — sem compromisso. Se quiser ver cases antes disso, temos uma ótica que dobrou o faturamento em 8 meses e um evento que gerou 3.000 leads em 1 ano.",
  },
  {
    q: "É caro. Não tenho budget.",
    a: "O investimento em marketing sem método é o mais caro que existe — porque você paga e não sabe o que está gerando. Na consultoria gratuita mapeamos quanto você já investe hoje e o que está sendo desperdiçado. A partir daí montamos uma estrutura que cabe no seu momento.",
  },
  {
    q: "Não tenho tempo para cuidar disso agora.",
    a: "Esse é exatamente o sinal de que você precisa de um sistema, não de mais uma tarefa. O Método MDS foi desenhado para o dono que vive na operação — a execução, o acompanhamento e a otimização ficam com a gente.",
  },
  {
    q: "O que vocês fazem que agência normal não faz?",
    a: "Agência normal entrega serviço. A MDS implanta sistema. Você tem diagnóstico, planejamento estratégico, canais de aquisição, CRM próprio com multicanal WhatsApp + Instagram, funil de vendas e fidelização funcionando juntos — tudo orientado por dados.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <AnimatedSection className="section-dark py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <span className="animate-fade-in inline-block font-body font-medium text-sm tracking-widest uppercase text-accent-blue mb-3">
            Perguntas frequentes
          </span>
          <h2 className="animate-fade-in font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl" style={{ transitionDelay: "0.1s" }}>
            Tudo que você quer saber antes de conversar
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="animate-fade-in" style={{ transitionDelay: `${0.1 * (i + 1)}s` }}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 py-5 px-5 rounded-xl text-left transition-colors"
                  style={{ backgroundColor: isOpen ? "hsl(0 0% 100% / 0.08)" : "hsl(0 0% 100% / 0.03)", borderBottom: "1px solid hsl(0 0% 100% / 0.08)" }}
                >
                  <span className="font-body font-medium text-sm sm:text-base">{faq.q}</span>
                  <ChevronDown size={18} className={`flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                </button>
                <div
                  className="overflow-hidden transition-all duration-400"
                  style={{ maxHeight: isOpen ? "300px" : "0", opacity: isOpen ? 1 : 0, transition: "max-height 0.4s ease, opacity 0.3s ease" }}
                >
                  <p className="font-body font-light text-sm text-off-white leading-relaxed px-5 py-4">{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default FaqSection;
