import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type MemberShipPlansProps = {
  name: string
  description: string
  price: number
  features: string[]
  highlighted?: boolean
}

const MemberShipPlans = ({
  name,
  description,
  price,
  features,
  highlighted = false,
}: MemberShipPlansProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-col gap-6 rounded-2xl border p-8 transition-transform",
        highlighted
          ? "scale-105 border-red-600 bg-red-600 text-white"
          : "border-zinc-800 bg-zinc-950 text-zinc-100"
      )}
    >
      {highlighted && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-yellow-400 px-4 py-1 text-xs font-black tracking-widest text-zinc-900">
          MOST POPULAR
        </span>
      )}

      <div className="space-y-2">
        <h2 className="font-black text-4xl tracking-wide">{name}</h2>
        <p className={cn("text-sm leading-relaxed", highlighted ? "text-red-100" : "text-zinc-400")}>
          {description}
        </p>
      </div>

      <div className="flex items-end gap-1">
        <span className={cn("self-start pt-2 text-sm font-semibold", highlighted ? "text-red-200" : "text-zinc-500")}>
          $
        </span>
        <span className="font-black text-7xl leading-none">{price}</span>
        <span className={cn("pb-2 text-sm", highlighted ? "text-red-200" : "text-zinc-500")}>
          /month
        </span>
      </div>

      <ul className="flex flex-1 flex-col gap-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-3 text-sm">
            <Check
              className={cn("h-4 w-4 shrink-0", highlighted ? "text-yellow-400" : "text-red-600")}
              strokeWidth={3}
            />
            {feature}
          </li>
        ))}
      </ul>

      <Button
        className={cn(
          "w-full font-black tracking-widest",
          highlighted
            ? "bg-white text-red-600 hover:bg-zinc-100"
            : "bg-red-600 text-white hover:bg-red-700"
        )}
      >
        GET STARTED
      </Button>
    </div>
  )
}

export default MemberShipPlans