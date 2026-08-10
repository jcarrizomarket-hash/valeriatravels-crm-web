const funciones = [
  {
    titulo: "Leads y Pipeline",
    texto: "Todas las consultas en un embudo único, con notas, tareas y actividad por cada lead.",
  },
  {
    titulo: "Clientes y Expedientes",
    texto: "Ficha 360 de cada cliente: pasajeros, servicios, pagos, documentos y línea de tiempo del viaje.",
  },
  {
    titulo: "Cotizaciones con márgenes",
    texto: "Presupuestos con ítems desglosados — costo, venta y margen calculados solos, no a mano.",
  },
  {
    titulo: "Reservas y Facturación",
    texto: "De presupuesto aceptado a reserva confirmada y factura emitida, sin recargar datos dos veces.",
  },
  {
    titulo: "Cobros con saldo automático",
    texto: "Cada pago registrado descuenta el saldo pendiente de la reserva solo, sin recalcular a mano.",
  },
  {
    titulo: "Portal del cliente",
    texto: "Tus clientes ven sus propias reservas y facturas desde un acceso propio — nada de otros clientes.",
  },
  {
    titulo: "Roles y permisos",
    texto: "Administrador, Comercial, Colaborador — cada perfil ve solo lo que le corresponde.",
  },
  {
    titulo: "Agenda y documentación",
    texto: "Calendario de tareas y vencimientos, más almacenamiento real de documentos por expediente.",
  },
];

export default function Funciones() {
  return (
    <section id="funciones" className="border-t border-ink/10 bg-paper-dim py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-14 max-w-xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">
            Qué incluye
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Todo el circuito de la agencia, en un mismo sistema.
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {funciones.map((f) => (
            <div key={f.titulo} className="rounded-2xl bg-paper p-6 shadow-sm">
              <h3 className="font-serif text-lg font-bold text-ink">{f.titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">{f.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
