import React from 'react'
import MenuItem from './MenuItem'
// import { AiFillHome } from 'react-icons/ai'
// import { BsFillInfoCircleFill } from 'react-icons/bs'
import { FaHome } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";

export default function Header() {
  return (
    <div className="">
        <div className="flex gap-4">
            {/* <MenuItem title="home" address="/" Icon={FaHome} /> */}
            {/* <MenuItem title="about" address="/about" Icon={BsFillInfoCircleFill} /> */}
            
            <FaHome title="home" address='/'  />
            <FaInfoCircle title="about" address="/about" />
        </div>
        <div className="">
            <span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg">IMDB</span>
            {/* <span className="text-xl hidden sm:inline">Next</span> */}
            <span className="text-xl hidden sm:inline">Clone</span>
            
        </div>
    </div>
  );
}
