import { Link } from "react-router-dom";
import { ArrowLeft, Users, MessageSquare, Sparkles, BarChart3, Shield, Zap, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const features = [
  {
    icon: Users,
    title: "CRM Completo",
    desc: "Gerencie todos os seus clientes, leads e oportunidades num único painel organizado e intuitivo.",
  },
  {
    icon: MessageSquare,
    title: "Mensagens Automáticas",
    desc: "Configure follow-ups, lembretes e campanhas que disparam sozinhos no momento certo.",
  },
  {
    icon: Sparkles,
    title: "IA Integrada",
    desc: "Inteligência artificial que sugere ações, qualifica leads e personaliza a comunicação automaticamente.",
  },
  {
    icon: BarChart3,
    title: "Relatórios Inteligentes",
    desc: "Dashboards claros com métricas de conversão, engajamento e desempenho do time.",
  },
  {
    icon: Shield,
    title: "Seguro e Confiável",
    desc: "Dados protegidos com criptografia, backups automáticos e controle de acesso granular.",
  },
  {
    icon: Zap,
    title: "Integração Simples",
    desc: "Conecte-se ao WhatsApp, e-mail, redes sociais e outras ferramentas que você já usa.",
  },
];

const benefits = [
  "Nunca mais perca um follow-up ou oportunidade",
  "Reduza o tempo gasto em tarefas manuais em até 80%",
  "Aumente a taxa de conversão com comunicação personalizada",
  "Tenha visão completa do funil de vendas em tempo real",
  "Escale seu atendimento sem aumentar a equipe",
];

const RommerPage = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-16 md:pb-24 px-6 md:px-8">
        <div className="container mx-auto max-w-4xl">
          <ScrollReveal>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-8"
            >
              <ArrowLeft size={16} />
              Voltar ao início
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
                <Sparkles className="text-accent-foreground" size={24} />
              </div>
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-semibold text-primary leading-[1.1]"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                Rommer
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-foreground/80 font-medium mb-4 max-w-2xl">
              Gerenciamento inteligente de clientes para empresas que não querem perder nenhuma oportunidade.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mb-10">
              O Rommer reúne CRM, automação de mensagens e inteligência artificial num único software.
              Pare de usar planilhas e ferramentas desconectadas — centralize tudo e venda mais.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="/#contato">Solicitar demonstração</a>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <a href="#funcionalidades">Ver funcionalidades</a>
              </Button>
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
              Tudo o que você precisa em um só lugar
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat, i) => (
              <ScrollReveal key={feat.title} delay={i * 80}>
                <div className="bg-background rounded-lg p-6 card-shadow h-full hover:card-shadow-hover transition-shadow duration-300">
                  <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center mb-4">
                    <feat.icon className="text-accent" size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2" style={{ fontFamily: "'Cinzel', serif" }}>
                    {feat.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feat.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="container mx-auto max-w-3xl">
          <ScrollReveal className="text-center mb-12">
            <p className="text-sm font-medium tracking-[0.15em] uppercase text-accent mb-3">
              Resultados
            </p>
            <h2
              className="text-3xl md:text-4xl font-semibold text-primary text-balance leading-[1.15]"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Por que escolher o Rommer?
            </h2>
          </ScrollReveal>

          <div className="space-y-4">
            {benefits.map((b, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary/40">
                  <CheckCircle2 className="text-accent shrink-0 mt-0.5" size={20} />
                  <p className="text-foreground font-medium">{b}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={400} className="text-center mt-12">
            <Button variant="hero" size="lg" asChild>
              <a href="/#contato">Fale conosco e comece agora</a>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RommerPage;
