import React from 'react'
import {Link} from "react-router-dom";

export default function Footer() {
  return (
    <div>
<div className="bg-[#02042b]">
    <div className="max-w-2xl mx-auto text-white py-10">
        <div className="text-center">
            <h3 className="text-3xl mb-3"> Blood Bank Management System </h3>
            <h1 className='w-full text-6xl font-bold text-[#d04742]'>BloodLink Pro</h1>
        </div>
        <div className="mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
            <p className="order-2 md:order-1 mt-8 md:mt-0"> &copy; 2023 BloodLink Pro - All Rights Reserved</p>
            <div className="order-1 md:order-2">
                <Link to='' name='about' className="px-2">About us</Link>
                <Link to='' name='contact' className="px-2 border-l">Contact us</Link>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}
