import {Link} from "react-scroll";
import {IoHome, IoPerson, IoBagSharp} from "react-icons/io5"
import { BsLightbulbFill } from "react-icons/bs";

const Menu =()=>{
    return(
        <div>
            <div className="flex justify-center flex-col items-center">
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
                    to="Home"
                    smooth={true}
                    spy={true}
                    offset={50}
                    duration={500}

                >

                    <IoPerson className="text-[26px] m-[10px] text-center"/>
                </Link>
                <Link activeClass="bg=[#1484da] rounded-full" 
                    to="Home"
                    smooth={true}
                    spy={true}
                    offset={50}
                    duration={500}

                >

                    <IoBagSharp className="text-[26px] m-[10px] text-center"/>
                </Link>
                <Link activeClass="bg=[#1484da] rounded-full" 
                    to="Home"
                    smooth={true}
                    spy={true}
                    offset={50}
                    duration={500}

                >

                    <BsLightbulbFill className="text-[26px] m-[10px] text-center"/>
                </Link>

            </div>
        </div>
    );
};

export default Menu