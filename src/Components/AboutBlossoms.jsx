import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';

import React, { useEffect, useLayoutEffect, useRef } from 'react';

import Typewriter from 'typewriter-effect/dist/core';
import profile from '../assets/BlossomsGame.png';



const AboutBlossoms =()=>{

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
                        <h2 id='title' className="text-5xl my-2 font-bold" style={{ color: '#1484da' }}>Blossoms Of Peace</h2>
                        <div className="text-3xl my-2 font-bold" id="typewriter"></div>
                    </div>
                    <p className="lg:me-80 text-[18px] ">In Blossoms of Peace, a "chillax and play" themed game, you play as a passionate florist growing and selling flowers that align with customers' emotions, guided by a unique book based on color theory. Explore the garden to collect seeds, plant and care for your flowers, then deliver them to customers seeking the perfect bloom to enhance their mood. Successfully completing deliveries unlocks new challenges, combining strategy, empathy, and creativity in a heartwarming gardening experience.</p>
                </div>
            </div>            
        </div>
    );
};

export default AboutBlossoms