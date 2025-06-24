import { useState } from "react";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { MdOutlineClose } from "react-icons/md";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { HashLink } from 'react-router-hash-link';
import { navData } from "../utils/navbarData";
const Navbar = () => {
    const [nav,setNav]=useState(false);
    const [color,setColor]=useState(false);
    
    
    const changeColor=()=>{
        if(window.scrollY>=90){
            setColor(true);
        }
        else{
            setColor(false);
        }
    }
    window.addEventListener('scroll',changeColor);
return (
<nav>
    <div className={color?"flex justify-between bg-gray-950 text-white py-2 px-8 text-xl lg:text-2xl font-extralight items-center fixed w-screen":"flex justify-between bg-transparent text-white py-2 px-8 text-xl lg:text-2xl font-extralight items-center fixed w-screen"}>
        <div className="text-3xl lg:text-4xl">{`</>`}</div>

        <ul className="hidden md:flex gap-8 py-2 ">
            {navData.map(({id,name})=>{
                let l=`#${name.toLowerCase()}`
                return <HashLink to={l} key={id} smooth><li className="hover:border-b-2 border-sky-300 cursor-pointer duration-100 " >
                    {name}
                </li>
                </HashLink>
            })}
        </ul>

        <div onClick={()=>{
            setNav(!nav);
        }} className="z-20 cursor-pointer md:hidden">
        {nav?<MdOutlineClose size={30} />:<HiOutlineBars3BottomRight size={35} />}
        </div>

        <ul className={nav?"w-screen h-screen flex flex-col justify-center items-center gap-10 absolute top-0 right-0 bg-slate-800/95 duration-500 z-10":"w-0 overflow-hidden h-screen flex flex-col justify-center items-center gap-10 absolute top-0 right-0 bg-slate-100/15 duration-500 "}>
            {navData.map(({id,name})=>{
                let l=`#${name.toLowerCase()}`
                return <HashLink to={l} key={id} smooth><li key={id} className="text-3xl hover:border-b-2 border-sky-300 cursor-pointer duration-150" onClick={()=>{
                    setNav(!nav);
                }}>{name}</li></HashLink>
            })}
        </ul>
        
        <div className="fixed bottom-4 right-4 cursor-pointer">
            <HashLink to="#" smooth>
                <HiOutlineChevronDoubleUp size={35} />
            </HashLink>
        </div>
        
    </div>
</nav>
)
}

export default Navbar