import Image from "next/image"
import { ArrowRight } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

type ServiceCardProps = {
  number: string
  title: string
  description: string
  features: string[]
  imageUrl: string
  imageAlt?: string
}

const ServiceCard = ({
  number,
  title,
  description,
  features,
  imageUrl,
  imageAlt = title,
}: ServiceCardProps) => {
  return (
    <Card className="group overflow-hidden border-zinc-800 bg-zinc-950 cursor-pointer transition-all duration-300 hover:border-red-600 hover:[box-shadow:0_0_0_1px_#dc2626]">

      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
  src={imageUrl}
  alt={imageAlt}
  fill
  sizes="(max-width: 768px) 100vw, 50vw"
  className="object-cover brightness-75 transition-all duration-500 group-hover:brightness-90 group-hover:scale-105"
/>
        <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-red-600 font-black text-sm text-white">
          {number}
        </span>
      </div>
        <div className="pl-4">
      <CardHeader>
        <CardTitle className="font-black text-2xl uppercase tracking-wide text-white">
          {title}
        </CardTitle>
        <CardDescription className="text-zinc-500 pb-4">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <ul className="flex flex-col gap-2">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-3 text-sm text-zinc-300">
              <span className="h-2 w-2 shrink-0 rounded-full bg-yellow-400" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
</div>
      <CardFooter>
        <Button
          variant="link"
          className="gap-2 pl-4 text-red-600 transition-[gap] duration-200 group-hover:gap-3"
        >
          Learn More <ArrowRight className="h-4 w-4" />
        </Button>
      </CardFooter>

    </Card>
  )
}

export default ServiceCard