"use client"

import { useState } from "react"
import Link from "next/link"
import { Dumbbell, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const links = ["About", "Programs", "Pricing", "Contact"]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 z-50 w-full border-b border-zinc-800/50 bg-black/60 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <Dumbbell className="h-6 w-6 text-red-600" />
          <span className="font-black text-sm uppercase tracking-widest text-white">Iron Center</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-sm text-zinc-400 transition-colors hover:text-white">
              {link}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button className="bg-red-600 px-5 font-bold hover:bg-red-700">Join Now</Button>
          <button className="flex items-center justify-center text-white md:hidden" onClick={() => setIsOpen((prev) => !prev)} aria-label="Toggle menu">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <nav className="border-t border-zinc-800/50 bg-black/90 px-6 py-4 backdrop-blur-md md:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} onClick={() => setIsOpen(false)} className="block rounded-lg px-3 py-3 text-sm font-medium text-zinc-400 transition-colors hover:bg-zinc-800/50 hover:text-white">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Navbar