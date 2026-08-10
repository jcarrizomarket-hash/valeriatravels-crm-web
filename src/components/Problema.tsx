const puntos = [
  {
    titulo: "Leads que se pierden",
    texto:
      "Consultas que llegan por WhatsApp, Instagram o el formulario del sitio, y terminan dispersas sin seguimiento ni orden.",
  },
  {
    titulo: "Presupuestos armados a mano",
    texto:
      "Cada cotización se arma de cero en un Word o Excel — sin ítems, sin margen calculado, sin historial de versiones.",
  },
  {
    titulo: "Cobros sin control",
    texto:
      "Facturas y pagos parciales que se siguen de memoria, sin saber a simple vista cuánto falta cobrar de cada reserva.",
  },
];

export default function Problema() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-10 sm:grid-cols-3">
        {puntos.map((p) => (
          <div key={p.titulo}>
            <h3 className="font-serif text-lg font-bold text-ink">{p.titulo}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/60">{p.texto}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
