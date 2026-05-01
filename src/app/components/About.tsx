import Image from "next/image"
import { Target, Dumbbell, Users, Trophy } from "lucide-react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"

const values = [
  {
    icon: Target,
    title: "Discipline",
    description: "We believe in consistent effort and dedication to achieve lasting results.",
  },
  {
    icon: Dumbbell,
    title: "Strength",
    description: "Building physical and mental strength that transcends the gym walls.",
  },
  {
    icon: Users,
    title: "Community",
    description: "A supportive environment where everyone motivates each other to excel.",
  },
  {
    icon: Trophy,
    title: "Excellence",
    description: "We push boundaries and strive for the best version of ourselves.",
  },
]

const About = () => {
  return (
    <section className="bg-zinc-850 px-6 py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2">

        {/* Image */}
        <div className="relative">
          <div className="relative h-140 overflow-hidden rounded-2xl">
            <Image
              src="/gym.jpg"
              alt="Iron Center gym interior"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          {/* Badge */}
          <div className="absolute bottom-0 right-0 translate-x-4 translate-y-4 rounded-2xl bg-red-600 px-8 py-6 text-white">
            <p className="font-black text-4xl">10+</p>
            <p className="mt-1 text-sm font-semibold">Years of Excellence</p>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-red-600">
              About Us
            </span>
            <h2 className="font-black text-5xl uppercase leading-tight text-white">
              More than a gym. A lifestyle.
            </h2>
            <p className="text-sm leading-relaxed text-zinc-400">
              Iron Center Fitness Club was founded with a simple mission: to create a space
              where anyone, from beginners to elite athletes, can achieve their fitness goals.
              Our state-of-the-art facility, combined with world-class trainers, provides the
              perfect environment for transformation.
            </p>
            <p className="text-sm leading-relaxed text-zinc-400">
              We believe fitness is not just about physical strength—it's about building
              mental resilience, discipline, and becoming the best version of yourself.
            </p>
          </div>

          {/* Value cards */}
          <div className="grid grid-cols-2 gap-4">
            {values.map(({ icon: Icon, title, description }) => (
              <Card key={title} className="border-zinc-800 bg-zinc-900">
                <CardHeader className="gap-3 p-3">
                    <div className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-600/10">
                    <Icon className="h-5 w-5 text-red-600" />
                  </div>
                  <CardTitle className="text-sm font-bold text-white pt-3 pl-4">
                    {title}
                  </CardTitle>
                  </div>
                  <CardDescription className="text-xs leading-relaxed text-zinc-500">
                    {description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default About