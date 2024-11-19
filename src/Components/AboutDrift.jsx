import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';

import React, { useEffect, useLayoutEffect, useRef } from 'react';

import Typewriter from 'typewriter-effect/dist/core';
import profile from '../assets/Car.png';



const AboutDrift =()=>{

    useEffect(() => {
        const typewriter = new Typewriter('#typewriter', {
            strings: [' Chillax and Play', 'Fun for thought', 'Plant flowers'],
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

    return(
        <div ref={comp}  id="About" className='py-28 lg:px-44 px-[20px] text-white'>
            
            <div  className='flex lg:flex-row flex-col lg:items-start items-center justify-center gap-36'>
                <img className='lg:h-[30%] lg:w-[30%] rounded-xl mb-9' src={profile} alt="" />
                <div >
                <div className="lg:me-80 text-[18px]">
                        <h2 id='title' className="text-2xl font-semibold">This is:</h2>
                        <h2 id='title' className="text-5xl my-2 font-bold" style={{ color: '#1484da' }}>Drift Up</h2>
                        <div className="text-3xl my-2 font-bold" id="typewriter"></div>
                    </div>
                    <p className="lg:me-80 text-[18px] ">In Drift Up, a game with the theme of "strange power-ups," players compete on a frantic racing track while activating bizarre and challenging power-ups. From inverted controls and camera distortions to uncontrollable turbos, anti-gravity effects, and slow motion, each power-up pushes your skills to the limit. Stay in control and master the chaos to reach the finish line in this thrilling speed challenge.</p>
                </div>
            </div>            
        </div>
    );
};

export default AboutDrift