import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, Users, MessageSquare, Sparkles, BarChart3, Zap, CheckCircle2, BotMessageSquare, CalendarHeart, FileSpreadsheet, ChevronDown } from "lucide-react";
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

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: { x: number; y: number; r: number; dx: number; dy: number; alpha: number }[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 55; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.4 + 0.3,
        dx: (Math.random() - 0.5) * 0.28,
        dy: (Math.random() - 0.5) * 0.28,
        alpha: Math.random() * 0.45 + 0.08,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(190,100,20,${p.alpha})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.55 }}
    />
  );
}

const RommerPage = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="min-h-screen overflow-x-hidden"
      style={{ background: "linear-gradient(160deg, #0d0700 0%, #1a0c02 40%, #110800 100%)", color: "#f0e6d3" }}
    >
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes glowPulse {
          0%,100% { box-shadow: 0 0 24px 4px rgba(180,90,10,0.35); }
          50% { box-shadow: 0 0 52px 14px rgba(220,120,20,0.6); }
        }
        @keyframes float {
          0%,100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes bounceSlow {
          0%,100% { transform: translateY(0); opacity: 0.6; }
          50% { transform: translateY(9px); opacity: 0.25; }
        }
        @keyframes ringExpand {
          0% { transform: scale(0.85); opacity: 0.65; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        .anim-fade-up { animation: fadeUp 0.85s ease both; }
        .d1 { animation-delay: 0.1s; }
        .d2 { animation-delay: 0.25s; }
        .d3 { animation-delay: 0.42s; }
        .d4 { animation-delay: 0.62s; }
        .d5 { animation-delay: 0.80s; }
        .glow-pulse { animation: glowPulse 2.6s ease-in-out infinite; }
        .float-el { animation: float 3.6s ease-in-out infinite; }
        .bounce-arrow { animation: bounceSlow 1.7s ease-in-out infinite; }
        .ring-a { animation: ringExpand 2.2s ease-out infinite; }
        .ring-b { animation: ringExpand 2.2s ease-out infinite; animation-delay: 0.75s; }

        .card-r {
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(180,90,10,0.17);
          backdrop-filter: blur(8px);
          transition: border-color 0.3s, transform 0.3s, box-shadow 0.3s;
        }
        .card-r:hover {
          border-color: rgba(210,110,20,0.5);
          transform: translateY(-5px);
          box-shadow: 0 16px 44px rgba(160,70,0,0.2);
        }
        .divider-line {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(200,110,20,0.45), transparent);
        }
        .text-glow { text-shadow: 0 0 48px rgba(220,130,20,0.38); }
        .price-card-hot {
          background: linear-gradient(135deg, #c05000 0%, #e07820 55%, #c05000 100%);
          box-shadow: 0 10px 40px rgba(190,80,0,0.45);
        }
      `}</style>

      {/* Sticky nav wrapper */}
      <div
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
        style={scrolled ? { background: "rgba(13,7,0,0.88)", backdropFilter: "blur(14px)", borderBottom: "1px solid rgba(180,90,10,0.15)" } : {}}
      >
        <Navbar />
      </div>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-16 overflow-hidden">
        <ParticleCanvas />

        {/* Glow orbs */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(150,65,0,0.17) 0%, transparent 68%)" }} />
        <div className="absolute bottom-10 left-1/4 w-[350px] h-[350px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(110,45,0,0.1) 0%, transparent 70%)" }} />

        {/* Back */}
        <div className="absolute top-28 left-6 md:left-12 anim-fade-up">
          <Link to="/" className="inline-flex items-center gap-2 text-sm transition-opacity opacity-40 hover:opacity-90"
            style={{ color: "#d4956a" }}>
            <ArrowLeft size={14} /> Voltar
          </Link>
        </div>

        {/* Icon with expanding rings */}
        <div className="relative mb-8 float-el anim-fade-up">
          <div className="ring-a absolute inset-[-14px] rounded-2xl border-2 pointer-events-none"
            style={{ borderColor: "rgba(200,100,10,0.38)" }} />
          <div className="ring-b absolute inset-[-14px] rounded-2xl border pointer-events-none"
            style={{ borderColor: "rgba(200,100,10,0.22)" }} />
          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center glow-pulse"
            style={{ background: "linear-gradient(135deg, #7a3200, #c85e10)" }}
          >
            <Sparkles size={36} color="#fff5ee" />
          </div>
        </div>

        <h1
          className="anim-fade-up d1 text-6xl md:text-8xl font-black leading-none mb-5 text-glow"
          style={{ fontFamily: "'Cinzel', serif", color: "#f5e0c8" }}
        >
          Rommer
        </h1>

        <p className="anim-fade-up d2 text-xl md:text-2xl font-medium mb-2" style={{ color: "#c88050" }}>
          Seus clientes, organizados.
        </p>
        <p className="anim-fade-up d2 text-xl md:text-2xl font-bold mb-8" style={{ color: "#f0d0b0" }}>
          Seu negócio,{" "}
          <span style={{ color: "#e07828" }}>automatizado.</span>
        </p>

        <p
          className="anim-fade-up d3 text-base md:text-lg max-w-lg mb-12 leading-relaxed"
          style={{ color: "rgba(210,175,140,0.65)" }}
        >
          CRM, mensagens automáticas e IA integrada —
          <br className="hidden md:block" /> tudo num único sistema, simples e poderoso.
        </p>

        <div className="anim-fade-up d4 flex flex-wrap gap-4 justify-center mb-16">
          <button
            className="glow-pulse px-9 py-4 rounded-xl font-black text-sm tracking-wide transition-transform hover:scale-105 active:scale-95"
            style={{
              background: "linear-gradient(135deg, #aa4500, #d86818)",
              color: "#fff8f0",
              fontFamily: "'Cinzel', serif",
              letterSpacing: "0.06em",
            }}
          >
            Quero ter acesso!
          </button>
          <a href="#funcionalidades">
            <button
              className="px-9 py-4 rounded-xl font-semibold text-sm transition-all hover:scale-105"
              style={{
                background: "rgba(255,255,255,0.035)",
                border: "1px solid rgba(190,90,10,0.38)",
                color: "#d08858",
                fontFamily: "'Cinzel', serif",
                letterSpacing: "0.05em",
              }}
            >
              Ver como funciona
            </button>
          </a>
        </div>

        <a href="#funcionalidades" className="bounce-arrow">
          <ChevronDown size={30} style={{ color: "#b87040" }} />
        </a>
      </section>

      {/* ── SCREENSHOT 1 ─────────────────────────────────────── */}
      <section className="px-6 md:px-16 pb-28">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div
              className="w-full rounded-2xl flex items-center justify-center"
              style={{
                minHeight: "360px",
                background: "rgba(255,255,255,0.018)",
                border: "1px solid rgba(180,88,10,0.18)",
                backdropFilter: "blur(6px)",
              }}
            >
              <p className="text-xs tracking-[0.22em] uppercase" style={{ color: "rgba(180,115,60,0.45)" }}>
                — Imagens do sistema em breve —
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="divider-line max-w-3xl mx-auto mb-28" />

      {/* ── FEATURES ─────────────────────────────────────────── */}
      <section id="funcionalidades" className="px-6 md:px-16 pb-28">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-xs font-bold tracking-[0.28em] uppercase mb-4" style={{ color: "#b86828" }}>
                Funcionalidades
              </p>
              <h2
                className="text-3xl md:text-5xl font-black"
                style={{ fontFamily: "'Cinzel', serif", color: "#f0ddc5" }}
              >
                Tudo que você precisa,{" "}
                <span style={{ color: "#d07028" }}>sem o que não precisa</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feat, i) => (
              <ScrollReveal key={feat.title} delay={i * 80}>
                <div className="card-r rounded-xl p-6 h-full group cursor-default">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                    style={{ background: "rgba(170,75,0,0.18)" }}
                  >
                    <feat.icon size={20} style={{ color: "#d07028" }} />
                  </div>
                  <h3 className="text-sm font-bold mb-2" style={{ fontFamily: "'Cinzel', serif", color: "#f0ddc5" }}>
                    {feat.title}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(195,155,105,0.68)" }}>
                    {feat.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="divider-line max-w-3xl mx-auto mb-28" />

      {/* ── SCREENSHOT 2 ─────────────────────────────────────── */}
      <section className="px-6 md:px-16 pb-28">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div
              className="w-full rounded-2xl flex items-center justify-center"
              style={{
                minHeight: "250px",
                background: "rgba(255,255,255,0.018)",
                border: "1px solid rgba(180,88,10,0.18)",
              }}
            >
              <p className="text-xs tracking-[0.22em] uppercase" style={{ color: "rgba(180,115,60,0.45)" }}>
                — IA em ação — em breve —
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="divider-line max-w-3xl mx-auto mb-28" />

      {/* ── BENEFITS ─────────────────────────────────────────── */}
      <section className="px-6 md:px-16 pb-28">
        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-xs font-bold tracking-[0.28em] uppercase mb-4" style={{ color: "#b86828" }}>
                Resultados
              </p>
              <h2
                className="text-3xl md:text-5xl font-black"
                style={{ fontFamily: "'Cinzel', serif", color: "#f0ddc5" }}
              >
                O que muda no{" "}
                <span style={{ color: "#d07028" }}>seu negócio</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-3">
            {benefits.map((b, i) => (
              <ScrollReveal key={i} delay={i * 65}>
                <div
                  className="flex items-center gap-4 px-5 py-4 rounded-xl transition-all duration-300 hover:translate-x-2"
                  style={{
                    background: "rgba(255,255,255,0.022)",
                    border: "1px solid rgba(175,78,0,0.2)",
                  }}
                >
                  <CheckCircle2 size={17} style={{ color: "#d07028", flexShrink: 0 }} />
                  <p className="text-sm font-medium" style={{ color: "#e8ccaa" }}>{b}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="divider-line max-w-3xl mx-auto mb-28" />

      {/* ── PLANS ────────────────────────────────────────────── */}
      <section className="px-6 md:px-16 pb-28">
        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-xs font-bold tracking-[0.28em] uppercase mb-4" style={{ color: "#b86828" }}>
                Planos
              </p>
              <h2
                className="text-3xl md:text-5xl font-black mb-3"
                style={{ fontFamily: "'Cinzel', serif", color: "#f0ddc5" }}
              >
                Simples e transparente
              </h2>
              <p className="text-sm" style={{ color: "rgba(195,150,100,0.55)" }}>
                Sem letras miúdas. Cancele quando quiser.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {plans.map((plan, i) => (
              <ScrollReveal key={plan.name} delay={i * 100}>
                <div
                  className={`relative rounded-2xl p-8 flex flex-col gap-6 transition-all duration-300 ${
                    plan.highlight ? "price-card-hot" : "card-r hover:-translate-y-1"
                  }`}
                >
                  {plan.badge && (
                    <span
                      className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-black px-4 py-1 rounded-full"
                      style={{ background: "#180a01", color: "#e07828", border: "1px solid rgba(180,88,10,0.5)" }}
                    >
                      {plan.badge}
                    </span>
                  )}
                  <div>
                    <p
                      className="text-base font-black mb-2"
                      style={{ fontFamily: "'Cinzel', serif", color: plan.highlight ? "#fff5ec" : "#f0ddc5" }}
                    >
                      {plan.name}
                    </p>
                    <div className="flex items-end gap-1">
                      <span className="text-sm mb-1" style={{ color: plan.highlight ? "rgba(255,235,210,0.65)" : "rgba(195,145,90,0.65)" }}>R$</span>
                      <span className="text-5xl font-black leading-none" style={{ color: plan.highlight ? "#fff5ec" : "#f0ddc5" }}>
                        {plan.price}
                      </span>
                    </div>
                    <p className="text-xs mt-1" style={{ color: plan.highlight ? "rgba(255,235,210,0.55)" : "rgba(175,125,75,0.55)" }}>
                      {plan.period}
                    </p>
                  </div>
                  <button
                    disabled
                    className="w-full py-3 rounded-xl font-bold text-sm cursor-not-allowed"
                    style={{
                      background: plan.highlight ? "rgba(255,255,255,0.14)" : "rgba(175,75,0,0.18)",
                      color: plan.highlight ? "#fff5ec" : "#c87028",
                      border: plan.highlight ? "none" : "1px solid rgba(175,75,0,0.3)",
                    }}
                  >
                    Em breve
                  </button>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={300}>
            <p className="text-center text-xs mt-6" style={{ color: "rgba(175,125,75,0.45)" }}>
              Gateway de pagamento em breve.{" "}
              <a href="/#contato" style={{ color: "#b86828" }} className="hover:underline">
                Fale conosco para saber mais.
              </a>
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────── */}
      <section className="relative px-6 md:px-16 py-32 overflow-hidden text-center">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, rgba(150,62,0,0.14) 0%, transparent 68%)" }}
        />
        <ScrollReveal>
          <h2
            className="text-3xl md:text-5xl font-black mb-5 text-glow"
            style={{ fontFamily: "'Cinzel', serif", color: "#f0ddc5" }}
          >
            Pronto para transformar<br />seu atendimento?
          </h2>
          <p className="text-base mb-10 max-w-md mx-auto" style={{ color: "rgba(195,155,105,0.6)" }}>
            Entre em contato e descubra como o Rommer pode trabalhar pelo seu negócio.
          </p>
          <a href="/#contato">
            <button
              className="glow-pulse px-10 py-4 rounded-xl font-black text-sm tracking-wide transition-transform hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #aa4500, #d86818)",
                color: "#fff8f0",
                fontFamily: "'Cinzel', serif",
                letterSpacing: "0.06em",
              }}
            >
              Fale conosco agora
            </button>
          </a>
        </ScrollReveal>
      </section>

      <Footer />
    </div>
  );
};

export default RommerPage;