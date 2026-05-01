import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const perks = ["No Contracts", "Cancel Anytime", "7-Day Free Trial"]

const CTASection = () => {
  return (
    <section className="relative overflow-hidden bg-red-600 px-6 py-24">

      {/* Pattern de fondo — grid de + */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='50%25' y='55%25' dominant-baseline='middle' text-anchor='middle' font-size='16' fill='%23fff'%3E%2B%3C/text%3E%3C/svg%3E")`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">

        <h2 className="font-black text-5xl uppercase leading-tight text-white md:text-6xl">
          Ready to transform your body?
        </h2>

        <p className="max-w-xl text-sm leading-relaxed text-red-100">
          Join Iron Center today and get your first week free. No contracts, no commitments
          —just results.
        </p>

        <div className="flex items-center gap-4">
          <Button className="gap-2 bg-white px-6 font-bold text-red-600 hover:bg-zinc-100">
            Start Free Trial <ArrowRight className="h-4 w-4" />
          </Button>
          <Button className="bg-black px-6 font-bold text-white hover:bg-zinc-900">
            Schedule a Tour
          </Button>
        </div>

        <div className="flex items-center gap-6">
          {perks.map((perk) => (
            <div key={perk} className="flex items-center gap-2 text-xs text-red-100">
              <CheckCircle className="h-4 w-4" />
              {perk}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default CTASection