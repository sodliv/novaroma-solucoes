const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground/60 py-10 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <a href="#" className="font-display text-lg font-semibold text-primary-foreground tracking-wide">
          NovaRoma Soluções
        </a>
        <p className="text-sm text-center md:text-right">
          © {new Date().getFullYear()} NovaRoma Soluções. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
