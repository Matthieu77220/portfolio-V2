import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const links = [
  { href: "#Me", label: "Qui je suis ?" },
  { href: "#Formation", label: "Ma formation" },
  { href: "#Exp", label: "Mon expérience" },
  { href: "#Skill", label: "Mes compétences" },
  { href: "#Project", label: "Mes projets" },
  { href: "#Veille", label: "Veille Techno" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <span className="rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/80 backdrop-blur">
          Portfolio
        </span>

        <section className="hidden lg:flex">
          <nav className="rounded-full bg-[#0d0d11]/90 px-4 py-2 text-white shadow-2xl shadow-black/40 backdrop-blur border border-white/10">
            <ul className="flex items-center gap-1">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="rounded-full px-4 py-2 text-sm font-semibold transition hover:text-[#F3752B] hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/80"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </section>

        <section className="flex items-center lg:hidden">
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="relative z-50 rounded-xl bg-[#F3752B] p-3 text-3xl text-white shadow-lg shadow-[#F3752B]/40 transition hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/80"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {open ? <IoClose /> : <RxHamburgerMenu />}
          </button>

          <nav
            className={`
              fixed inset-y-0 right-0 z-40 w-72 max-w-[80vw] bg-[#151621]/95
              pt-24 pb-10 px-6 shadow-2xl shadow-black/40 backdrop-blur
              transform transition-transform duration-300 ease-in-out
              ${open ? "translate-x-0" : "translate-x-full"}
            `}
          >
            <ul className="flex flex-col gap-4">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3 text-base font-semibold text-white shadow-lg shadow-black/20 transition hover:bg-white/10"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                    <span className="text-lg text-[#F3752B]">→</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {open && (
            <div
              className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
          )}
        </section>
      </div>
    </header>
  );
}

export default Header;