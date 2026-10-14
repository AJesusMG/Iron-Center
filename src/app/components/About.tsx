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
    title: "Disciplina",
    description: "Creemos en el esfuerzo constante y la dedicación para lograr resultados duraderos.",
  },
  {
    icon: Dumbbell,
    title: "Fuerza",
    description: "Construimos fuerza física y mental que trasciende las paredes del gimnasio.",
  },
  {
    icon: Users,
    title: "Comunidad",
    description: "Un entorno de apoyo donde todos se motivan mutuamente para destacar.",
  },
  {
    icon: Trophy,
    title: "Excelencia",
    description: "Desafiamos los límites y nos esforzamos por alcanzar nuestra mejor versión.",
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
              alt="Interior del gimnasio Iron Center"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          {/* Badge */}
          <div className="absolute bottom-0 right-0 translate-x-4 translate-y-4 rounded-2xl bg-red-600 px-8 py-6 text-white">
            <p className="font-black text-4xl">10+</p>
            <p className="mt-1 text-sm font-semibold">Años de Excelencia</p>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-red-600">
              Sobre Nosotros
            </span>
            <h2 className="font-black text-5xl uppercase leading-tight text-white">
              Más que un gimnasio. Un estilo de vida.
            </h2>
            <p className="text-sm leading-relaxed text-zinc-400">
              Iron Center Fitness Club fue fundado con una misión simple: crear un espacio
              donde cualquiera, desde principiantes hasta atletas de alto rendimiento, pueda lograr
              sus objetivos de fitness. Nuestras instalaciones de vanguardia, combinadas con entrenadores
              de nivel mundial, brindan el entorno perfecto para la transformación.
            </p>
            <p className="text-sm leading-relaxed text-zinc-400">
              Creemos que el fitness no se trata solo de fuerza física; se trata de construir
              resiliencia mental, disciplina y convertirte en la mejor versión de ti mismo.
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