import { Instagram, Linkedin, MessageSquare } from "lucide-react";
import logoNegativa from "@/assets/logo-mds-negativa.png";

const FooterSection = () => (
  <footer className="section-dark-deep border-t" style={{ borderColor: "hsl(0 0% 100% / 0.08)" }}>
    <div className="container mx-auto px-6 py-14">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">
        <div>
          <img src={logoNegativa} alt="Mundo Digital Soluções" className="h-28 sm:h-32 mb-3" />
          <p className="font-body font-light text-sm text-off-white">
            Crescimento previsível não é sorte. É método.
          </p>
        </div>
        <div className="flex gap-3">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
            className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
            style={{ backgroundColor: "hsl(0 0% 100% / 0.08)" }}
            aria-label="Instagram">
            <Instagram size={18} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
            className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
            style={{ backgroundColor: "hsl(0 0% 100% / 0.08)" }}
            aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <button
            onClick={() => {
              // Chatwoot toggle - placeholder
              if ((window as any).$chatwoot) {
                (window as any).$chatwoot.toggle();
              } else {
                window.open("https://wa.me/5517992822597", "_blank");
              }
            }}
            className="flex items-center gap-2 px-4 h-10 rounded-full font-body text-sm font-medium transition-colors"
            style={{ backgroundColor: "hsl(var(--accent-blue) / 0.2)", color: "hsl(var(--accent-blue))" }}
          >
            <MessageSquare size={16} />
            Atendimento Online
          </button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8" style={{ borderTop: "1px solid hsl(0 0% 100% / 0.08)" }}>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 font-body text-sm text-off-white">
          <a href="/" className="hover:opacity-100 opacity-70 transition-opacity">Home</a>
          <a href="/metodo-mds" className="hover:opacity-100 opacity-70 transition-opacity">Método MDS</a>
          <a href="#" className="hover:opacity-100 opacity-70 transition-opacity">Cases</a>
          <a href="#" className="hover:opacity-100 opacity-70 transition-opacity">Blog</a>
          <a href="#" className="hover:opacity-100 opacity-70 transition-opacity">Contato</a>
        </nav>
        <div className="font-body text-xs text-off-white opacity-50 space-y-1">
          <p>fabio@mundodigitalsolucoes.com.br · (17) 99188-6725</p>
          <p>© 2025 Mundo Digital Soluções. Todos os direitos reservados.</p>
        </div>
      </div>
    </div>
  </footer>
);

export default FooterSection;
