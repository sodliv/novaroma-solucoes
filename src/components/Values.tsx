import ScrollReveal from "@/components/ScrollReveal";
import { Target, Award, Eye } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Funcionalidade",
    description: "Cada solução existe para resolver um problema real. Sem firula, sem desperdício — só o que funciona.",
  },
  {
    icon: Award,
    title: "Excelência",
    description: "Entregamos com o mais alto padrão de qualidade. Cada detalhe importa, cada processo é refinado.",
  },
  {
    icon: Eye,
    title: "Verdade",
    description: "Transparência total. Falamos o que fazemos, fazemos o que falamos. Sem promessas vazias.",
  },
];

const Values = () => {
  return (
    <section id="valores" className="section-padding bg-primary text-primary-foreground">
      <div className="container mx-auto">
        <ScrollReveal className="text-center mb-16">
          <p className="text-sm font-medium tracking-[0.15em] uppercase text-accent mb-3">
            Nossos valores
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.15] text-balance">
            O que nos guia
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {values.map((value, i) => (
            <ScrollReveal key={value.title} delay={i * 100} className="text-center">
              <div className="w-14 h-14 rounded-full border border-accent/30 flex items-center justify-center mx-auto mb-6">
                <value.icon className="text-accent" size={24} />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-primary-foreground/70 leading-relaxed text-sm">
                {value.description}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
