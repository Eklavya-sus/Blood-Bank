import React from 'react'


export default function Homepage() {
  return (
    <div>
    <div className='bg-[#02042b]'>
      <div className="bg-[#02042b] w-10/12 md:w-11/12 max-w-[1080px] mx-auto flex flex-col lg:flex-row items-center justify-between -mt-[0.5px]">
      <div className="space-y-8 my-16 lg:my-0">
          <h1 className= "font-extrabold text-[115px] leading-[1.1] text-white mx-[-10px] mt-[50px]">
            BLOOD <br></br>
            BANK
          </h1>
          <div className="w-6 h-1 bg-green-400 px-[30px]"></div>
          <p className="text-[18px] leading-7 text-white opacity-70">
          Save lives through seamless blood management. Collect vital donations from generous donors. Distribute life-saving resources to healthcare providers. Never run dry on the gift of life
          </p>
          <button className="bg-green-400 text-white py-[14px] px-[18px] rounded-md font-bold hover:bg-green-500 transition-all duration-200">Sign Up Now</button>
      
          
        </div>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/001/978/288/small/volunteer-collecting-blood-donation-free-vector.jpg"  loading="lazy"
          class="w-full max-w-[680px]"
        />
        
      </div>
      
    </div>
    <svg className=" z-100 mr-[-10px]"
    viewBox="0 0 1446 199"
    focusable="false"
    class="chakra-icon css-1w3t3sf"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
  >
    <path
      d="M -6 68.5 V 0 H 1445 V 91 L 1289 170 L -6 68.5 Z"
      fill="#02042B"
    ></path>
  </svg>

  <h1></h1>
  </div>
  )
}
