import { useState } from "react";
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaJava,
  FaPhp,
  FaNodeJs,
  FaPython,
  FaGitAlt,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { SiFastapi, SiMysql } from "react-icons/si";

const cards = [
  {
    title: "HTML",
    logo: <FaHtml5 />,
    description:
      "Structure des pages et sémantique pour des interfaces accessibles.",
  },
  {
    title: "CSS",
    logo: <FaCss3 />,
    description: "Mise en forme responsive et animations légères.",
  },
  {
    title: "TailwindCSS",
    logo: <RiTailwindCssFill />,
    description: "Design system utilitaire pour prototyper vite et bien.",
  },
  {
    title: "JavaScript",
    logo: <IoLogoJavascript />,
    description: "Interactions riches et logique front moderne.",
  },
  {
    title: "React",
    logo: <FaReact />,
    description: "Interfaces dynamiques, composants réutilisables.",
  },
  {
    title: "Java",
    logo: <FaJava />,
    description:
      "Bases solides pour applications robustes et orientées objet.",
  },
  {
    title: "PHP",
    logo: <FaPhp />,
    description: "Backends simples et intégration avec bases relationnelles.",
  },
  {
    title: "Node.js",
    logo: <FaNodeJs />,
    description: "APIs modernes et services backend légers.",
  },
  {
    title: "Python",
    logo: <FaPython />,
    description: "Scripts, APIs et explorations data polyvalentes.",
  },
  {
    title: "FastAPI",
    logo: <SiFastapi />,
    description: "API Python rapides, typées et documentées automatiquement.",
  },
  {
    title: "MySQL",
    logo: <SiMysql />,
    description: "Modélisation et requêtes SQL pour la persistance.",
  },
  {
    title: "Git",
    logo: <FaGitAlt />,
    description: "Versionning et collaboration fluide sur les projets.",
  },
];

function FlipCard({ title, logo, description }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <article
      onClick={() => setFlipped((v) => !v)}
      className="group h-56 cursor-pointer rounded-3xl border border-white/5 bg-white/5 shadow-2xl shadow-black/20 backdrop-blur transition hover:-translate-y-1 hover:shadow-[#F3752B]/30"
      style={{ perspective: "1200px" }}
    >
      <div
        className={`relative h-full w-full transition-transform duration-500 ${
          flipped ? "rotate-y-180" : ""
        }`}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <div
          className="absolute inset-0 flex flex-col justify-center gap-3 rounded-3xl p-6 backface-hidden"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#F3752B]/15 text-2xl text-[#F3752B] shadow-inner shadow-[#F3752B]/20">
              {logo}
            </div>
            <h3 className="text-lg font-semibold text-white">{title}</h3>
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
            Cliquez pour retourner
          </p>
        </div>

        <div
          className="absolute inset-0 rounded-3xl bg-[#F3752B] p-6 text-white shadow-2xl shadow-[#F3752B]/30 rotate-y-180 backface-hidden"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <div className="flex h-full flex-col justify-center gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/80">
              Description
            </p>
            <p className="text-sm leading-relaxed">{description}</p>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
              Retour ↺
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

function Skill() {
  return (
    <section id="skills" className="mx-auto max-w-5xl">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((item) => (
          <FlipCard
            key={item.title}
            title={item.title}
            logo={item.logo}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Skill;