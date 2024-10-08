import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const Skills = () => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    // Variantes para habilidades duras
    const hardSkillsVariants = {
        hidden: { opacity: 0, x: -350 }, // Comienza a la izquierda
        visible: { opacity: 1, x: 0 },   // Termina en su posición original
    };

    // Variantes para habilidades blandas
    const softSkillsVariants = {
        hidden: { opacity: 0, x: 350 },  // Comienza a la derecha
        visible: { opacity: 1, x: 0 },   // Termina en su posición original
    };

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true); // Activar animaciones al entrar en vista
                } else {
                    setIsVisible(false); // Desactivar animaciones al salir de vista
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
                {/* Columna de habilidades duras */}
                <motion.div 
                    className="w-full h-full pr-4" 
                    initial="hidden" 
                    animate={isVisible ? "visible" : "hidden"} // Cambia la animación al estar en vista
                    variants={hardSkillsVariants} 
                    transition={{ duration: 0.5 }}
                >
                    <div className="w-full h-full p-2">
                        <h3 className="mb-1 text-sm font-semibold leading-none text-[#1484da]">Hard</h3>
                        <h3 className="text-lg font-semibold text-white my-2">Programación</h3>
                        <p className="mb-4 text-base font-normal text-gray-400">
                            Conocimiento en lenguajes como C# (para desarrollo de videojuegos en Unity) y Python (para automatización, análisis de datos y desarrollo de aplicaciones).
                        </p>

                        <h3 className="mb-1 text-sm font-semibold leading-none text-[#1484da]">Hard</h3>
                        <h3 className="text-lg font-semibold text-white my-2">Unity (2D/3D, AR, VR)</h3>
                        <p className="mb-4 text-base font-normal text-gray-400">
                            Desarrollo de experiencias interactivas y simulaciones en distintas plataformas.
                        </p>

                        <h3 className="mb-1 text-sm font-semibold leading-none text-[#1484da]">Hard</h3>
                        <h3 className="text-lg font-semibold text-white my-2">UX/UI Design</h3>
                        <p className="mb-4 text-base font-normal text-gray-400">
                            Diseño de interfaces y experiencias de usuario enfocadas en la interacción y accesibilidad.
                        </p>

                        <h3 className="mb-1 text-sm font-semibold leading-none text-[#1484da]">Hard</h3>
                        <h3 className="text-lg font-semibold text-white my-2">Desarrollo web</h3>
                        <p className="mb-4 text-base font-normal text-gray-400">
                            Creación de sitios y aplicaciones web utilizando tecnologías como HTML, CSS, JavaScript y React.
                        </p>

                        <h3 className="mb-1 text-sm font-semibold leading-none text-[#1484da]">Hard</h3>
                        <h3 className="text-lg font-semibold text-white my-2">Suite Adobe (Photoshop, Illustrator, After Effects)</h3>
                        <p className="mb-4 text-base font-normal text-gray-400">
                            Diseño gráfico y producción multimedia avanzada, como ilustraciones, animaciones y producción de motion graphics impactantes.
                        </p>
                    </div>
                </motion.div>

                {/* Columna de habilidades blandas */}
                <motion.div 
                    className="w-full h-full pl-4 relative" 
                    initial="hidden" 
                    animate={isVisible ? "visible" : "hidden"} // Cambia la animación al estar en vista
                    variants={softSkillsVariants} 
                    transition={{ duration: 0.5 }}
                >
                    {/* Separador */}
                    <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#1484da] mx-auto"></div>
                    <div className="absolute left-[-6px] top-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full bg-[#1484da] z-10 text-white text-center"></div>

                    <div className="w-full h-full p-2 pr-8 text-right">
                        <h3 className="mb-1 text-sm font-semibold leading-none text-[#1484da]">Soft</h3>
                        <h3 className="text-lg font-semibold text-white my-2">Adaptabilidad</h3>
                        <p className="mb-4 text-base font-normal text-gray-400">
                            Capacidad para ajustarse rápidamente a nuevas herramientas y tecnologías.
                        </p>

                        <h3 className="mb-1 text-sm font-semibold leading-none text-[#1484da]">Soft</h3>
                        <h3 className="text-lg font-semibold text-white my-2">Trabajo en equipo</h3>
                        <p className="mb-4 text-base font-normal text-gray-400">
                            Capacidad para colaborar de manera efectiva en equipos multidisciplinarios, promoviendo un ambiente de cooperación y comunicación.
                        </p>

                        <h3 className="mb-1 text-sm font-semibold leading-none text-[#1484da]">Soft</h3>
                        <h3 className="text-lg font-semibold text-white my-2">Liderazgo</h3>
                        <p className="mb-4 text-base font-normal text-gray-400">
                            Competencia para dirigir y motivar equipos en proyectos colaborativos, fomentando un ambiente de trabajo positivo y productivo.
                        </p>

                        <h3 className="mb-1 text-sm font-semibold leading-none text-[#1484da]">Soft</h3>
                        <h3 className="text-lg font-semibold text-white my-2">Aprendizaje continuo</h3>
                        <p className="mb-4 text-base font-normal text-gray-400">
                            Enfoque proactivo hacia el desarrollo personal y profesional, siempre en busca de nuevas competencias y mejoras en las habilidades existentes.
                        </p>

                        <h3 className="mb-1 text-sm font-semibold leading-none text-[#1484da]">Soft</h3>
                        <h3 className="text-lg font-semibold text-white my-2">Habilidades de Comunicación</h3>
                        <p className="mb-4 text-base font-normal text-gray-400">
                            Capacidad para expresarse claramente y colaborar eficazmente con equipos de trabajo.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Skills;
