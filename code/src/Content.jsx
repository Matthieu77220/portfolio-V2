import {useState} from 'react'
import Scroll from './components/Scroll';
import Header from './components/Header';
import Footer from './components/Footer';
import MouseTrail from './components/MouseTrail';
import Me from './components/Me';
import Formation from './components/Formation';
import Experience from './components/Experience';

function Content() {
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

      <Footer />
      <MouseTrail />
    </>
  );
}

export default Content;
