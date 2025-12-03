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
      <section className="flex flex-col">
        <h1 className="text-center text-5xl font-bold text-[#F3752B] underline decoration-solid mt-[8vh]" id="Me">
          Matthieu Dietrich
        </h1>
        <section className="relative flex p-0 mx-0">
            <video 
            muted 
            autoPlay
            loop
            className=" h-[70vh] mt-[10vh] w-full object-cover"
            >
              <source 
              src="../video/Bandeau1.mp4" 
              type="video/mp4"
              />
            </video>

        </section>

          <section className="flex h-[40vh] px-[10vw] justify-center my-[5vh]">
            <Me />
          </section>
        </section>

      {/*****************************************************************************************************/}

      <section className="flex flex-col">
        
          <h2 className="text-[#F3752B] text-5xl text-center font-bold underline decoration-solid mt-[8vh]" id="Formation">
            Ma formation
          </h2>

        <section className="flex">

        <section className="relative flex p-0 mx-0">
          <video
          muted
          autoPlay
          loop
          className="object-cover my-[15vh] w-[40vw]"
          >
              <source 
              src="../video/Bandeau2.mp4"
              type="video/mp4"
              />
          </video>

        </section>

        <section className="w-[45vw] absolute right-20 mt-[55vh]">
          <Formation />
        </section>

        </section>
        
      </section>

      {/************************************************************************************************************/}

      <section className="flex flex-col">
        <h2 className="text-[#F3752B] text-5xl text-center font-bold underline decoration-solid mt-[8vh]" id="Exp">
          Mon expérience professionnel
        </h2>

        <section className="flex justify-center mt-[10vh]">
          <Experience />
        </section>
      </section>

      {/**************************************************************************************************************/}

      <section className="flex flex-col">
        <h2 className="text-[#F3752B] text-5xl text-center font-bold underline decoration-solid my-[8vh]" id="Skill" >
          Mes compétences
        </h2>
        <section>
          <Skill />
        </section>
      </section>

      {/*******************************************************************************************************************/}


      <section className="flex flex-col">
        <h2 className="text-[#F3752B] text-5xl text-center font-bold underline decoration-solid my-[4vh]" id="Project">
          Mes projets
        </h2>
        <section className="flex justify-center mt-[10vh]">
          <Project />
        </section>
      </section>

      {/**************************************************************************************************************/}


      <section className="flex flex-col mx-[20vw] my-[8vh]">
        <h2 className="text-[#F3752B] text-5xl text-center font-bold underline decoration-solid my-[4vh]" id="Veille">
          Veille Technologique
        </h2>
            <section className="
                    bg-[#FFF07C] text-[#F3752B] 
                    rounded-2xl p-12 mb-8 w-[60vw]
                    transform transition-all duration-300 
                    hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/30">

                    <div className="flex items-center justify-center gap-4 mb-6">
                        <Cpu className="w-12 h-12" />
                        <h2 className="text-5xl font-bold text-center">WebAssembly</h2>
                        <Code className="w-12 h-12" />
                    </div>
                    <p className="text-center text-xl font-semibold">
                        Le futur de la performance web
                    </p>
                    <div className="flex justify-center mt-8">
                        <button
                            onClick={() =>{navigate("/Veille")}}
                            className="bg-[#F3752B] text-[#FFF07C] px-8 py-3 rounded-lg font-bold 
                            hover:bg-[#d86524] transition duration-300 hover:scale-105 shadow-lg"
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
