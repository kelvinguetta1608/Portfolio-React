import React, { useEffect } from 'react';
import { FiGithub } from 'react-icons/fi';
import { FaInstagram, FaItchIo, FaLinkedinIn } from 'react-icons/fa6';
import Typewriter from 'typewriter-effect/dist/core';
import profile from '../assets/Captura.png'
import { LuMouse } from 'react-icons/lu';

const Banner = () => {
    useEffect(() => {
        const typewriter = new Typewriter('#typewriter', {
            strings: [' I am a Game Developer', ' I am a Web Developer', , 'I am a Designer'],
            autoStart: true,
            loop: true,
        });

        return () => {
            // Limpiar el efecto al desmontar el componente
            typewriter.stop();
        };
    }, []);

    return (
        <div className="text-center pt-10 lg:w-[100%]">
            <h2 className="text-xl">Hello, I am</h2>
            <h2 className="text-5xl my-2 font-bold" style={{ color: '#1484da' }}>Kevin Velasco</h2>
            <div className="text-2xl my-2 font-bold" id="typewriter"></div>
            <div className="flex gap-2 justify-center">
            <button className="px-[20px] py-[5px] rounded mt-6 border border-[#1484da] transition-all duration-700 ease-in-out hover:bg-[#1484da] ">Download</button>
            <button className="px-[20px] py-[5px] rounded mt-6 bg-[#1484da] transition-all duration-700 ease-in-out hover:bg-transparent">About Me</button>
            </div>
            <div className="text-white flex lg:flex-row flex-col lg:justify-around items-center">
                <div className="flex gap-2 lg:flex-col justify-center mt-10">
                    <FaInstagram className="bg-gray-900 p-6px text-3xl rounded"/>
                    <FiGithub className="bg-gray-900 p-6px text-3xl rounded"/>
                    <FaLinkedinIn className="bg-gray-900 p-6px text-3xl rounded"/>
                    <FaItchIo className="bg-gray-900 p-6px text-3xl rounded"/>
                </div>
                <img className="rounded-t-full lg:h-80 h-96 mt-10" src={profile} alt="Foto" />
                <div className="hidden lg:flex flex-col justify-center">
                    <LuMouse className="text-2xl animate-bounce mb-4"/>
                    <p className="[writing-mode:vertical-rl] text-xl ">Let's Build Something Great Together</p>
                </div>
            </div>
            
            
            
        </div>
    );
};

export default Banner;
