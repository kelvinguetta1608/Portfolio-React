import React from 'react';
import YouTube from 'react-youtube';

const CalvoDevelopment = () => {
    return (
        <div id="ProjectDevelopment" className="py-28 lg:px-44 px-4 text-white">
            <div className="flex lg:flex-row flex-col items-center justify-center gap-20">
                {/* Text description on the left */}
                <div className="lg:w-[50%]">
                    <div className="text-2xl font-semibold mb-4">
                        <h2
                            className="text-5xl my-2 font-bold"
                            style={{ color: '#1484da' }}
                        >
                            Calvo Duty
                        </h2>
                    </div>
                    <p className="text-lg mb-6">
                        As a Game Developer within a team of 10 members from Universidad Autónoma de Occidente, I am contributing to the development of an exciting Third-Person Shooter (TPS) game, which is currently under construction. My primary responsibilities include the design and development of the Heads-Up Display (HUD). For the HUD, I designed buttons, banners, and visual elements using Illustrator, implementing them into an intuitive and visually appealing interface.
                    </p>
                    <p className="text-lg mb-6">
                        Regarding the customization functionality, I developed a dynamic system using ScriptableObjects that allows for the selection and customization of a single character with various outfits. This system is designed to be scalable and adaptable, making it easier to incorporate new customization options in the future.
                    </p>
                    <p className="text-lg">
                        Another significant contribution was the design and integration of a special shader that functions as a "wallhack," a strategic feature activated as an "ultimate ability" when a player achieves five eliminations. This project combines design, programming, and creativity, and my contribution focuses on creating an immersive and user-centered experience that balances functionality and style as we work toward completing the game.
                    </p>
                </div>

                {/* YouTube video on the right */}
                <div className="lg:w-[50%] flex justify-center">
                    <div className="w-full h-full">
                        <YouTube videoId="akv3F6uJ-A8" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CalvoDevelopment;
