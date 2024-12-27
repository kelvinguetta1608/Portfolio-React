import React from 'react';
import YouTube from 'react-youtube';

const AmuletoDevelopment = () => {
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
                            Amuleto de Jade
                        </h2>
                    </div>
                    <p className="text-lg mb-6">
                        Amuleto de Jade is a dark, desolate mystery game set in 1920s London, inspired by the works of H.P. Lovecraft. Players take on the role of an investigator following a cryptic letter from their friend Carter, who details his death after the theft of a jade amulet. This theft unleashes the Winged Hound, a malevolent entity that hunts the player, accompanied by minions like zombies and screamers. The story challenges players to unravel the mystery behind Carter's demise.
                    </p>
                    <p className="text-lg mb-6">
                        To progress, players must solve puzzles, interact with NPCs for crucial information, and recover the stolen amulet. The gameplay is designed to immerse players in a haunting atmosphere, combining investigation and survival elements. The final confrontation with the Winged Hound occurs in a cemetery, where the player must use their skills and resources to restore order and defeat the entity.
                    </p>
                    <p className="text-lg">
                        My role in the project was focused on programming the enemy logic, including zombies, screamers, and the Winged Hound—a fire-breathing flying entity. I also worked on their animations, ensuring they contributed to the eerie tone of the game. Additionally, I implemented NPC dialogues and developed some of the puzzles, enhancing the interactive storytelling experience.
                    </p>
                </div>

                {/* YouTube video on the right */}
                <div className="lg:w-[50%] flex justify-center">
                    <div className="w-full h-full">
                        <YouTube videoId="ULCu1GY_v8M" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AmuletoDevelopment;
