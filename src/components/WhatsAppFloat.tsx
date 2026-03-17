import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => (
  <a
    href="https://wa.me/5517992822597"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full px-5 py-3.5 text-sm font-medium shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
    style={{ backgroundColor: "#25D366", color: "#fff" }}
    aria-label="Falar no WhatsApp"
  >
    <MessageCircle size={22} fill="white" strokeWidth={0} />
    <span className="hidden sm:inline font-body">Falar no WhatsApp</span>
  </a>
);

export default WhatsAppFloat;
