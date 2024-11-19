import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { FiGithub } from 'react-icons/fi';
import { FaInstagram, FaItchIo, FaLinkedinIn } from 'react-icons/fa6';
import Typewriter from 'typewriter-effect/dist/core';
import profile from '../assets/StormKitchen.png';
import { LuMouse } from 'react-icons/lu';
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';

const Storm = () => {

  useEffect(() => {
    const typewriter = new Typewriter('#typewriter', {
        strings: [' I am a multimedia engineer', 'I am a Game Developer', ' I am a Web Developer', , 'I am a Designer'],
        autoStart: true,
        loop: true,
    });

    return () => {
        typewriter.stop();
    };
  }, []);

  const comp = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#intro-slider", {
        yPercent: "100",
        duration: 1.3,
        delay: 0.3,
      }).from(["#title"], {
        opacity: 0,
        y: "-=30",
        stagger: 0.5,
      }).to([], {
        opacity: 0,
        y: "+=30",
        delay: 0.2,
        stagger: 0.5,
      });
      return t1;
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={comp} id="Home" className="text-center pt-10 lg:w-[100%]">
      {/* Aquí está el iframe del juego de Unity */}
      <div className="w-full h-[70vh] flex justify-center items-center mt-10">
        <iframe
          src="/Unity1/StormInTheKitchen.html" // Ruta relativa del build WebGL
          width="100%" // Cambia el ancho si necesitas que no cubra toda la pantalla
          height="100%" // Cambia el alto si necesitas que no cubra toda la pantalla
          title="Unity WebGL Game"
          frameBorder="0"
          scrolling="no"
          allowFullScreen={true}
        ></iframe>
      </div>
    </div>
  );
};

export default Storm;
