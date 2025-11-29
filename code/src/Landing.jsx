import { useNavigate } from "react-router-dom";
import { useState } from "react";
import MouseTrail from "./components/MouseTrail";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

function Landing() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-center">
      <header className="z-50 fixed top-0 w-full">
        
       
        <section className="hidden lg:flex">
          <nav>
            <ul className="flex absolute right-0 my-[4vh] px-[8vw] py-[2vh] gap-8 rounded-xl text-white bg-[#F3752B] lg:mx-[4vw] xl:mx-[8vw]">
              <li className="hover:scale-150 transition-transform">
                <a href="https://github.com/Matthieu77220" target="_blank" rel="noopener noreferrer" className="text-4xl">
                  <FaGithub />
                </a>
              </li>
              <li className="hover:scale-150 transition-transform">
                <a href="https://www.linkedin.com/in/matthieu-dietrich-6b441b390/" target="_blank" rel="noopener noreferrer" className="text-4xl">
                  <FaLinkedin />
                </a>
              </li>
              <li className="hover:scale-150 transition-transform">
                <a href="../public/Mon-cv.pdf" target="_blank" rel="noopener noreferrer" className="text-4xl">
                  <TbFileCv />
                </a>
              </li>
            </ul>
          </nav>
        </section>


        <section className="flex lg:hidden items-center justify-end p-4">
          <button 
            type="button"
            onClick={() => setOpen(!open)}
            className="text-4xl text-white bg-[#F3752B] p-3 rounded-lg z-50 relative"
            aria-label="Toggle menu"
          >
            {open ? <IoClose /> : <RxHamburgerMenu />}
          </button>

          <nav className={`
            fixed top-0 right-0 h-screen w-64 bg-[#F3752B] 
            transform transition-transform duration-300 ease-in-out
            ${open ? 'translate-x-0' : 'translate-x-full'}
            flex items-center justify-center
          `}>
            <ul className="flex flex-col gap-8 text-center">
              <li className="hover:scale-125 transition-transform">
                <a 
                  href="https://github.com/Matthieu77220" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-5xl text-white flex flex-col items-center gap-2"
                  onClick={() => setOpen(false)}
                >
                  <FaGithub />
                  <span className="text-sm">GitHub</span>
                </a>
              </li>
              <li className="hover:scale-125 transition-transform">
                <a 
                  href="https://www.linkedin.com/in/matthieu-dietrich-6b441b390/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-5xl text-white flex flex-col items-center gap-2"
                  onClick={() => setOpen(false)}
                >
                  <FaLinkedin />
                  <span className="text-sm">LinkedIn</span>
                </a>
              </li>
              <li className="hover:scale-125 transition-transform">
                <a 
                  href="../public/Mon-cv.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-5xl text-white flex flex-col items-center gap-2"
                  onClick={() => setOpen(false)}
                >
                  <TbFileCv />
                  <span className="text-sm">CV</span>
                </a>
              </li>
            </ul>
          </nav>

          {open && (
            <div 
              className="fixed inset-0 bg-opacity-50 -z-10"
              onClick={() => setOpen(false)}
            />
          )}
        </section>
      </header>

      <section className="relative w-full">
        <img
          src="../img/Background.jpg"
          alt="Background"
          className="h-screen w-[45vw] left-0"
        />
      </section>

      <section className="fixed mt-[30vh] ml-[10vw]">
        <h1 className="text-[#F3752B] font-bold text-4xl text-shadow-md text-shadow-gray-400 sm:text-5xl sm:ml-[8vw] md:text-5xl md:ml-[15vw] lg:text-6xl xl:text-7xl xl:mr-[10vw] xl:ml-10">
          Bienvenue sur mon Portfolio 
        </h1>
      </section>

      <section className="fixed mt-[60vh] transform-3d perspective-origin-bottom perspective-near">
        <button
          type="button"
          onClick={() => navigate("/content")}
          className="cursor-pointer border-2 bg-[#F3752B] text-white rounded-full p-3 w-3xs transition duration-300 sm:p-4 sm:w-xs sm:text-xl sm:font-semibold lg:p-5 lg:w-sm lg:text-2xl lg:font-bold hover:translate-z-8 hover:rotate-x-13 hover:ring-2 hover:shadow-xl hover:shadow-gray-400/50 hover:transition hover:duration-300"
        >
          <p>C'est parti !</p>
        </button>
      </section>
      <MouseTrail />
    </div>
  );
}

export default Landing;