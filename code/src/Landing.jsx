import { useNavigate } from "react-router-dom";
import { useState } from "react";
import MouseTrail from "./MouseTrail";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";
import { RxHamburgerMenu } from "react-icons/rx";


function Landing() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false)

  return (
    <div className="flex justify-center">

      <header className="z-50">
        
          <nav className="sm:hidden md:hidden lg:flex">
            <ul className="flex absolute right-0 mx-[8vw] my-[4vh] px-[8vw] py-[2vh] gap-30 rounded-xl text-white bg-[#F3752B]">
              <li className="hover:scale-150"><a href="https://github.com/Matthieu77220" target="_blank"className="text-4xl"><FaGithub /></a></li>
              <li className="hover:scale-150"><a href="https://www.linkedin.com/in/matthieu-dietrich-6b441b390/" target="_blank" className="text-4xl"><FaLinkedin /></a></li>
              <li className="hover:scale-150"><a href="../public/Mon-cv.pdf" target="_blank" rel="noopener noreferrer" className="text-4xl"><TbFileCv /></a></li>
            </ul>
          </nav>

        <section className="">
          <nav>
            <ul className="flex flex-column text-white bg-[#F3752B]">
              <li className="hover:scale-150"><a href="https://github.com/Matthieu77220" target="_blank" className="text-4xl"></a></li>
              <li className="hover:scale-150"><a href="https://www.linkedin.com/in/matthieu-dietrich-6b441b390/" target="_blank" className="text-4xl"></a></li>
              <li className="hover:scale-150"><a href="../public/Mon-cv.pdf" target="_blank" className="text-4xl"></a></li>
            </ul>
          </nav>
        </section>
      </header>

      <section className="relative w-full">
        <img
          src="../public/img/Background.jpg"
          className="h-screen w-[45vw] left-0"
        />
      </section>

      <section
        className="
        fixed mt-[30vh] ml-[10vw]
      "
      >
        <h1
          className="
        text-[#F3752B] font-bold text-4xl text-shadow-md text-shadow-gray-400 
        sm:text-5xl sm:ml-[8vw]
        md:text-5xl md:ml-[15vw]
        lg:text-6xl
        xl:text-7xl xl:mr-[10vw] xl:ml-10
        "
        >
          Bienvenue sur mon Portfolio 
        </h1>
      </section>

      <section
        className="
      fixed mt-[60vh]
      transform-3d
      perspective-origin-bottom
      perspective-near
      
      "
      >
        <button
          type="button"
          onClick={() => navigate("/content")}
          className="
          cursor-pointer border-2 bg-[#F3752B] text-white rounded-full p-3 w-3xs transition duration-300
          sm:p-4 sm:w-xs sm:text-xl sm:font-semibold
          lg:p-5 lg:w-sm lg:text-2xl lg:font-bold
          hover:translate-z-8 hover:rotate-x-13 hover:ring-2 hover:shadow-xl hover:shadow-gray-400/50 hover:transition hover:duration-300"
        >
          <p>C'est parti !</p>
        </button>
      </section>
      <MouseTrail />
    </div>
  );
}

export default Landing;