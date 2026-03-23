import ScrollReveal from "@/components/ScrollReveal";
import { Mail, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contato" className="section-padding">
      <div className="container mx-auto max-w-3xl">
        <ScrollReveal className="text-center mb-12">
          <p className="text-sm font-medium tracking-[0.15em] uppercase text-accent mb-3">
            Contato
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-primary text-balance leading-[1.15]">
            Vamos conversar sobre{" "}
            <br className="hidden md:block" />
            o seu negócio
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Entre em contato e descubra como a tecnologia pode simplificar sua rotina e acelerar seus resultados.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="bg-background rounded-lg card-shadow p-8 md:p-12 space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <a
                href="mailto:novaromasolutions@outlook.com"
                className="flex items-start gap-4 p-4 rounded-md bg-secondary/50 hover:bg-secondary transition-colors duration-200 group"
              >
                <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                  <Mail className="text-accent" size={18} />
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">E-mail</p>
                  <p className="text-sm font-medium text-foreground break-all">novaromasolutions@outlook.com</p>
                </div>
              </a>

              <a
                href="https://wa.me/5541974001500"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 rounded-md bg-secondary/50 hover:bg-secondary transition-colors duration-200 group"
              >
                <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                  <Phone className="text-accent" size={18} />
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Telefone / WhatsApp</p>
                  <p className="text-sm font-medium text-foreground">+55 (41) 97400-1500</p>
                </div>
              </a>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-md bg-secondary/50">
              <Clock className="text-accent shrink-0" size={18} />
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Atendimento:</span> Segunda a Sábado, 9h às 18h
              </p>
            </div>

            <div className="pt-4 text-center">
              <Button variant="hero" size="lg" asChild>
                <a href="https://wa.me/5541974001500" target="_blank" rel="noopener noreferrer">
                  Iniciar conversa no WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Contact;
