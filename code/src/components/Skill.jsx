import { useState } from 'react';
import { FaHtml5, FaCss3, FaReact, FaJava, FaPhp, FaNodeJs, FaPython, FaGitAlt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { SiFastapi, SiMysql } from "react-icons/si";

function FlipCard({ title, logo, description }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="h-64 perspective-1000" onClick={handleClick}>
      <div 
        className={`relative w-full h-full transition-transform duration-600 cursor-pointer ${
          isFlipped ? 'transform-[rotateY(180deg)]' : ''
        }`}
        style={{
          transformStyle: 'preserve-3d',
          transition: 'transform 0.6s'
        }}
      >
  
        <div 
          className="absolute w-full h-full bg-[#FFF07C] rounded-2xl shadow-xl p-6 flex flex-col items-center justify-center hover:scale-105 transition-all duration-200"
          style={{ 
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden'
          }}
        >
          <div className="text-6xl text-[#F3752B] mb-4">{logo}</div>
          <h3 className="text-2xl text-[#F3752B] font-semibold">{title}</h3>
        </div>

    
        <div 
          className="absolute w-full h-full bg-[#F3752B] rounded-2xl shadow-xl p-6 flex items-center justify-center hover:scale-105 transition-all duration-200"
          style={{ 
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <p className="text-[#FFF07C] text-center text-base leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}

function Skill() {
  const cards = [
    {
      title: "HTML",
      logo: <FaHtml5 />,
      description: "Langage de structure permettant de créer l'ossature et le contenu des pages web."
    },
    {
      title: "CSS",
      logo: <FaCss3 />,
      description: "Langage de style utilisé pour concevoir l'apparence et la mise en forme des pages web."
    },
    {
      title: "TailwindCSS",
      logo: <RiTailwindCssFill />,
      description: "Framework CSS utilitaire pour créer des designs modernes et réactifs rapidement."
    },
    {
      title: "JavaScript",
      logo: <IoLogoJavascript />,
      description: "Langage de programmation pour le web, utilisé pour créer des applications interactives."
    },
    {
      title: "React",
      logo: <FaReact />,
      description: "Bibliothèque JavaScript pour construire des interfaces utilisateur modernes et dynamiques."
    },
    {
      title:'Java',
      logo: <FaJava />,
      description: "Langage de programmation orienté objet, utilisé pour développer des applications robustes et évolutives."
    },
    {
      title: "PHP",
      logo: <FaPhp />,
      description: "Langage de script côté serveur, utilisé pour développer des applications web dynamiques."
    },
    {
      title: "Node.JS",
      logo: <FaNodeJs />,
      description: "Environnement JavaScript côté serveur pour créer des applications modernes, rapides et évolutives."
    },
    { 
      title: "Python",
      logo: <FaPython />,
      description: "Langage de programmation polyvalent, utilisé pour le développement web, l'analyse de données et l'intelligence artificielle."
    },
    {
      title: "FastAPI",
      logo: <SiFastapi />,
      description: "Framework web moderne pour Python, utilisé pour créer des API rapides et performantes." 
    },
    {
      title: "MySQL",
      logo: <SiMysql />,
      description: "Système de gestion de base de données relationnelle, utilisé pour stocker et gérer des données."
    },
    {
      title: "Git",
      logo: <FaGitAlt />,
      description: "Système de contrôle de version distribué, utilisé pour suivre les modifications du code et collaborer efficacement."
    }
  ];

  return (
    <section id="skills" className="max-w-4xl mx-auto mb-32 px-4">
      <div className="grid md:grid-cols-3 gap-8">
        {cards.map((item, idx) => (
          <FlipCard
            key={idx}
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