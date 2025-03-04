import React from 'react';
import YouTube from 'react-youtube';

const HomeDevelopment = () => {
    

    return (
        <div id="ProjectDevelopment" className="py-28 lg:px-44 px-4 text-white">
            <div className="flex lg:flex-row flex-col items-center justify-center gap-20">
                {/* Texto a la izquierda */}
                <div className="lg:w-[50%]">
                    <div className="text-2xl font-semibold mb-4">
                        <h2 className="text-5xl my-2 font-bold" style={{ color: '#1484da' }}>
                            UAO Vision Home
                        </h2>
                    </div>
                    <p className="text-lg mb-6">
                        UAO Vision Home is a virtual reality experience developed by me and another collaborator to address the challenges of selecting a new home. This project aimed to revolutionize the traditional home-buying process by providing an interactive and immersive tool for prospective buyers.
                    </p>
                    <p className="text-lg mb-6">
                        One of the key issues we tackled was the difficulty of interpreting 2D floor plans, which often fail to convey accurate proportions, and the limited time and personalization offered by physical property visits. Our solution allowed users to realistically and interactively visualize their potential home, tailoring it to their preferences in real-time.
                    </p>
                    <p className="text-lg mb-6">
                        Through the virtual reality experience, users could customize elements such as wall and ceiling colors, floor and furniture materials, light intensity and warmth, as well as open doors and move objects within the space. This level of personalization empowered clients to make informed decisions while enhancing their overall satisfaction and connection to their future home.
                    </p>
                    <p className="text-lg">
                        This project showcased our ability to blend technical innovation with user-centric design. It pushed us to explore advanced VR technologies and implement interactive features that simulate real-world scenarios, demonstrating how virtual reality can transform industries like real estate by offering meaningful and immersive solutions.
                    </p>
                </div>

                {/* Video de YouTube a la derecha */}
                <div className="lg:w-[50%] w-full">
                    <div className="relative pb-[56.25%] max-w-full mx-auto">
                        <YouTube
                            videoId="WsVjCfcKEgk"
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
        </div>
    );
};

export default HomeDevelopment;
