import { MessageCircle, Play } from "lucide-react";
import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

const cases = [
  {
    name: "Montalvão Classic",
    video: "/videos/daniel-montalvao.mp4",
  },
  {
    name: "Ótica São Paulo",
    video: "/videos/victor-agrelli.mp4",
  },
  {
    name: "Chopp Brasser Rio Preto",
    video: "/videos/chopp-brasser.mp4",
  },
];

const VideoCard = ({ c, i }: { c: typeof cases[0]; i: number }) => {
  const [playing, setPlaying] = useState(false);

  return (
    <div key={c.name} className="animate-fade-in flex flex-col" style={{ transitionDelay: `${0.15 * (i + 1)}s` }}>
      <div className="rounded-2xl overflow-hidden relative" style={{ backgroundColor: "hsl(var(--royal))" }}>
        <div className="px-3 py-2">
          <span className="font-body text-xs font-medium text-off-white">{c.name}</span>
        </div>
        <div className="relative aspect-[9/16] max-h-[480px] mx-auto">
          <video
            src={c.video}
            className="w-full h-full object-cover"
            controls={playing}
            playsInline
            preload="metadata"
            onPlay={() => setPlaying(true)}
          />
          {!playing && (
            <button
              onClick={() => {
                const video = document.querySelector(`video[src="${c.video}"]`) as HTMLVideoElement;
                video?.play();
                setPlaying(true);
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: "hsl(var(--accent-blue))" }}>
                <Play size={28} fill="white" className="ml-1" />
              </div>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

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

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
        {cases.map((c, i) => (
          <VideoCard key={c.name} c={c} i={i} />
        ))}
      </div>

      <div className="animate-fade-in text-center" style={{ transitionDelay: "0.6s" }}>
        <a href="https://wa.me/5517992822597" target="_blank" rel="noopener noreferrer" className="btn-accent-cta text-lg">
          <MessageCircle size={20} /> Fale com nossos especialistas
        </a>
      </div>
    </div>
  </AnimatedSection>
);

export default CasesSection;
