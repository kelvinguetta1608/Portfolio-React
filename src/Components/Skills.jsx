import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const Skills = () => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    // Variants for hard skills
    const hardSkillsVariants = {
        hidden: { opacity: 0, x: -350 }, // Starts from the left
        visible: { opacity: 1, x: 0 },   // Ends at its original position
    };

    // Variants for soft skills
    const softSkillsVariants = {
        hidden: { opacity: 0, x: 350 },  // Starts from the right
        visible: { opacity: 1, x: 0 },   // Ends at its original position
    };

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true); // Activate animations when in view
                } else {
                    setIsVisible(false); // Deactivate animations when out of view
                }
            });
        });

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <div ref={ref} className="py-44 lg:px-64 md:px-28 bg-black" id="Skills" >
            <h1 className="text-4xl text-white font-bold mb-10 text-center">Skills</h1>
            <div className="max-w-7xl mx-auto w-full flex justify-between">
                {/* Hard skills column */}
                <motion.div 
                    className="w-full h-full pr-4" 
                    initial="hidden" 
                    animate={isVisible ? "visible" : "hidden"} // Changes animation when in view
                    variants={hardSkillsVariants} 
                    transition={{ duration: 0.5 }}
                >
                    <div className="w-full h-full p-2">
                        <h3 className="mb-1 text-sm font-semibold leading-none text-[#1484da]">Hard</h3>
                        <h3 className="text-lg font-semibold text-white my-2">Programming</h3>
                        <p className="mb-4 text-base font-normal text-gray-400">
                            Knowledge in languages such as C# (for Unity game development) and Python (for automation, data analysis, and application development).
                        </p>

                        <h3 className="mb-1 text-sm font-semibold leading-none text-[#1484da]">Hard</h3>
                        <h3 className="text-lg font-semibold text-white my-2">Unity (2D/3D, AR, VR)</h3>
                        <p className="mb-4 text-base font-normal text-gray-400">
                            Development of interactive experiences and simulations on various platforms.
                        </p>

                        <h3 className="mb-1 text-sm font-semibold leading-none text-[#1484da]">Hard</h3>
                        <h3 className="text-lg font-semibold text-white my-2">UX/UI Design</h3>
                        <p className="mb-4 text-base font-normal text-gray-400">
                            Design of user interfaces and experiences focused on interaction and accessibility.
                        </p>

                        <h3 className="mb-1 text-sm font-semibold leading-none text-[#1484da]">Hard</h3>
                        <h3 className="text-lg font-semibold text-white my-2">Web Development</h3>
                        <p className="mb-4 text-base font-normal text-gray-400">
                            Creation of websites and web applications using technologies like HTML, CSS, JavaScript, React, Tailwind, and Firebase.
                        </p>

                        <h3 className="mb-1 text-sm font-semibold leading-none text-[#1484da]">Hard</h3>
                        <h3 className="text-lg font-semibold text-white my-2">Adobe Suite (Photoshop, Illustrator, After Effects)</h3>
                        <p className="mb-4 text-base font-normal text-gray-400">
                            Graphic design and advanced multimedia production, such as illustrations, animations, and impactful motion graphics.
                        </p>
                    </div>
                </motion.div>

                {/* Soft skills column */}
                <motion.div 
                    className="w-full h-full pl-4 relative" 
                    initial="hidden" 
                    animate={isVisible ? "visible" : "hidden"} // Changes animation when in view
                    variants={softSkillsVariants} 
                    transition={{ duration: 0.5 }}
                >
                    {/* Separator */}
                    <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#1484da] mx-auto"></div>
                    <div className="absolute left-[-6px] top-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full bg-[#1484da] z-10 text-white text-center"></div>

                    <div className="w-full h-full p-2 pr-8 text-right">
                        <h3 className="mb-1 text-sm font-semibold leading-none text-[#1484da]">Soft</h3>
                        <h3 className="text-lg font-semibold text-white my-2">Adaptability</h3>
                        <p className="mb-4 text-base font-normal text-gray-400">
                            Ability to quickly adjust to new tools and technologies.
                        </p>

                        <h3 className="mb-1 text-sm font-semibold leading-none text-[#1484da]">Soft</h3>
                        <h3 className="text-lg font-semibold text-white my-2">Teamwork</h3>
                        <p className="mb-4 text-base font-normal text-gray-400">
                            Ability to collaborate effectively in multidisciplinary teams, promoting an atmosphere of cooperation and communication.
                        </p>

                        <h3 className="mb-1 text-sm font-semibold leading-none text-[#1484da]">Soft</h3>
                        <h3 className="text-lg font-semibold text-white my-2">Leadership</h3>
                        <p className="mb-4 text-base font-normal text-gray-400">
                            Competence to lead and motivate teams in collaborative projects, fostering a positive and productive work environment.
                        </p>

                        <h3 className="mb-1 text-sm font-semibold leading-none text-[#1484da]">Soft</h3>
                        <h3 className="text-lg font-semibold text-white my-2">Continuous Learning</h3>
                        <p className="mb-4 text-base font-normal text-gray-400">
                            Proactive approach to personal and professional development, always seeking new skills and improvements in existing ones.
                        </p>

                        <h3 className="mb-1 text-sm font-semibold leading-none text-[#1484da]">Soft</h3>
                        <h3 className="text-lg font-semibold text-white my-2">Communication Skills</h3>
                        <p className="mb-4 text-base font-normal text-gray-400">
                            Ability to express oneself clearly and collaborate effectively with work teams.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Skills;
