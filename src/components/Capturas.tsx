import publicHome from "../assets/screenshots/public-home.jpg";
import pipeline from "../assets/screenshots/pipeline.jpg";
import leads from "../assets/screenshots/leads.jpg";
import expediente from "../assets/screenshots/expediente.jpg";
import cotizaciones from "../assets/screenshots/cotizaciones.jpg";

function Frame({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-lg">
      <div className="flex items-center gap-1.5 border-b border-ink/10 bg-paper-dim px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
      </div>
      <img src={src} alt={alt} className="w-full" loading="lazy" />
      <p className="border-t border-ink/10 px-4 py-3 text-sm font-medium text-ink/70">
        {caption}
      </p>
    </div>
  );
}

export default function Capturas() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <div className="mb-14 max-w-xl">
        <span className="text-xs font-semibold uppercase tracking-widest text-gold">
          El producto
        </span>
        <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Así se ve por dentro.
        </h2>
      </div>

      <Frame src={publicHome} alt="Sitio público de Valeria Travels" caption="El sitio público que ven tus clientes" />

      <div className="mt-8 grid gap-8 sm:grid-cols-2">
        <Frame src={pipeline} alt="Pipeline comercial del CRM" caption="Pipeline comercial, arrastrar y soltar por etapa" />
        <Frame src={leads} alt="Listado de leads del CRM" caption="Leads con filtros y exportación a Excel" />
        <Frame src={expediente} alt="Expediente 360 de un cliente" caption="Expediente 360: pasajeros, servicios, pagos y documentos" />
        <Frame src={cotizaciones} alt="Cotizaciones del CRM" caption="Cotizaciones con estado e importe" />
      </div>
    </section>
  );
}
