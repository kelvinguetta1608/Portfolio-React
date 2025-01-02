import React from 'react';
import doggyImage from '../assets/PlayDoggy.jpg'; // Adjust the path according to your image location

const DoggyDevelopment = () => {
    const handlePlay = () => {
        window.open('https://arthurxs.itch.io/doggy-park', '_blank');
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
                            Doggy Park
                        </h2>
                    </div>
                    <p className="text-lg mb-6">
                        Doggy Park was developed over the course of 3 days as part of a university project, resembling a game jam. The game is inspired by the original title Piko Park, but in our version, we adopted a canine aesthetic. Here, 4 players must work cooperatively to overcome obstacles and reach their home.
                    </p>
                    <p className="text-lg mb-6">
                        The game features cooperative elements and a friendly design that encourages teamwork in a dynamic and enjoyable environment. Explore the surprises in the park and collaborate with your friends to overcome the challenges!
                    </p>
                    <p className="text-lg">
                        My role in the development was designing the mechanics for the second level, where one player is randomly assigned a bone at the top, which acts as a shield to protect against lasers and progress. In this level, players must form a tower by placing the player with the bone at the top and moving forward simultaneously.
                    </p>
                </div>

                {/* Image */}
                <div className="lg:w-[50%] w-full">
                    <div className="relative max-w-full mx-auto">
                        <img
                            src={doggyImage} // Imported image
                            alt="Doggy Park Screenshot"
                            className="w-full h-auto rounded-lg"
                        />
                    </div>
                </div>
            </div>

            {/* Button centered below text and image */}
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

export default DoggyDevelopment;
