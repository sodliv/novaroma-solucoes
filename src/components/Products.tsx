import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { MessageSquare, Users, Sparkles, ArrowRight } from "lucide-react";

const Products = () => {
  return (
    <section id="produtos" className="section-padding">
      <div className="container mx-auto">
        <ScrollReveal className="text-center mb-16">
          <p className="text-sm font-medium tracking-[0.15em] uppercase text-accent mb-3">
            Produtos
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-primary text-balance leading-[1.15]">
            Soluções prontas para usar
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Além dos serviços personalizados, oferecemos produtos de uso geral que qualquer empresa pode adotar imediatamente.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="max-w-3xl mx-auto bg-background rounded-lg card-shadow overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-md bg-accent flex items-center justify-center">
                  <Sparkles className="text-accent-foreground" size={20} />
                </div>
                <span className="font-display text-2xl font-semibold text-primary">Rommer</span>
              </div>
              
              <p className="text-lg text-foreground mb-4 font-medium">
                Gerenciamento inteligente de clientes
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Software completo para gerenciar seus clientes com mensagens automáticas e inteligência artificial integrada. 
                Organize contatos, automatize follow-ups e nunca perca uma oportunidade.
              </p>

              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                {[
                  { icon: Users, label: "CRM completo" },
                  { icon: MessageSquare, label: "Mensagens automáticas" },
                  { icon: Sparkles, label: "IA integrada" },
                ].map((feat) => (
                  <div key={feat.label} className="flex items-center gap-3 p-3 rounded-md bg-secondary/60">
                    <feat.icon className="text-accent shrink-0" size={18} />
                    <span className="text-sm font-medium text-foreground">{feat.label}</span>
                  </div>
                ))}
              </div>

              <Button variant="hero" size="lg" asChild>
                <a href="#contato">
                  Saiba mais sobre o Rommer
                  <ArrowRight className="ml-1" size={18} />
                </a>
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Products;
