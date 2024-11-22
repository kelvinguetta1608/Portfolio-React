import React from 'react';


const StormDevelopment = () => {
    return (
        <div id="ProjectDevelopment" className="py-28 lg:px-44 px-4 text-white">
            <div className="flex lg:flex-row flex-col items-center justify-between gap-20">
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

                {/* Video a la derecha */}
                <div className="lg:w-[50%] flex justify-center">
                    <video
                        className="w-full h-[400px] rounded-xl shadow-lg"
                        controls
                    >
                        <source src="/Gameplay1.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
    );
};

export default StormDevelopment;
