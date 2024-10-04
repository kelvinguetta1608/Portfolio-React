import {Link} from "react-scroll";
import {IoHome, IoPerson, IoBagSharp} from "react-icons/io5"
import { BsLightbulbFill } from "react-icons/bs";
import { BiSolidMessageAltDetail } from "react-icons/bi";

const Menu =()=>{
    return(
        <div className="flex justify-center flex-col items-center px-2">
            <div className="bg-gray-600 z-40 rounded-md m-[3px] flex gap-2
         bottom-10 py-2 px-8 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 fixed">
                <Link activeClass="bg=[#1484da] rounded-full" 
                    to="Home"
                    smooth={true}
                    spy={true}
                    offset={50}
                    duration={500}

                >

                    <IoHome className="text-[26px] m-[10px] text-center"/>
                </Link>
                <Link activeClass="bg=[#1484da] rounded-full" 
                    to="About"
                    smooth={true}
                    spy={true}
                    offset={50}
                    duration={500}

                >

                    <IoPerson className="text-[26px] m-[10px] text-center"/>
                </Link>
                
                <Link activeClass="bg=[#1484da] rounded-full" 
                    to="Skills"
                    smooth={true}
                    spy={true}
                    offset={50}
                    duration={500}

                >

                    <BsLightbulbFill className="text-[26px] m-[10px] text-center"/>
                </Link>

                <Link activeClass="bg=[#1484da] rounded-full" 
                    to="Projects"
                    smooth={true}
                    spy={true}
                    offset={50}
                    duration={500}

                >

                    <IoBagSharp className="text-[26px] m-[10px] text-center"/>
                </Link>

                <Link activeClass="bg=[#1484da] rounded-full" 
                    to="Contact"
                    smooth={true}
                    spy={true}
                    offset={50}
                    duration={500}

                >

                    <BiSolidMessageAltDetail className="text-[26px] m-[10px] text-center"/>
                </Link>
            </div>
        </div>
    );
};

export default Menu