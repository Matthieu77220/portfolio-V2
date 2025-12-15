import { useNavigate } from "react-router";
import { Cpu, Code } from "lucide-react";
import { motion } from "framer-motion";
import Scroll from "./components/Scroll";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MouseTrail from "./components/MouseTrail";
import Me from "./components/Me";
import Formation from "./components/Formation";
import Experience from "./components/Experience";
import Skill from "./components/Skill";
import Project from "./components/Project";

function Content() {
  const navigate = useNavigate();
  
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0d0d11] text-white">
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-[#0d0d11] via-[#151621] to-[#0d0d11] opacity-90" />
      <Header />
      <Scroll />

      <main className="relative z-10 mx-auto flex max-w-6xl flex-col gap-20 px-4 pb-24 pt-24 sm:px-6 lg:px-8 lg:pb-32 lg:pt-28">
        {/* ==================== QUI JE SUIS ==================== */}
        <motion.section
          id="Me"
          className="space-y-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div
            className="flex flex-col gap-3 text-center"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.05, ease: "easeOut" }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
              Introduction
            </p>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Matthieu Dietrich
            </h1>
            <p className="text-base text-white/75 sm:text-lg">
              Développeur en devenir, passionné par la création d’expériences
              numériques performantes et élégantes.
            </p>
          </motion.div>

          <motion.div
            className="overflow-hidden rounded-3xl border border-white/5 shadow-2xl shadow-black/30"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <video
              muted
              autoPlay
              loop
              className="h-[45vh] w-full object-cover sm:h-[55vh] lg:h-[65vh]"
            >
              <source
                src={`${import.meta.env.BASE_URL}video/Bandeau1.mp4`}
                type="video/mp4"
              />
            </video>
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            <Me />
          </motion.div>
        </motion.section>

        {/* ==================== MA FORMATION ==================== */}
        <motion.section
          id="Formation"
          className="space-y-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex flex-col gap-3 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
              Parcours
            </p>
            <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
              Ma formation
            </h2>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <motion.div
              className="overflow-hidden rounded-3xl border border-white/5 shadow-2xl shadow-black/30"
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <video
                muted
                autoPlay
                loop
                className="h-[32vh] w-full object-cover sm:h-[40vh] lg:h-full"
              >
                <source
                  src={`${import.meta.env.BASE_URL}video/Bandeau2.mp4`}
                  type="video/mp4"
                />
              </video>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Formation />
            </motion.div>
          </div>
        </motion.section>

        {/* ==================== MON EXPÉRIENCE ==================== */}
        <motion.section
          id="Exp"
          className="space-y-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex flex-col gap-3 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
              Expérience
            </p>
            <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
              Mon expérience professionnelle
            </h2>
          </div>
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Experience />
          </motion.div>
        </motion.section>

        {/* ==================== MES COMPÉTENCES ==================== */}
        <motion.section
          id="Skill"
          className="space-y-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex flex-col gap-3 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
              Compétences
            </p>
            <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
              Mes compétences
            </h2>
          </div>
          <motion.div
            className="px-2 sm:px-6"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Skill />
          </motion.div>
        </motion.section>

        {/* ==================== MES PROJETS ==================== */}
        <motion.section
          id="Project"
          className="space-y-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex flex-col gap-3 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
              Réalisations
            </p>
            <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
              Mes projets
            </h2>
          </div>
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Project />
          </motion.div>
        </motion.section>

        {/* ==================== VEILLE TECHNOLOGIQUE ==================== */}
        <motion.section
          id="Veille"
          className="space-y-8 rounded-3xl border border-white/5 bg.white/5 p-8 text-center shadow-2xl shadow-black/30 backdrop-blur"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
              Veille
            </p>
            <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
              Veille Technologique
            </h2>
          </div>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
            <Cpu className="h-10 w-10 text-[#F3752B]" />
            <h3 className="text-2xl font-semibold sm:text-3xl lg:text-4xl">
              WebAssembly
            </h3>
            <Code className="h-10 w-10 text-[#F3752B]" />
          </div>

          <p className="text-base text-white/80 sm:text-lg lg:text-xl">
            Le futur de la performance web
          </p>

          <div className="flex justify-center">
            <button
              onClick={() => navigate("/Veille")}
              className="rounded-full bg-[#F3752B] px-6 py-3 text-base font-semibold text-white shadow-xl shadow-[#F3752B]/30 transition hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-[#F3752B]/40 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/80"
            >
              Aller vers la présentation
            </button>
          </div>
        </motion.section>
      </main>

      <Footer />
      <MouseTrail />
    </div>
  );
}

export default Content;