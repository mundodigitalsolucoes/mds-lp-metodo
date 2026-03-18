import { useState } from "react";
import { Send } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const FormSection = () => {
  const [form, setForm] = useState({ nome: "", email: "", whatsapp: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to WhatsApp with the form data
    const msg = encodeURIComponent(
      `Olá! Meu nome é ${form.nome}, meu email é ${form.email} e meu WhatsApp é ${form.whatsapp}. Gostaria de receber conteúdo gratuito de Marketing e Vendas.`
    );
    window.open(`https://wa.me/5517992822597?text=${msg}`, "_blank");
    setSubmitted(true);
  };

  return (
    <AnimatedSection className="section-dark py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <div className="max-w-lg mx-auto text-center">
          <span className="animate-fade-in inline-block font-body font-medium text-sm tracking-widest uppercase text-accent-blue mb-3">
            ✅ Conteúdo Gratuito
          </span>
          <h2 className="animate-fade-in font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl mb-8" style={{ transitionDelay: "0.1s" }}>
            Receba Nosso Conteúdo Gratuito de Marketing e Vendas
          </h2>

          {submitted ? (
            <div className="animate-fade-in visible">
              <p className="font-body text-lg text-accent-blue font-medium">Obrigado! Entraremos em contato em breve.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="animate-fade-in space-y-4" style={{ transitionDelay: "0.2s" }}>
              <input
                type="text"
                placeholder="Nome"
                required
                value={form.nome}
                onChange={(e) => setForm({ ...form, nome: e.target.value })}
                className="w-full px-4 py-3 rounded-lg font-body text-sm"
                style={{ backgroundColor: "hsl(0 0% 100%)", color: "hsl(var(--navy))" }}
              />
              <input
                type="email"
                placeholder="Seu Email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg font-body text-sm"
                style={{ backgroundColor: "hsl(0 0% 100%)", color: "hsl(var(--navy))" }}
              />
              <input
                type="tel"
                placeholder="WhatsApp"
                required
                value={form.whatsapp}
                onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                className="w-full px-4 py-3 rounded-lg font-body text-sm"
                style={{ backgroundColor: "hsl(0 0% 100%)", color: "hsl(var(--navy))" }}
              />
              <button type="submit" className="btn-accent-cta w-full justify-center text-lg py-4">
                <Send size={18} /> Quero receber conteúdo gratuito
              </button>
            </form>
          )}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default FormSection;
