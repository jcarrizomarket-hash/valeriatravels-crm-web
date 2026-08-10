export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-4xl px-6 py-24 text-center sm:py-32">
        <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-gold">
          CRM para agencias de viajes
        </span>
        <h1 className="mt-6 font-serif text-4xl font-bold leading-[1.1] text-ink sm:text-6xl">
          El sistema que ya usa una agencia real,
          <br className="hidden sm:block" /> ahora para la tuya.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-ink/70">
          Valeria Travels CRM nació adentro de una agencia boutique real — leads, clientes,
          expedientes, cotizaciones, reservas y facturación, todo en un mismo lugar, en vez
          de repartido entre Excel, WhatsApp y papeles.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contacto"
            className="rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-gold"
          >
            Pedir una demo
          </a>
          <a
            href="#funciones"
            className="rounded-full border border-ink/20 px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-gold hover:text-gold"
          >
            Ver qué incluye
          </a>
        </div>
      </div>
    </section>
  );
}
