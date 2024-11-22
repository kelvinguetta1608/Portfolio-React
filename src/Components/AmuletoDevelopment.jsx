import React from 'react';
import YouTube from 'react-youtube';

const AmuletoDevelopment = () => {
    

    return (
        <div id="ProjectDevelopment" className="py-28 lg:px-44 px-4 text-white">
            <div className="flex lg:flex-row flex-col items-center justify-center gap-20">
                {/* Texto a la izquierda */}
                <div className="lg:w-[50%]">
                    <div className="text-2xl font-semibold mb-4">
                        <h2 className="text-5xl my-2 font-bold" style={{ color: '#1484da' }}>
                            Blossoms of Peace
                        </h2>
                    </div>
                    <p className="text-lg mb-6">
                        Blossoms of Peace was developed in Unity by me and another developer in a 48-hour timeframe for the Game Jam + 2024. My primary role was programming the core game mechanics, where I implemented advanced logic using ScriptableObject to manage the interactions between the NPC and the flowers. This allowed for accurate identification and correct delivery of flower orders requested by the NPCs. Additionally, I was responsible for character animations, ensuring a smooth and cohesive visual experience. My teammate handled the level design, flower growth logic, and their respective animations, completing the game environment.
                    </p>
                    <p className="text-lg">
                        The development of Blossoms of Peace was a journey of combining relaxation with creativity. As the theme suggested, "chillax and play," the goal was to design a game that encourages calmness and emotional connection through flower planting. The game mechanics involve collecting seeds, planting flowers, and matching blooms to customer moods. This process required the integration of various game systems such as gardening, customer interaction, and color theory to ensure a seamless and delightful experience.
                    </p>
                    <p className="text-lg">
                        Throughout the development, we focused on creating an environment where players feel at peace while still being engaged in thoughtful gameplay. Our team worked together to craft a simple, yet deep narrative, using color theory to evoke emotion through the flowers. The project pushed us to explore unique gameplay elements that blend empathy, strategy, and nature.
                    </p>
                </div>

                {/* Video de YouTube a la derecha */}
                <div className="lg:w-[50%] flex justify-center">
                    <div className="w-full h-full">
                        <YouTube videoId="3lwQ5kNF5PI"  />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AmuletoDevelopment;
