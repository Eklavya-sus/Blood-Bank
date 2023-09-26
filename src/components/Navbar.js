import React from 'react'

export default function Navbar() {
  return (
    <div className=' bg-[#02042b] flex justify-between text-white items-center h-24  w-[100vw] px-4'>
      <h1 className='w-full text-6xl  font-bold text-[#d04742] p-40 pt-48 '>Blood Bank</h1>
      <ul className='flex pr-16 '>
        <li className='p-6 text-xl border-b-4 active:scale-90  pb-[10px] border-[#02042b] hover:border-[#d04742]  duration-200 cursor-pointer clip'>
          <p>Home</p>
        </li>
        
        <li className='p-6 text-xl border-b-4 active:scale-90 pb-[10px] border-[#02042b]  hover:border-[#d04742]  duration-200 cursor-pointer clip '>
          <p>Register</p>
        </li>
        <li className='p-6 text-xl border-b-4 active:scale-90 pb-[10px] border-[#02042b]  hover:border-[#d04742]  duration-200 cursor-pointer'>
          <p>About</p>
        </li>
        <li className='p-6 text-xl border-b-4 active:scale-90 pb-[10px] border-[#02042b]  hover:border-[#d04742]  duration-200 cursor-pointer'>
          <p>Contact</p>
        </li>
      </ul>
      
    </div>
  )
}
