import tuMarca from "../assets/tu-marca.jpg";

export default function TuMarca() {
  return (
    <section id="tu-marca" className="border-y border-gold/20 bg-ink py-24 text-paper">
      <div className="mx-auto grid max-w-5xl items-center gap-10 px-6 lg:grid-cols-2">
        <div>
          <span className="inline-block rounded-full border border-gold/40 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-gold">
            Próximamente
          </span>
          <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight sm:text-4xl">
            Tu logo, tus colores, tu sitio.
          </h2>
          <p className="mt-4 text-paper/70">
            El CRM ya es tuyo desde el día uno. Muy pronto vas a poder configurar también
            el sitio público de tu agencia — tu logo, tu foto de portada, tus colores —
            para que tus clientes vean tu marca, no la nuestra.
          </p>
        </div>
        <div className="overflow-hidden rounded-2xl border border-gold/20 shadow-lg">
          <img
            src={tuMarca}
            alt="Espacio para tu logo: el sitio público se puede personalizar con la marca de cada agencia"
            className="w-full"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
