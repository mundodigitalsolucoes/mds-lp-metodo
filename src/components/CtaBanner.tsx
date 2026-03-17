import { ArrowRight } from "lucide-react";

const CtaBanner = () => (
  <div className="cta-banner py-4">
    <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-3 text-center text-sm sm:text-base">
      <span className="font-body font-light">
        Pronto para parar de experimentar e começar a crescer com método?
      </span>
      <a
        href="https://wa.me/5517992822597"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 font-medium underline underline-offset-4 transition-opacity hover:opacity-80"
      >
        Falar no WhatsApp <ArrowRight size={16} />
      </a>
    </div>
  </div>
);

export default CtaBanner;
