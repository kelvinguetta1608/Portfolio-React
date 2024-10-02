import profile from '../assets/Captura2.png'
import { FaUnity } from "react-icons/fa6";

const About =()=>{
    return(
        <div id="About" className='py-28 lg:px-44 px-[20px] text-white'>
            <h2 className='text-4xl text-bold mb-28 text-center'>About Me</h2>
            <div className='flex lg:flex-row flex-col lg:items-start items-center justify-center gap-36'>
                <img className='h-[20rem] lg:w-[40%] rounded-xl mb-9' src={profile} alt="" />
                <div className='flex lg:justify-start justify-center gap-[20px] mb-[40px]'>
                    <div className='bg-gray-900 p-[10px] rounded-xl flex flex-col items-ceneter justify-center'>
                        <FaUnity className='text-[20px] text-center m-[6px]'/>
                        <h2 className='text-[17px] font-bold text-[#1484da]'>Expirerience</h2>
                        <span className='py-[1px] text-[16px] '>Unity Developer</span>
                    </div>
                    <div className='bg-gray-900 p-[10px] rounded-xl flex flex-col items-ceneter justify-center'>
                        <FaUnity className='text-[20px] text-center m-[6px]'/>
                        <h2 className='text-[17px] font-bold text-[#1484da]'>Expirerience</h2>
                        <span className='py-[1px] text-[16px] '>Unity Developer</span>
                    </div>
                    <div className='bg-gray-900 p-[10px] rounded-xl flex flex-col items-ceneter justify-center'>
                        <FaUnity className='text-[20px] text-center m-[6px]'/>
                        <h2 className='text-[17px] font-bold text-[#1484da]'>Expirerience</h2>
                        <span className='py-[1px] text-[16px] '>Unity Developer</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About