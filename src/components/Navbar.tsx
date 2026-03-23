import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const productCategories = [
  {
    label: "Softwares",
    items: [
      { label: "Rommer", href: "/produtos/softwares/rommer" },
    ],
  },
  {
    label: "Agentes IA",
    items: [
      { label: "Em breve", href: "#" },
    ],
  },
  {
    label: "Robôs",
    items: [
      { label: "Em breve", href: "#" },
    ],
  },
];

const navLinks = [
  { label: "Serviços", href: "/#servicos" },
  { label: "Valores", href: "/#valores" },
  { label: "Contato", href: "/#contato" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [prodOpen, setProdOpen] = useState(false);
  const [activeCat, setActiveCat] = useState(0);
  const [mobileProdOpen, setMobileProdOpen] = useState(false);
  const [mobileCatOpen, setMobileCatOpen] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openDropdown = () => {
    clearTimeout(timeoutRef.current);
    setProdOpen(true);
  };

  const closeDropdown = () => {
    timeoutRef.current = setTimeout(() => setProdOpen(false), 150);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="font-display text-xl md:text-2xl font-semibold text-primary tracking-wide" style={{ fontFamily: "'Cinzel', serif" }}>
          NovaRoma
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.slice(0, 1).map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/70 hover:text-accent transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}

          {/* Produtos dropdown */}
          <div
            className="relative"
            ref={dropdownRef}
            onMouseEnter={openDropdown}
            onMouseLeave={closeDropdown}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-foreground/70 hover:text-accent transition-colors duration-200">
              Produtos
              <ChevronDown size={14} className={`transition-transform duration-200 ${prodOpen ? "rotate-180" : ""}`} />
            </button>

            {prodOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3">
                <div className="bg-popover border border-border rounded-lg card-shadow min-w-[340px] overflow-hidden flex">
                  {/* Categories */}
                  <div className="w-[140px] border-r border-border bg-secondary/40 py-2">
                    {productCategories.map((cat, i) => (
                      <button
                        key={cat.label}
                        onMouseEnter={() => setActiveCat(i)}
                        className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-colors duration-150 ${
                          activeCat === i
                            ? "text-accent bg-background"
                            : "text-foreground/70 hover:text-foreground hover:bg-background/60"
                        }`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>

                  {/* Sub-items */}
                  <div className="flex-1 py-2 px-2">
                    {productCategories[activeCat].items.map((item) =>
                      item.href === "#" ? (
                        <span
                          key={item.label}
                          className="block px-3 py-2.5 text-sm text-muted-foreground italic"
                        >
                          {item.label}
                        </span>
                      ) : (
                        <Link
                          key={item.label}
                          to={item.href}
                          onClick={() => setProdOpen(false)}
                          className="block px-3 py-2.5 text-sm font-medium text-foreground/80 hover:text-accent hover:bg-secondary/60 rounded-md transition-colors duration-150"
                        >
                          {item.label}
                        </Link>
                      )
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          {navLinks.slice(1).map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/70 hover:text-accent transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}

          <a
            href="/#contato"
            className="inline-flex h-10 px-6 items-center rounded-md bg-accent text-accent-foreground text-sm font-medium hover:bg-accent/90 transition-all active:scale-[0.97]"
          >
            Fale Conosco
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-md border-t border-border px-6 pb-6 pt-4 space-y-1">
          <a
            href="/#servicos"
            className="block py-3 text-base font-medium text-foreground/80 hover:text-accent transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Serviços
          </a>

          {/* Mobile Produtos accordion */}
          <div>
            <button
              className="flex items-center justify-between w-full py-3 text-base font-medium text-foreground/80 hover:text-accent transition-colors"
              onClick={() => setMobileProdOpen(!mobileProdOpen)}
            >
              Produtos
              <ChevronDown size={16} className={`transition-transform duration-200 ${mobileProdOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileProdOpen && (
              <div className="pl-4 space-y-1">
                {productCategories.map((cat, i) => (
                  <div key={cat.label}>
                    <button
                      className="flex items-center justify-between w-full py-2 text-sm font-medium text-foreground/70 hover:text-accent transition-colors"
                      onClick={() => setMobileCatOpen(mobileCatOpen === i ? null : i)}
                    >
                      {cat.label}
                      <ChevronDown size={14} className={`transition-transform duration-200 ${mobileCatOpen === i ? "rotate-180" : ""}`} />
                    </button>
                    {mobileCatOpen === i && (
                      <div className="pl-4 space-y-1">
                        {cat.items.map((item) =>
                          item.href === "#" ? (
                            <span key={item.label} className="block py-2 text-sm text-muted-foreground italic">
                              {item.label}
                            </span>
                          ) : (
                            <Link
                              key={item.label}
                              to={item.href}
                              className="block py-2 text-sm text-foreground/70 hover:text-accent transition-colors"
                              onClick={() => setMenuOpen(false)}
                            >
                              {item.label}
                            </Link>
                          )
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <a
            href="/#valores"
            className="block py-3 text-base font-medium text-foreground/80 hover:text-accent transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Valores
          </a>
          <a
            href="/#contato"
            className="block py-3 text-base font-medium text-foreground/80 hover:text-accent transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Contato
          </a>
          <a
            href="/#contato"
            className="block text-center py-3 rounded-md bg-accent text-accent-foreground font-medium mt-2"
            onClick={() => setMenuOpen(false)}
          >
            Fale Conosco
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
