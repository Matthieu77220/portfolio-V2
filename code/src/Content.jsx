import {useNavigate} from 'react-router'
import {Cpu, Code} from 'lucide-react'
import Scroll from './components/Scroll';
import Header from './components/Header';
import Footer from './components/Footer';
import MouseTrail from './components/MouseTrail';
import Me from './components/Me';
import Formation from './components/Formation';
import Experience from './components/Experience';
import Skill from './components/Skill';
import Project from './components/Project';

function Content() {
  const navigate = useNavigate();
  
  return (
    <>
      <Header />
      <Scroll />
      
      {/* ==================== QUI JE SUIS ==================== */}
      <section className="flex flex-col px-4 sm:px-6 lg:px-8">
        <h1 className="text-center font-bold text-[#F3752B] underline decoration-solid 
        text-3xl sm:text-4xl md:text-5xl lg:text-6xl
        mt-16 sm:mt-20 md:mt-24" 
        id="Me">
          Matthieu Dietrich
        </h1>
        
        <section className="relative flex p-0 mx-0 w-full">
          <video 
            muted 
            autoPlay
            loop
            className="w-full object-cover mt-8 sm:mt-12 md:mt-16
            h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh]"
          >
            <source 
              src={`${import.meta.env.BASE_URL}video/Bandeau1.mp4`} 
              type="video/mp4"
            />
          </video>
        </section>

        <section className="flex justify-center my-8 sm:my-12 md:my-16 px-4 sm:px-8 md:px-16 lg:px-24">
          <Me />
        </section>
      </section>

      {/* ==================== MA FORMATION ==================== */}
      <section className="flex flex-col px-4 sm:px-6 lg:px-8">
        <h2 className="text-[#F3752B] text-center font-bold underline decoration-solid 
        text-3xl sm:text-4xl md:text-5xl lg:text-6xl
        mt-16 sm:mt-20 md:mt-24" 
        id="Formation">
          Ma formation
        </h2>

   
        <section className="hidden lg:flex relative">
          <section className="relative flex p-0 mx-0">
            <video
              muted
              autoPlay
              loop
              className="object-cover my-24 w-[40vw]"
            >
              <source 
                src={`${import.meta.env.BASE_URL}video/Bandeau2.mp4`}
                type="video/mp4"
              />
            </video>
          </section>

          <section className="w-[45vw] absolute right-20 mt-[55vh]">
            <Formation />
          </section>
        </section>

        
        <section className="lg:hidden flex flex-col items-center mt-8 sm:mt-12 px-4 sm:px-8">
          <video
            muted
            autoPlay
            loop
            className="object-cover w-full max-w-2xl rounded-xl mb-8
            h-[30vh] sm:h-[40vh]"
          >
            <source 
              src={`${import.meta.env.BASE_URL}video/Bandeau2.mp4`}
              type="video/mp4"
            />
          </video>
          <Formation />
        </section>
      </section>

      {/* ==================== MON EXPÉRIENCE ==================== */}
      <section className="flex flex-col px-4 sm:px-6 lg:px-8">
        <h2 className="text-[#F3752B] text-center font-bold underline decoration-solid 
        text-3xl sm:text-4xl md:text-5xl lg:text-6xl
        mt-16 sm:mt-20 md:mt-24" 
        id="Exp">
          Mon expérience professionnelle
        </h2>

        <section className="flex justify-center mt-8 sm:mt-12 md:mt-16 px-4 sm:px-8">
          <Experience />
        </section>
      </section>

      {/* ==================== MES COMPÉTENCES ==================== */}
      <section className="flex flex-col px-4 sm:px-6 lg:px-8">
        <h2 className="text-[#F3752B] text-center font-bold underline decoration-solid 
        text-3xl sm:text-4xl md:text-5xl lg:text-6xl
        my-16 sm:my-20 md:my-24" 
        id="Skill">
          Mes compétences
        </h2>
        <section className="px-4 sm:px-8 md:px-12">
          <Skill />
        </section>
      </section>

      {/* ==================== MES PROJETS ==================== */}
      <section className="flex flex-col px-4 sm:px-6 lg:px-8">
        <h2 className="text-[#F3752B] text-center font-bold underline decoration-solid 
        text-3xl sm:text-4xl md:text-5xl lg:text-6xl
        my-12 sm:my-16 md:my-20" 
        id="Project">
          Mes projets
        </h2>
        <section className="flex justify-center mt-8 sm:mt-12 md:mt-16 px-4 sm:px-8">
          <Project />
        </section>
      </section>

      {/* ==================== VEILLE TECHNOLOGIQUE ==================== */}
      <section className="flex flex-col items-center px-4 sm:px-6 lg:px-8 
      my-16 sm:my-20 md:my-24
      mb-32 sm:mb-36 md:mb-24">
        <h2 className="text-[#F3752B] text-center font-bold underline decoration-solid 
        text-3xl sm:text-4xl md:text-5xl lg:text-6xl
        mb-8 sm:mb-12" 
        id="Veille">
          Veille Technologique
        </h2>
        
        <section className="bg-[#FFF07C] text-[#F3752B] rounded-2xl 
        p-6 sm:p-8 md:p-10 lg:p-12
        w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl
        transform transition-all duration-300 
        hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/30">
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6">
            <Cpu className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
            <h3 className="font-bold text-center
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              WebAssembly
            </h3>
            <Code className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
          </div>
          
          <p className="text-center font-semibold
          text-base sm:text-lg md:text-xl lg:text-2xl
          mb-6 sm:mb-8">
            Le futur de la performance web
          </p>
          
          <div className="flex justify-center">
            <button
              onClick={() => navigate("/Veille")}
              className="bg-[#F3752B] text-[#FFF07C] font-bold rounded-lg 
              px-6 py-2.5 sm:px-8 sm:py-3 md:px-10 md:py-4
              text-sm sm:text-base md:text-lg
              hover:bg-[#d86524] transition duration-300 hover:scale-105 shadow-lg
              w-full sm:w-auto"
            >
              Aller vers la présentation
            </button>
          </div>
        </section>
      </section>

      <Footer />
      <MouseTrail />
    </>
  );
}

export default Content;