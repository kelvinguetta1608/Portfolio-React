import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { FiGithub } from 'react-icons/fi';
import { FaInstagram, FaItchIo, FaLinkedinIn } from 'react-icons/fa6';
import Typewriter from 'typewriter-effect/dist/core';
import profile from '../assets/KevinVelasco.png'
import { LuMouse } from 'react-icons/lu';
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';



const Banner = () => {
    useEffect(() => {
        const typewriter = new Typewriter('#typewriter', {
            strings: [' I am a Multimedia Engineer', 'I am a Game Developer', ' I am a Web Developer', , 'I am a UI/UX Designer'],
            autoStart: true,
            loop: true,
            
            
        });

        return () => {
            // Limpiar el efecto al desmontar el componente
            typewriter.stop();
        };

        

    }, []);

    const comp =useRef(null);
    gsap.registerPlugin(ScrollTrigger);

    useLayoutEffect(()=>{

        let ctx =gsap.context(()=>{
            const t1=gsap.timeline();
            t1.from("#intro-slider", {
                yPercent: "100",
                duration:1.3,
                delay: 0.3,
            }).from(["#title"],{
                opacity:0,
                y:"-=30",
                stragger:0.5,
            }).to([],{
                opacity:0,
                y:"+=30",
                delay:0.2,
                stragger:0.5,
            });
            return t1;
        },comp)
        return ()=> ctx.revert();
    },[])
        

    return (
        <div ref={comp} id="Home" className="text-center pt-10 lg:w-[100%]">
            <h2 id='title' className="text-2xl font-semibold">Hello, I am</h2>
            <h2 id='title' className="text-5xl my-2 font-bold" style={{ color: '#1484da' }}>Kevin Andres Velasco Perez</h2>
            <div  className="text-3xl my-2 font-bold" id="typewriter"></div>
            <div id="intro-slider" className="flex gap-2 justify-center">
            <button className="px-[20px] py-[5px] rounded mt-6 border border-[#1484da] bg-[#1484da] text-white transition-all duration-700 ease-in-out hover:bg-transparent hover:text-[#1484da]">
                
                <a href="/KevinAndresVelascoPerez-CV.pdf"
                download="Kevin_Andres_Velasco_Perez_CV.pdf"
                >
                    Download CV
                </a>
            </button>
            
            </div>
            <div className="text-white flex lg:flex-row flex-col lg:justify-around items-center">
                <div className="flex gap-2 lg:flex-col justify-center mt-10">
                <a href="https://www.instagram.com/kvp_1608/?hl=es-la" target="_blank">               
                    <FaInstagram className="bg-gray-900 p-6px text-3xl rounded"/>
                </a>
                <a href="https://github.com/kelvinguetta1608" target="_blank">
                    <FiGithub className="bg-gray-900 p-6px text-3xl rounded"/>
                </a>
                <a href="https://www.linkedin.com/in/kevin-velasco-91a759295/?trk=opento_sprofile_details" target="_blank">
                    <FaLinkedinIn className="bg-gray-900 p-6px text-3xl rounded"/>
                </a>
                <a href="https://itch.io/profile/kevinvelasco" target="_blank">
                    <FaItchIo className="bg-gray-900 p-6px text-3xl rounded"/>
                </a>
                </div>
                <img className="rounded-t-full lg:h-[22%] lg:w-[22%] mt-10" src={profile} alt="Foto" />
                <div className="hidden lg:flex flex-col justify-center">
                    <LuMouse className="text-2xl animate-bounce mb-4"/>
                    <p className="[writing-mode:vertical-rl] text-xl ">Let's Build Something Great Together</p>
                </div>
            </div>
            
            
            
        </div>
    );
};

export default Banner;