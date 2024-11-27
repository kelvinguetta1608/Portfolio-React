import profile from '../assets/Captura2.png'
import { FaUnity } from "react-icons/fa6";
import { SiAdobe } from "react-icons/si";
import { TfiHtml5 } from "react-icons/tfi";
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';
import React, { useLayoutEffect, useRef } from 'react';

const About =()=>{

    const comp =useRef(null);
    gsap.registerPlugin(ScrollTrigger);

    useLayoutEffect(()=>{

        let ctx =gsap.context(()=>{
            const t1=gsap.timeline({
                scrollTrigger:{
                    trigger: '#intro-slider',
                    start: 'top center',
                    end: 'bottom center',
                    scrub:1,
                },
            });
            t1.from("#intro-slider", { opacity:0,x:-100, duration:1});
            return t1;
        },comp)
        return ()=> ctx.revert();
    },[])

    return(
        <div ref={comp}  id="About" className='py-28 lg:px-44 px-[20px] text-white'>
            <h2 className='text-4xl text-white font-bold mb-10 text-center'>About Me</h2>
            <div id='intro-slider' className='flex lg:flex-row flex-col lg:items-start items-center justify-center gap-36'>
                <img className='lg:h-[30%] lg:w-[30%] rounded-xl mb-9' src={profile} alt="" />
                <div >
                    <div className='flex lg:justify-start justify-center gap-[20px] mb-[40px]'>
                        <div className='bg-gray-900 p-[10px] rounded-xl flex flex-col items-center justify-center'>
                            <FaUnity className='text-[20px] text-center m-[6px]'/>
                            <h2 className='text-[17px] font-bold text-[#1484da]'>Experience</h2>
                            <span className='py-[1px] text-[16px] '>Unity Developer</span>
                        </div>
                        <div className='bg-gray-900 p-[10px] rounded-xl flex flex-col items-center justify-center'>
                            <TfiHtml5 className='text-[20px] text-center m-[6px]'/>
                            <h2 className='text-[17px] font-bold text-[#1484da]'>Experience</h2>
                            <span className='py-[1px] text-[16px] '>Web Developer</span>
                        </div>
                        <div className='bg-gray-900 p-[10px] rounded-xl flex flex-col items-center justify-center'>
                            <SiAdobe className='text-[20px] text-center m-[6px]'/>
                            <h2 className='text-[17px] font-bold text-[#1484da]'>Experience</h2>
                            <span className='py-[1px] text-[16px] '>Adobe suite</span>
                        </div>
                    </div>
                    <p className="lg:me-80 text-[18px] ">I am a eighth-semester Multimedia Engineering student at Universidad Autónoma de Occidente (UAO), with a strong background in developing interactive experiences. I specialize in creating 2D, 3D, Augmented Reality (AR), and Virtual Reality (VR) projects using Unity, integrating technology and creativity to deliver innovative solutions. Additionally, I have experience in web development and advanced proficiency with the Adobe suite, allowing me to design and produce high-quality visual and functional content. My passion lies in combining technology with design to create immersive and effective experiences.</p>
                </div>
            </div>            
        </div>
    );
};

export default About