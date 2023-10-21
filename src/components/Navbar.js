import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className=' bg-[#02042b] flex justify-between text-white items-center h-24 w-[100vw] px-4'>
            <h1 className='w-full text-6xl font-bold text-[#d04742] p-40 '>BloodLink Pro</h1>
            <ul className='flex pr-16 '>
                <li className='p-6 text-xl border-b-4 active:scale-90 pb-[10px] border-[#02042b] hover:border-[#d04742] duration-200 cursor-pointer clip'>
                    <Link to="/" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>

                <li className='p-6 text-xl border-b-4 active:scale-90 pb-[10px] border-[#02042b] hover:border-[#d04742] duration-200 cursor-pointer clip'>
                    <Link to="/register" smooth={true} duration={500}>
                        Register
                    </Link>
                </li>
                <li className='p-6 text-xl border-b-4 active:scale-90 pb-[10px] border-[#02042b] hover:border-[#d04742] duration-200 cursor-pointer'>
                    <ScrollLink to="about" smooth={true} duration={500}>
                        About
                    </ScrollLink>
                </li>
                <li className='p-6 text-xl border-b-4 active:scale-90 pb-[10px] border-[#02042b] hover:border-[#d04742] duration-200 cursor-pointer'>
                    <ScrollLink to="contact" smooth={true} duration={500}>
                        Contact
                    </ScrollLink>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;