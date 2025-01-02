import React from 'react';
import YouTube from 'react-youtube';

const StormDevelopment = () => {
    const handlePlay = () => {
        window.open('https://kevinvelasco.itch.io/storm-in-the-kitchen', '_blank');
    };

    return (
        <div id="ProjectDevelopment" className="py-28 lg:px-44 px-4 text-white">
            <div className="flex lg:flex-row flex-col items-center justify-center gap-20">
                {/* Texto a la izquierda */}
                <div className="lg:w-[50%]">
                    <div className="text-2xl font-semibold mb-4">
                        <h2 className="text-5xl my-2 font-bold" style={{ color: '#1484da' }}>
                            Storm in the Kitchen
                        </h2>
                    </div>
                    <p className="text-lg mb-6">
                        Storm in the Kitchen was developed by me in Unity as my first-ever Game Jam project during the Brackeys Game Jam 2024.2. The game was created within a one-week timeframe, adhering to the theme "the calm before the storm." This experience pushed me to demonstrate my technical skills and creativity while working under time constraints.
                    </p>
                    <p className="text-lg mb-6">
                        My primary contributions included designing and implementing the core game mechanics, such as intuitive movement mechanics using mouse clicks, a dynamic sushi-cutting system with precise knife interactions, and logic-driven order deliveries using ScriptableObjects. These systems ensured smooth gameplay, allowing players to interact seamlessly with the game world. Additionally, I handled character animations to enhance the game's visual appeal and immersion.
                    </p>
                    <p className="text-lg mb-6">
                        I utilized free assets for the environment and characters, focusing my efforts on programming and gameplay design to create an engaging experience. While the game had some bugs and lacked comprehensive feedback systems due to time constraints, the core mechanics successfully captured the intended escalation of challenge, reflecting the theme "the calm before the storm."
                    </p>
                    <p className="text-lg">
                        Participating in this Game Jam was a significant milestone in my development journey, showcasing my ability to independently manage the full lifecycle of a game under pressure. It provided an invaluable opportunity to refine my skills in Unity, script optimization, and gameplay design while learning from the challenges encountered in delivering a functional and creative game experience.
                    </p>
                </div>

                {/* Video de YouTube a la derecha */}
                <div className="lg:w-[50%] w-full">
                    <div className="relative pb-[56.25%] max-w-full mx-auto">
                        <YouTube
                            videoId="jC2i6Xgx6Y4"
                            className="absolute top-0 left-0 w-full h-full"
                            opts={{
                                width: '100%',
                                height: '100%',
                                playerVars: {
                                    autoplay: 0,
                                },
                            }}
                        />
                    </div>
                </div>
            </div>

            {/* Botón centrado debajo del texto y el video */}
            <div className="flex justify-center mt-10">
                <button
                    onClick={handlePlay}
                    className="px-4 py-2 text-xl rounded-lg bg-[#1484da] text-white transition-all duration-700 ease-in-out hover:bg-transparent hover:text-[#1484da] border border-[#1484da]"
                >
                    Play Me
                </button>
            </div>
        </div>
    );
};

export default StormDevelopment;
