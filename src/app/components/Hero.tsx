import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "15K+", label: "Active Members" },
  { value: "50+", label: "Expert Trainers" },
  { value: "10+", label: "Years Experience" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background image */}
      <Image
        src="/Hero.jpg"
        alt="Iron Center hero"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center brightness-50"
      />

      {/* Gradient overlay — oscurece más los bordes */}
      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pb-24 pt-32">
        <div className="flex max-w-xl flex-col gap-8">
          {/* Badge */}
          <span className="flex w-fit items-center gap-2 rounded-full border border-zinc-700 bg-black/40 px-4 py-1.5 text-xs font-semibold text-red-500 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
            Premium Fitness Experience
          </span>

          {/* Heading */}
          <div className="flex flex-col gap-1">
            <h1 className="font-black text-6xl uppercase leading-none tracking-tight text-white md:text-7xl">
              Train Hard.
            </h1>
            <h1 className="font-black text-6xl uppercase leading-none tracking-tight text-red-600 md:text-7xl">
              Become Stronger.
            </h1>
          </div>

          {/* Description */}
          <p className="text-sm leading-relaxed text-zinc-300 md:text-base">
            Transform your body and mind at Iron Center. Where dedication meets
            results, and every rep counts towards your strongest self.
          </p>

          {/* CTAs */}
          <div className="flex items-center gap-4">
            <Button className="gap-2 bg-red-600 px-6 font-bold hover:bg-red-700">
              Start Your Journey <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="gap-2 border-zinc-600 bg-transparent font-bold text-white hover:bg-white/10 hover:text-white"
            >
              <Play className="h-3 w-3 fill-white text-white" />
              Watch Tour
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-4 flex items-center gap-10 border-t border-zinc-700/50 pt-8">
            {stats.map(({ value, label }) => (
              <div key={label} className="flex flex-col gap-1">
                <span className="font-black text-3xl text-red-500">
                  {value}
                </span>
                <span className="text-xs text-zinc-400">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
            Scroll
          </span>
          <div className="flex h-8 w-5 items-start justify-center rounded-full border border-zinc-600 p-2">
            <div className="h-1.5 w-1 animate-bounce rounded-full bg-red-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
