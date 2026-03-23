import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding pt-32 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
        backgroundSize: '48px 48px',
      }} />
      
      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-accent/40" />

      <div className="container mx-auto text-center relative z-10">
        <p
          className="text-sm md:text-base font-medium tracking-[0.2em] uppercase text-accent mb-6 opacity-0 animate-fade-up"
          style={{ animationDelay: "100ms" }}
        >
          Tecnologia que trabalha por você
        </p>

        <h1
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-primary leading-[1.1] text-balance max-w-4xl mx-auto mb-8 opacity-0 animate-fade-up"
          style={{ animationDelay: "250ms" }}
        >
          Eliminamos o trabalho complexo.{" "}
          <span className="text-accent">Você escala.</span>
        </h1>

        <p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed opacity-0 animate-fade-up"
          style={{ animationDelay: "400ms" }}
        >
          Automação inteligente, agentes de IA e softwares sob medida para
          empresários que querem ganhar tempo, precisão e produtividade.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up"
          style={{ animationDelay: "550ms" }}
        >
          <Button variant="hero" size="lg" asChild>
            <a href="#contato">
              Agende uma conversa
              <ArrowRight className="ml-1" size={18} />
            </a>
          </Button>
          <Button variant="hero-outline" size="lg" asChild>
            <a href="#servicos">Conheça nossos serviços</a>
          </Button>
        </div>

        {/* Stats */}
        <div
          className="mt-20 grid grid-cols-3 gap-8 max-w-xl mx-auto opacity-0 animate-fade-up"
          style={{ animationDelay: "700ms" }}
        >
          {[
            { value: "24h", label: "Atendimento autônomo" },
            { value: "100%", label: "Personalizado" },
            { value: "3x", label: "Mais produtividade" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-2xl md:text-3xl font-semibold text-accent">{stat.value}</p>
              <p className="text-xs md:text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
