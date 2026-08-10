export default function CTA() {
  return (
    <section id="contacto" className="border-t border-ink/10">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h2 className="font-serif text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          ¿Querés ver el CRM en acción?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-ink/70">
          Todavía estamos afinando el alta para nuevas agencias — escribinos y coordinamos
          una demo real, con tus propios casos de uso.
        </p>
        <a
          href="mailto:info@valeriatravels.com"
          className="mt-8 inline-block rounded-full bg-ink px-8 py-4 text-sm font-semibold text-paper transition-colors hover:bg-gold"
        >
          Escribinos a info@valeriatravels.com
        </a>
      </div>
    </section>
  );
}
