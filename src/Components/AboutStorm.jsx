
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';

import React, { useEffect, useLayoutEffect, useRef } from 'react';

import Typewriter from 'typewriter-effect/dist/core';
import profile from '../assets/StormKitchen.png';



const AboutStorm =()=>{

    useEffect(() => {
        const typewriter = new Typewriter('#typewriter', {
            strings: ['The Calm Before The Storm', 'Chef', 'Kitchen', , 'Sushi'],
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
                        <h2 id='title' className="text-5xl my-2 font-bold" style={{ color: '#1484da' }}>Storm In The Kitchen</h2>
                        <div className="text-3xl my-2 font-bold" id="typewriter"></div>
                    </div>
                    <p className="lg:me-80 text-[18px] ">In Storm in the Kitchen, a game with the theme of "the calm before the storm," you take on the role of a chef. Your job is to cut sushi and deliver the dishes to customers to earn points. But be careful, not everything is as simple as it seems. Every now and then, the number of customers increases, and a storm forms among the customers waiting to be served, adding an extra challenge to your cooking duties.</p>
                </div>
            </div>            
        </div>
    );
};

export default AboutStorm