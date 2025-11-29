import {useState} from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import MouseTrail from './MouseTrail';

function Content() {
  return (
    <div className="bg-gray-400 h-screen w-full">
      <Header />
        <section className="relative">
            <img 
            src="../public/img/Bandeau1.png" 
            alt="Bandeau numéro 1" 
            className="w-[80vw] h-[40vh] mt-[25vh] object-contain"
            />
        </section>
      <Footer />
      <MouseTrail />
    </div>
  );
}

export default Content;
