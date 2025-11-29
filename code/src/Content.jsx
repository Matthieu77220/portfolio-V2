import {useState} from 'react'
import Scroll from './components/Scroll';
import Header from './components/Header';
import Footer from './components/Footer';
import MouseTrail from './components/MouseTrail';
import Me from './components/Me';

function Content() {
  return (
    <>
      <Header />

       <Scroll />
      <section className="flex-col">
        <h1 className="text-center text-5xl font-bold text-[#F3752B] underline decoration-solid mt-[8vh]">
          Matthieu Dietrich
        </h1>
        <section className="relative flexp-0 mx-0">
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

          <section className="flex h-[40vh] px-[10vw] justify-center my-[5vh]" id="Me">
            <Me />
          </section>

      </section>
      <Footer />
      <MouseTrail />
    </>
  );
}

export default Content;
