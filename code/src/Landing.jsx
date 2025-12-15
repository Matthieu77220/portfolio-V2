import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import MouseTrail from "./components/MouseTrail";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { FaFileExcel } from "react-icons/fa";

function Landing() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const navLinks = [
    {
      label: "GitHub",
      href: "https://github.com/Matthieu77220",
      icon: <FaGithub />,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/matthieu-dietrich-6b441b390/",
      icon: <FaLinkedin />,
    },
    {
      label: "CV",
      href: `${import.meta.env.BASE_URL}Mon-cv.pdf`,
      icon: <TbFileCv />,
    },
    {
      label: "Synthèse",
      href: `${import.meta.env.BASE_URL}Tab_synthèse.xlsx`,
      icon: <FaFileExcel />,
    },
  ];

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0d0d11] text-white">
      <div className="absolute inset-0 bg-linear-to-br from-[#0d0d11] via-[#151621] to-[#0d0d11] opacity-90" />
      <img
        src={`${import.meta.env.BASE_URL}img/Background.jpg`}
        alt="Fond héro"
        className="absolute inset-0 h-full w-full object-cover opacity-20 sm:opacity-40"
      />

      <header className="fixed top-0 z-50 w-full">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-8">
          <div className="rounded-full bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70 backdrop-blur">
            Portfolio
          </div>

          <section className="hidden lg:flex">
            <nav>
              <ul className="flex items-center gap-4 rounded-full bg-[#F3752B]/90 px-6 py-3 text-white shadow-xl shadow-[#F3752B]/30 backdrop-blur">
                {navLinks.map(({ href, icon, label }) => (
                  <li key={label} className="transition-transform hover:scale-110">
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-full px-3 py-2 text-lg font-semibold hover:bg-white/10"
                    >
                      <span className="text-2xl">{icon}</span>
                      <span className="text-sm">{label}</span>
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
              <ul className="flex flex-col gap-6 text-center">
                {navLinks.map(({ href, icon, label }) => (
                  <li key={label} className="transition-transform hover:scale-105">
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-2 rounded-2xl bg-white/5 px-4 py-3 text-white shadow-lg shadow-black/20 hover:bg-white/10"
                      onClick={() => setOpen(false)}
                    >
                      <span className="text-4xl">{icon}</span>
                      <span className="text-sm font-semibold tracking-wide uppercase">
                        {label}
                      </span>
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

      <main className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-4 pb-16 pt-28 sm:px-8 lg:pt-32">
        <div className="max-w-3xl space-y-6">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/70 backdrop-blur">
            Bienvenue
          </p>
          <h1 className="text-4xl font-bold leading-tight text-white drop-shadow-sm sm:text-5xl lg:text-6xl">
            Bienvenue sur mon Portfolio
          </h1>
          <p className="max-w-2xl text-base text-white/80 sm:text-lg">
            Explore mes projets, mon parcours et mes compétences. Navigue
            librement ou télécharge mon CV pour une vue d’ensemble rapide.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => navigate("/content")}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#F3752B] px-6 py-3 text-lg font-semibold text-white shadow-xl shadow-[#F3752B]/30 transition hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-[#F3752B]/40 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/80"
            >
              C&apos;est parti !
              <span className="transition duration-200 group-hover:translate-x-1">
                →
              </span>
            </button>
            <a
              href={`${import.meta.env.BASE_URL}Mon-cv.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-lg font-semibold text-white/80 backdrop-blur transition hover:border-white hover:text-white"
            >
              Voir le CV
            </a>
          </div>
        </div>
      </main>

      <MouseTrail />
    </div>
  );
}

export default Landing;