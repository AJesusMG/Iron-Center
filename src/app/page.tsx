import MemberShipPlans from "./components/MemberShipPlans";
import ServiceCard from "./components/Activities";
import Footer from "./components/Footer";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CTA from "./components/CTA";

const plans = [
  {
    name: "BASIC",
    description: "Perfect for beginners starting their fitness journey.",
    price: 29,
    features: [
      "Full gym access",
      "Locker room access",
      "Basic fitness assessment",
      "Access to mobile app",
    ],
  },
  {
    name: "PRO",
    description: "For dedicated athletes who want more from their workout.",
    price: 59,
    highlighted: true,
    features: [
      "Everything in Basic",
      "Unlimited group classes",
      "2 personal training sessions/month",
      "Nutrition consultation",
      "Priority equipment booking",
      "Guest passes (2/month)",
    ],
  },
  {
    name: "ELITE",
    description: "The ultimate fitness experience for maximum results.",
    price: 99,
    features: [
      "Everything in Pro",
      "Unlimited personal training",
      "Custom meal plans",
      "Recovery zone access",
      "Exclusive member events",
      "24/7 gym access",
      "Free merchandise",
    ],
  },
];

const services = [
  {
    number: "01",
    title: "Weight Training",
    description:
      "Build muscle mass and strength with our comprehensive weight training programs designed for all levels.",
    features: ["Free weights", "Machine circuits", "Progressive overload"],
    imageUrl: "/fitness-img.avif",
  },
  {
    number: "02",
    title: "Personal Coaching",
    description:
      "One-on-one sessions with certified trainers who create personalized plans to achieve your specific goals.",
    features: ["Custom programs", "Nutrition guidance", "Progress tracking"],
    imageUrl: "/crossfit-img.avif",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-zinc-900">
        <Hero />

        <section id="about">
          <About />
        </section>

        <section id="programs" className="bg-black px-6 py-24">
          <div className="mx-auto max-w-7xl flex flex-col gap-16">
            <div className="flex flex-col items-center gap-4 text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-red-600">
                Our Programs
              </span>
              <h2 className="font-black text-5xl uppercase leading-tight text-white md:text-6xl">
                Train your way to greatness
              </h2>
              <p className="max-w-2xl text-sm leading-relaxed text-zinc-400">
                Choose from our diverse range of programs designed to help you achieve
                any fitness goal, whether you're just starting out or pushing your limits.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {services.map((service) => (
                <ServiceCard key={service.number} {...service} />
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="bg-zinc-900 px-6 py-24">
          <div className="mx-auto max-w-7xl flex flex-col gap-16">
            <div className="flex flex-col items-center gap-4 text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-red-600">
                Membership
              </span>
              <h2 className="font-black text-5xl uppercase leading-tight text-white md:text-6xl">
                Choose your plan
              </h2>
              <p className="max-w-2xl text-sm leading-relaxed text-zinc-400">
                Flexible plans designed for every goal and budget.
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

        <section id="contact">
          <Footer />
        </section>

      </main>
    </>
  );
}