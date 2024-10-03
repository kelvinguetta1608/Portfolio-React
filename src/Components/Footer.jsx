const Footer =()=>{
    return(
        <div className="py-4 bg-black text-white text-center lg:px-36">
            <div className="p-4 py-6 lg:py-8 md:flex md:justify-between">
                <div className="mb-6 md:mb-0 ">
                    <a className="flex justify-center items-center" href=""><span className="text-2xl font-semibold whitespace-normal">Portfolio</span></a>
                </div>
                <div className=" flex gap-5 my-2 justify-center">
                    <a className="hover:underline" href="https://github.com/kelvinguetta1608">Github</a>
                    <a className="hover:underline" href="https://kevinvelasco.itch.io/">Itch.io</a>
                    <a className="hover:underline" href="https://www.linkedin.com/in/kevin-velasco-91a759295/?trk=opento_sprofile_details">Linkedin</a>
                </div>
            </div>
            <hr />
            <span className="text-center">Kevin Andres Velasco Perez 2024</span>
        </div>
    );
};

export default Footer