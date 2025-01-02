import React from 'react';
import YouTube from 'react-youtube';

const AmuletoDevelopment = () => {
    const handlePlay = () => {
        window.open('https://arthurxs.itch.io/la-maldicion-del-buziraco', '_blank');
    };

    return (
        <div id="ProjectDevelopment" className="py-28 lg:px-44 px-4 text-white">
            <div className="flex lg:flex-row flex-col items-center justify-center gap-20">
                {/* Text description */}
                <div className="lg:w-[50%]">
                    <div className="text-2xl font-semibold mb-4">
                        <h2
                            className="text-5xl my-2 font-bold"
                            style={{ color: '#1484da' }}
                        >
                            La Maldición del Buziraco
                        </h2>
                    </div>
                    <p className="text-lg mb-6">
                        La Maldición del Buziraco is a dark, desolate mystery game based on the legend of the Buziraco from the city of Cali. Players take on the role of an investigator who receives a message from Andrés Balanta, a local resident, informing them that the Buziraco has escaped from its prison at "El Cerro de las Tres Cruces." Andrés explains that the player must go to the Fraile Cuesta house to gather clues and figure out how to stop the Buziraco, a malevolent entity that hunts the player, accompanied by zombies and screamers.
                    </p>
                    <p className="text-lg mb-6">
                        To progress, players must solve puzzles, interact with NPCs for crucial information, and uncover how to stop the Buziraco. The game is designed to immerse players in an eerie atmosphere, combining investigation and survival elements. The final confrontation with the Buziraco takes place in a cemetery, where the player must use their skills and resources to restore order and defeat the entity.
                    </p>
                    <p className="text-lg">
                        My role in the project focused on programming the enemy logic, including zombies, screamers, and the Buziraco, a fire-breathing flying entity. I also worked on their animations to enhance the game's dark atmosphere. Additionally, I implemented NPC dialogues and developed several of the puzzles, improving the interactive storytelling experience. I was also responsible for designing and implementing the HUD, which includes the health bar, damage effects, sanity bar, and the main menu and in-game menus.
                    </p>
                </div>

                {/* YouTube video */}
                <div className="lg:w-[50%] w-full">
                    <div className="relative pb-[56.25%] max-w-full mx-auto">
                        <YouTube
                            videoId="ULCu1GY_v8M"
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

export default AmuletoDevelopment;
