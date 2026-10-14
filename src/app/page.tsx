import MemberShipPlans from "./components/MemberShipPlans";
import ServiceCard from "./components/Activities";
import Footer from "./components/Footer";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CTA from "./components/CTA";

const plans = [
  {
    name: "BÁSICO",
    description: "Perfecto para principiantes que inician su viaje en el fitness.",
    price: 29,
    features: [
      "Acceso completo al gimnasio",
      "Acceso a vestidores",
      "Evaluación física básica",
      "Acceso a la app móvil",
    ],
  },
  {
    name: "PRO",
    description: "Para atletas dedicados que buscan más de su entrenamiento.",
    price: 59,
    highlighted: true,
    features: [
      "Todo lo incluido en Básico",
      "Clases grupales ilimitadas",
      "2 sesiones de entrenamiento personal/mes",
      "Consulta de nutrición",
      "Reserva prioritaria de equipo",
      "Pases para invitados (2/mes)",
    ],
  },
  {
    name: "ELITE",
    description: "La experiencia de fitness definitiva para resultados máximos.",
    price: 99,
    features: [
      "Todo lo incluido en Pro",
      "Entrenamiento personal ilimitado",
      "Planes de alimentación personalizados",
      "Acceso a la zona de recuperación",
      "Eventos exclusivos para miembros",
      "Acceso al gimnasio 24/7",
      "Mercancía oficial gratis",
    ],
  },
];

const services = [
  {
    number: "01",
    title: "Entrenamiento de Pesas",
    description:
      "Construye masa muscular y fuerza con nuestros programas integrales de peso libre y máquinas, diseñados para todos los niveles.",
    features: ["Pesas libres", "Circuitos de máquinas", "Sobrecarga progresiva"],
    imageUrl: "/fitness-img.avif",
  },
  {
    number: "02",
    title: "Entrenamiento Personal",
    description:
      "Sesiones personalizadas uno a uno con entrenadores certificados que crean planes a tu medida para lograr tus objetivos específicos.",
    features: ["Programas personalizados", "Guía nutricional", "Seguimiento de progreso"],
    imageUrl: "/crossfit-img.avif",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-zinc-900">
        <Hero />

        <section id="nosotros">
          <About />
        </section>

        <section id="programas" className="bg-black px-6 py-24">
          <div className="mx-auto max-w-7xl flex flex-col gap-16">
            <div className="flex flex-col items-center gap-4 text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-red-600">
                Nuestros Programas
              </span>
              <h2 className="font-black text-5xl uppercase leading-tight text-white md:text-6xl">
                Entrena tu camino hacia la grandeza
              </h2>
              <p className="max-w-2xl text-sm leading-relaxed text-zinc-400">
                Elige entre nuestra variedad de programas diseñados para ayudarte a alcanzar
                cualquier meta de fitness, ya sea que estés empezando o superando tus límites.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {services.map((service) => (
                <ServiceCard key={service.number} {...service} />
              ))}
            </div>
          </div>
        </section>

        <section id="precios" className="bg-zinc-900 px-6 py-24">
          <div className="mx-auto max-w-7xl flex flex-col gap-16">
            <div className="flex flex-col items-center gap-4 text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-red-600">
                Membresía
              </span>
              <h2 className="font-black text-5xl uppercase leading-tight text-white md:text-6xl">
                Elige tu plan
              </h2>
              <p className="max-w-2xl text-sm leading-relaxed text-zinc-400">
                Planes flexibles diseñados para cada objetivo y presupuesto.
              </p>
            </div>
            <div className="grid w-full grid-cols-1 items-center gap-8 md:grid-cols-3">
              {plans.map((plan) => (
                <MemberShipPlans key={plan.name} {...plan} />
              ))}
            </div>
          </div>
        </section>

        <CTA />

        <section id="contacto">
          <Footer />
        </section>

      </main>
    </>
  );
}