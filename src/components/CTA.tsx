import { useState, type FormEvent } from "react";
import { supabase } from "../lib/supabase";

type Estado = "idle" | "enviando" | "ok" | "error";

type TipoEntidad = "" | "empresa" | "autonomo" | "emprendedor";

export default function CTA() {
  const [estado, setEstado] = useState<Estado>("idle");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [tipoEntidad, setTipoEntidad] = useState<TipoEntidad>("");
  const [cantidadEmpleados, setCantidadEmpleados] = useState("");
  const [mensaje, setMensaje] = useState("");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (estado === "enviando") return;
    setEstado("enviando");

    const { error } = await supabase.from("leads").insert({
      nombre,
      apellido: apellido || null,
      email,
      telefono: telefono || null,
      tipo_entidad: tipoEntidad || null,
      cantidad_empleados: tipoEntidad === "empresa" && cantidadEmpleados ? Number(cantidadEmpleados) : null,
      mensaje,
      origen: "crm.valeriatravels.com",
    });

    if (error) {
      console.error("Error al guardar el lead:", error);
      setEstado("error");
      return;
    }

    // El envío del mail con el link a la demo no debe bloquear la confirmación al usuario:
    // si Resend falla o tarda, el lead ya quedó guardado y el equipo lo puede contactar igual.
    supabase.functions
      .invoke("send-demo-email", { body: { nombre, email } })
      .catch((err) => console.error("Error al enviar el mail de la demo:", err));

    setEstado("ok");
    setNombre("");
    setApellido("");
    setEmail("");
    setTelefono("");
    setTipoEntidad("");
    setCantidadEmpleados("");
    setMensaje("");
  }

  if (estado === "ok") {
    return (
      <section id="contacto" className="border-t border-ink/10">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            ¡Gracias por escribir!
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink/70">
            Te acabamos de mandar un mail con el link a la demo del CRM, con datos de prueba
            para que la explores a tu ritmo. Si no te llega en unos minutos, revisá spam o
            escribinos a{" "}
            <a href="mailto:info@valeriatravels.com" className="underline">
              info@valeriatravels.com
            </a>
            .
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="contacto" className="border-t border-ink/10">
      <div className="mx-auto max-w-xl px-6 py-24">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            ¿Querés ver el CRM en acción?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink/70">
            Dejanos tus datos y te mandamos al toque el link a una cuenta demo con datos de
            prueba, para que la explores por tu cuenta antes de coordinar una llamada.
          </p>
        </div>

        <form onSubmit={onSubmit} className="mt-10 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              required
              placeholder="Nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="rounded-xl border border-ink/15 bg-paper px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
            />
            <input
              type="text"
              placeholder="Apellido"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
              className="rounded-xl border border-ink/15 bg-paper px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              type="email"
              required
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-xl border border-ink/15 bg-paper px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
            />
            <input
              type="tel"
              placeholder="Teléfono (opcional)"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              className="rounded-xl border border-ink/15 bg-paper px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <select
              value={tipoEntidad}
              onChange={(e) => setTipoEntidad(e.target.value as TipoEntidad)}
              className="rounded-xl border border-ink/15 bg-paper px-4 py-3 text-sm text-ink/80 outline-none transition-colors focus:border-gold"
            >
              <option value="">Agencia, autónomo o emprendedor (opcional)</option>
              <option value="empresa">Agencia / empresa</option>
              <option value="autonomo">Autónomo</option>
              <option value="emprendedor">Emprendedor</option>
            </select>
            {tipoEntidad === "empresa" && (
              <input
                type="number"
                min={1}
                placeholder="Cantidad de empleados"
                value={cantidadEmpleados}
                onChange={(e) => setCantidadEmpleados(e.target.value)}
                className="rounded-xl border border-ink/15 bg-paper px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
              />
            )}
          </div>
          <textarea
            required
            placeholder="Contanos sobre tu agencia"
            rows={4}
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            className="w-full rounded-xl border border-ink/15 bg-paper px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
          />

          {estado === "error" && (
            <p className="text-sm text-red-600">
              No se pudo enviar. Probá de nuevo, o escribinos directo a{" "}
              <a href="mailto:info@valeriatravels.com" className="underline">
                info@valeriatravels.com
              </a>
              .
            </p>
          )}

          <button
            type="submit"
            disabled={estado === "enviando"}
            className="w-full rounded-full bg-ink px-8 py-4 text-sm font-semibold text-paper transition-colors hover:bg-gold disabled:opacity-60"
          >
            {estado === "enviando" ? "Enviando..." : "Pedir demo"}
          </button>
        </form>
      </div>
    </section>
  );
}
