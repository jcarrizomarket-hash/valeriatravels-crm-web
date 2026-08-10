const links = [
  { href: "#funciones", label: "Qué incluye" },
  { href: "#para-quien", label: "Para quién es" },
];

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="font-serif text-lg font-bold tracking-tight text-ink">
          Valeria Travels <span className="text-gold">CRM</span>
        </a>
        <nav className="hidden gap-8 text-sm font-medium text-ink/70 sm:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-gold">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contacto"
          className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-gold"
        >
          Pedir demo
        </a>
      </div>
    </header>
  );
}
