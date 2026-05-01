import Link from "next/link"
import { Dumbbell, MapPin, Phone, Mail, Clock} from "lucide-react"
import { FaInstagram, FaFacebook, FaXTwitter, FaYoutube } from "react-icons/fa6"

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-zinc-400">

      {/* Main */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">

          {/* Brand */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <Dumbbell className="h-7 w-7 text-red-600" />
              <span className="font-black text-xl uppercase tracking-widest text-white">
                Iron Center
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Where strength meets dedication. Transform your body and mind at the premium fitness destination.
            </p>
            <div className="flex items-center gap-4">
              {[
                { icon: FaInstagram, href: "#" },
                { icon: FaFacebook,  href: "#" },
                { icon: FaXTwitter,   href: "#" },
                { icon: FaYoutube,   href: "#" },
              ].map(({ icon: Icon, href }) => (
                <Link
                  key={href + Icon.name}
                  href={href}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-800 text-zinc-400 transition-colors hover:border-red-600 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-5">
            <h3 className="font-black text-sm uppercase tracking-widest text-white">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {["About Us", "Programs", "Membership", "Testimonials", "Careers", "Blog"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm transition-colors hover:text-white"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-5">
            <h3 className="font-black text-sm uppercase tracking-widest text-white">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
                <span>123 Fitness Avenue, Downtown<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 shrink-0 text-red-600" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 shrink-0 text-red-600" />
                <span>info@ironcenter.com</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="flex flex-col gap-5">
            <h3 className="font-black text-sm uppercase tracking-widest text-white">
              Opening Hours
            </h3>
            <ul className="flex flex-col gap-2">
              <li className="flex items-start gap-3 text-sm">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
                <div className="flex flex-col gap-1">
                  <span>Mon - Fri: 5:00 AM - 11:00 PM</span>
                  <span>Saturday: 6:00 AM - 10:00 PM</span>
                  <span>Sunday: 7:00 AM - 9:00 PM</span>
                </div>
              </li>
            </ul>
            <p className="text-sm text-red-600">
              *Elite members have 24/7 access
            </p>
          </div>

        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-zinc-800" />

      {/* Bottom bar */}
      <div className="mx-auto max-w-7xl px-6 py-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-zinc-500">
            © 2026 Iron Center Fitness Club. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <Link key={item} href="#" className="text-xs text-zinc-500 transition-colors hover:text-white">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer