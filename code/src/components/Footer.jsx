import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";
import { Mail } from "lucide-react";
import { FaFileExcel } from "react-icons/fa";

function Footer() {
  const navigate = useNavigate();
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 50;

      setShowFooter(isBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!showFooter) return null;

  return (
    <footer className="fixed bottom-0 z-40 w-full">
      <div className="mx-auto max-w-6xl px-4 pb-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-[#0d0d11]/95 px-4 py-3 text-white shadow-2xl shadow-black/60 backdrop-blur">
          <div className="hidden items-center justify-between gap-4 md:flex">
            <div className="flex items-center gap-3">
              <span className="hidden text-xs font-semibold uppercase tracking-[0.2em] text-white/50 sm:inline">
                Retrouve-moi
              </span>
              <div className="flex gap-3">
                <a
                  href="https://github.com/Matthieu77220"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/5 text-xl text-white shadow-md shadow-black/40 transition hover:-translate-y-0.5 hover:bg-white/10 hover:text-[#F3752B]"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/matthieu-dietrich-6b441b390/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/5 text-xl text-white shadow-md shadow-black/40 transition hover:-translate-y-0.5 hover:bg-white/10 hover:text-[#F3752B]"
                >
                  <FaLinkedin />
                </a>
                <a
                  href={`${import.meta.env.BASE_URL}Mon-cv.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/5 text-xl text-white shadow-md shadow-black/40 transition hover:-translate-y-0.5 hover:bg-white/10 hover:text-[#F3752B]"
                >
                  <TbFileCv />
                </a>
                <a
                  href={`${import.meta.env.BASE_URL}Tab_synthèse.xlsx`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/5 text-xl text-white shadow-md shadow-black/40 transition hover:-translate-y-0.5 hover:bg-white/10 hover:text-[#F3752B]"
                >
                  <FaFileExcel />
                </a>
              </div>
            </div>

            <button
              onClick={() => navigate("/contact")}
              className="inline-flex items-center gap-2 rounded-full bg-[#F3752B] px-5 py-2.5 text-sm font-semibold text-white shadow-xl shadow-[#F3752B]/40 transition hover:-translate-y-0.5 hover:bg-[#d86524] hover:shadow-2xl hover:shadow-[#F3752B]/60"
            >
              <Mail className="h-4 w-4" />
              Me contacter
            </button>
          </div>

          <div className="flex flex-col items-center gap-3 md:hidden">
            <button
              onClick={() => navigate("/contact")}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[#F3752B] px-5 py-2.5 text-sm font-semibold text-white shadow-xl shadow-[#F3752B]/40 transition hover:-translate-y-0.5 hover:bg-[#d86524] hover:shadow-2xl hover:shadow-[#F3752B]/60"
            >
              <Mail className="h-4 w-4" />
              Me contacter
            </button>

            <div className="flex gap-4">
              <a
                href="https://github.com/Matthieu77220"
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-9 w-9 place-items-center rounded-full bg-white/5 text-lg text-white shadow-md shadow-black/40 transition hover:-translate-y-0.5 hover:bg-white/10 hover:text-[#F3752B]"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/matthieu-dietrich-6b441b390/"
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-9 w-9 place-items-center rounded-full bg-white/5 text-lg text-white shadow-md shadow-black/40 transition hover:-translate-y-0.5 hover:bg-white/10 hover:text-[#F3752B]"
              >
                <FaLinkedin />
              </a>
              <a
                href={`${import.meta.env.BASE_URL}Mon-cv.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-9 w-9 place-items-center rounded-full bg-white/5 text-lg text-white shadow-md shadow-black/40 transition hover:-translate-y-0.5 hover:bg-white/10 hover:text-[#F3752B]"
              >
                <TbFileCv />
              </a>
              <a
                href={`${import.meta.env.BASE_URL}Tab_synthèse.xlsx`}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-9 w-9 place-items-center rounded-full bg-white/5 text-lg text-white shadow-md shadow-black/40 transition hover:-translate-y-0.5 hover:bg-white/10 hover:text-[#F3752B]"
              >
                <FaFileExcel />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;