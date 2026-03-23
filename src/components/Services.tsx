import ScrollReveal from "@/components/ScrollReveal";
import { Bot, Cog, Code2 } from "lucide-react";

const services = [
  {
    icon: Cog,
    title: "Automação de Fluxos",
    subtitle: "Robôs inteligentes",
    description:
      "Automatizamos qualquer fluxo web — tarefas repetitivas que envolvem plataformas e sites são eliminadas completamente. Seus processos rodam sozinhos, sem erro, sem atraso.",
  },
  {
    icon: Bot,
    title: "Agentes de IA Humanizados",
    subtitle: "Atendimento 24h",
    description:
      "Agentes treinados especificamente para o seu negócio. Atendem, respondem e executam tarefas de forma autônoma no WhatsApp, Instagram e outras redes — dia e noite.",
  },
  {
    icon: Code2,
    title: "Criação de Softwares",
    subtitle: "Soluções sob medida",
    description:
      "Desenvolvemos softwares personalizados que resolvem problemas específicos da sua operação. Cada ferramenta é projetada para se encaixar perfeitamente no seu fluxo de trabalho.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="section-padding bg-secondary/40">
      <div className="container mx-auto">
        <ScrollReveal className="text-center mb-16">
          <p className="text-sm font-medium tracking-[0.15em] uppercase text-accent mb-3">
            O que fazemos
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-primary text-balance leading-[1.15]">
            Três pilares para transformar{" "}
            <br className="hidden md:block" />
            sua operação
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 100}>
              <div className="group bg-background rounded-lg p-8 lg:p-10 card-shadow hover:card-shadow-hover transition-shadow duration-300 h-full">
                <div className="w-12 h-12 rounded-md bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                  <service.icon className="text-accent" size={24} />
                </div>
                <p className="text-xs font-medium tracking-[0.12em] uppercase text-accent mb-2">
                  {service.subtitle}
                </p>
                <h3 className="font-display text-xl md:text-2xl font-semibold text-primary mb-4 leading-tight">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
