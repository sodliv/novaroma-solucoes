import { Link } from "react-router-dom";
import { ArrowLeft, Users, MessageSquare, Sparkles, BarChart3, Zap, CheckCircle2, BotMessageSquare, CalendarHeart, Send, FileSpreadsheet } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const features = [
  {
    icon: Users,
    title: "Gestão de Clientes",
    desc: "Perfis completos com nome, contato, data de nascimento, documentos e observações — tudo num painel limpo e intuitivo.",
  },
  {
    icon: MessageSquare,
    title: "Mensagens Automáticas",
    desc: "Crie mensagens com título, conteúdo e agendamento. Envie para todos ou clientes específicos — na hora ou no momento certo.",
  },
  {
    icon: CalendarHeart,
    title: "Parabéns Automático",
    desc: "O Rommer lembra o aniversário de cada cliente e envia a mensagem no dia certo, sozinho. Ative ou desative com um clique.",
  },
  {
    icon: BotMessageSquare,
    title: "IA Assistente",
    desc: "Converse com a IA diretamente no sistema ou pelo WhatsApp. Ela conhece seus clientes e responde por você automaticamente.",
  },
  {
    icon: FileSpreadsheet,
    title: "Relatórios Inteligentes",
    desc: "Transforme seus dados de clientes em relatórios PDF ou Excel com um clique. Simples, rápido e profissional.",
  },
  {
    icon: Zap,
    title: "Envio Imediato",
    desc: "Precisa mandar uma mensagem agora? Clique em 'Enviar na hora' e sua mensagem chega em segundos, sem configuração.",
  },
];

const benefits = [
  "Nunca mais esqueça um aniversário ou follow-up",
  "Reduza tarefas repetitivas em até 80% com automação",
  "IA que atende seus clientes no WhatsApp por você",
  "Relatórios prontos para apresentar em segundos",
  "Escale o atendimento sem contratar mais ninguém",
];

const plans = [
  {
    name: "Quinzenal",
    price: "21,97",
    period: "a cada 15 dias",
    highlight: false,
  },
  {
    name: "Mensal",
    price: "35,97",
    period: "por mês",
    highlight: true,
    badge: "Mais vantajoso",
  },
];

const RommerPage = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 md:pt-36 pb-20 md:pb-32 px-6 md:px-8 overflow-hidden">
        {/* Background glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] opacity-10 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at center, hsl(var(--accent)) 0%, transparent 70%)",
          }}
        />

        <div className="container mx-auto max-w-4xl relative">
          <ScrollReveal>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-10"
            >
              <ArrowLeft size={16} />
              Voltar ao início
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shadow-lg">
                <Sparkles className="text-accent-foreground" size={24} />
              </div>
              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-semibold text-primary leading-[1.05]"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                Rommer
              </h1>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={180}>
            <p className="text-2xl md:text-3xl text-foreground font-semibold mb-4 max-w-2xl leading-snug">
              Seus clientes, organizados.{" "}
              <span className="text-accent">Seu negócio, automatizado.</span>
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mb-10">
              Gerencie perfis, envie mensagens automáticas e deixe a IA trabalhar por você — tudo num único lugar, sem complicação.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={260}>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg">
                Quero experimentar
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <a href="#funcionalidades">Ver como funciona</a>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Screenshot placeholder */}
      <section className="px-6 md:px-8 pb-24">
        <div className="container mx-auto max-w-5xl">
          <ScrollReveal>
            <div
              className="w-full rounded-2xl border border-accent/20 bg-secondary/40 flex items-center justify-center"
              style={{ minHeight: "360px" }}
            >
              <p className="text-muted-foreground text-sm tracking-widest uppercase">
                — Imagens do sistema em breve —
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Features */}
      <section id="funcionalidades" className="section-padding bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
          <ScrollReveal className="text-center mb-16">
            <p className="text-sm font-medium tracking-[0.15em] uppercase text-accent mb-3">
              Funcionalidades
            </p>
            <h2
              className="text-3xl md:text-4xl font-semibold text-primary text-balance leading-[1.15]"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Tudo que você precisa, sem o que não precisa
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat, i) => (
              <ScrollReveal key={feat.title} delay={i * 80}>
                <div className="bg-background rounded-xl p-6 card-shadow h-full hover:card-shadow-hover transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center mb-4 transition-colors duration-300">
                    <feat.icon className="text-accent" size={20} />
                  </div>
                  <h3
                    className="text-base font-semibold text-primary mb-2"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    {feat.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feat.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Second screenshot placeholder */}
      <section className="px-6 md:px-8 py-24">
        <div className="container mx-auto max-w-5xl">
          <ScrollReveal>
            <div
              className="w-full rounded-2xl border border-accent/20 bg-secondary/40 flex items-center justify-center"
              style={{ minHeight: "280px" }}
            >
              <p className="text-muted-foreground text-sm tracking-widest uppercase">
                — Imagem da IA em ação em breve —
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-secondary/20">
        <div className="container mx-auto max-w-3xl">
          <ScrollReveal className="text-center mb-12">
            <p className="text-sm font-medium tracking-[0.15em] uppercase text-accent mb-3">
              Resultados
            </p>
            <h2
              className="text-3xl md:text-4xl font-semibold text-primary text-balance leading-[1.15]"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              O que muda no seu negócio
            </h2>
          </ScrollReveal>

          <div className="space-y-3">
            {benefits.map((b, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-background border border-accent/10 hover:border-accent/30 transition-colors duration-300">
                  <CheckCircle2 className="text-accent shrink-0" size={20} />
                  <p className="text-foreground font-medium">{b}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding px-6 md:px-8">
        <div className="container mx-auto max-w-3xl">
          <ScrollReveal className="text-center mb-14">
            <p className="text-sm font-medium tracking-[0.15em] uppercase text-accent mb-3">
              Planos
            </p>
            <h2
              className="text-3xl md:text-4xl font-semibold text-primary leading-[1.15]"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Simples e transparente
            </h2>
            <p className="text-muted-foreground mt-3 text-base">
              Sem letras miúdas. Cancele quando quiser.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {plans.map((plan, i) => (
              <ScrollReveal key={plan.name} delay={i * 100}>
                <div
                  className={`relative rounded-2xl p-8 flex flex-col gap-6 transition-all duration-300 ${
                    plan.highlight
                      ? "bg-accent text-accent-foreground shadow-xl scale-[1.02]"
                      : "bg-secondary/40 border border-accent/15 hover:border-accent/40"
                  }`}
                >
                  {plan.badge && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-4 py-1 rounded-full">
                      {plan.badge}
                    </span>
                  )}
                  <div>
                    <p
                      className={`text-lg font-semibold mb-1 ${plan.highlight ? "text-accent-foreground" : "text-primary"}`}
                      style={{ fontFamily: "'Cinzel', serif" }}
                    >
                      {plan.name}
                    </p>
                    <div className="flex items-end gap-1">
                      <span className={`text-sm ${plan.highlight ? "text-accent-foreground/80" : "text-muted-foreground"}`}>
                        R$
                      </span>
                      <span
                        className={`text-4xl font-bold leading-none ${plan.highlight ? "text-accent-foreground" : "text-primary"}`}
                      >
                        {plan.price}
                      </span>
                    </div>
                    <p className={`text-sm mt-1 ${plan.highlight ? "text-accent-foreground/70" : "text-muted-foreground"}`}>
                      {plan.period}
                    </p>
                  </div>

                  <button
                    disabled
                    className={`w-full py-3 rounded-xl font-semibold text-sm transition-all cursor-not-allowed opacity-80 ${
                      plan.highlight
                        ? "bg-accent-foreground text-accent"
                        : "bg-accent text-accent-foreground"
                    }`}
                  >
                    Em breve
                  </button>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={300} className="text-center mt-8">
            <p className="text-muted-foreground text-sm">
              Gateway de pagamento disponível em breve.{" "}
              <a href="/#contato" className="text-accent hover:underline">
                Fale conosco para saber mais.
              </a>
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative section-padding px-6 md:px-8 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at center, hsl(var(--accent)) 0%, transparent 70%)",
          }}
        />
        <div className="container mx-auto max-w-2xl text-center relative">
          <ScrollReveal>
            <h2
              className="text-3xl md:text-4xl font-semibold text-primary mb-4 leading-[1.15]"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Pronto para transformar seu atendimento?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Entre em contato e descubra como o Rommer pode trabalhar pelo seu negócio.
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href="/#contato">Fale conosco agora</a>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RommerPage;