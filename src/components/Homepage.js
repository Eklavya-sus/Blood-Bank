import React from 'react';
import {Link} from "react-router-dom";
import h2 from '../images/h2.jpg';
export default function Homepage() {
  return (
    <div>
    <div className='bg-[#02042b]'>
      <div className="bg-[#02042b] w-10/12 md:w-11/12 max-w-[1080px] mx-auto flex flex-col lg:flex-row items-center justify-between -mt-[0.5px]">
      <div className="space-y-8 my-16 lg:my-0">
          <h1 className= "font-extrabold text-[90px] leading-[1.1] text-white mx-[-10px] mt-[-5%]">
            BLOODLINK <br></br>
            PRO
          </h1>
          <div className="w-6 h-1 bg-[#d04742] px-[30px]"></div>
          <p className="text-[18px] leading-7 text-white opacity-70 pb-6">
          Save lives through seamless blood management. Collect vital donations from generous donors. Distribute life-saving resources to healthcare providers. Never run dry on the gift of life
          </p>
          <Link to ='/register' className='mt-6'>
          <button className="bg-[#d04742] active:scale-90 text-white py-[12px] px-[18px] rounded-md font-bold hover:bg-[#a42524] transition-all duration-200">Sign Up Now</button>
          </Link>
        </div>
        <img src="./Image.png"  loading="lazy"
          className="w-full max-w-[680px]"
        />
      </div>
      
    </div>
    <svg className=" z-100 mr-[-1%] "
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

  <section className="mt-[10px] relative overflow-hidden">

      <img
        src="/Dots.png"
        alt="dots"
        loading="lazy"
        width="233"
        height="167"
        className="absolute -z-[100] -top-[8rem] left-[10rem] hidden md:inline-block"
      />
      <img
        src="/Dots.png"
        alt="dots"
        loading="lazy"
        width="233"
        height="167"
        className="absolute -z-[100] top-[3rem] right-0 rotate-180 hidden md:inline-block"
      />

      <div
        className="w-10/12 md:w-11/12 max-w-[1080px] mx-auto relative overflow-hidden pt-4"
      >

        <h2
          className="hidden md:block text-center text-3xl leading-[1.2] font-extrabold"
        >
          Make Successful Donations To Save Lives
        </h2>

        <h2
          className="inline-block text-center md:hidden text-[2.5rem] leading-[1.2] font-extrabold mx-auto"
        >
          Make Successful Donations To Save Lives
        </h2>
        <div className="w-6 h-1 bg-[#d04742] mx-auto mt-4 mb-6 md:mb-20"></div>

        <div
          className="w-full min-h-[520px] bg-white flex md:border border-gray-400 rounded-md relative p-4 md:p-10 py-12"
        >

          <img
            src="./Image.png"  loading="lazy"
            className="bg-[#d04742] absolute right-2 top-12 w-12 h-12 rounded-full z-10 transition-all duration-200 drop-shadow-xl md:hidden"
          />

          <div
            className="absolute border-t-[6rem] border-l-[6rem] border-t-transparent border-l-white z-20 top-6 right-0 md:hidden"
          ></div>
          <div className="flex flex-col justify-between items-start w-full">
            <h3
              className=" text-xl md:leading-10 md:text-[28px] font-bold md:max-w-[500px] w-[320px]"
            >
              Why Should You Donate Your
              <span className="text-[#d04742]"> Blood?</span>
            </h3>
            <div className="w-6 h-1 bg-[#d04742] px-[30px]"></div>
            <ul className="space-y-2 my-6 md:my-0">
              <li className=" flex items-center space-x-2">

                <span>Blood donation directly saves lives.</span>
              </li>
              <li className=" flex items-center space-x-2">

                <span> Help your community and loved ones </span>
              </li>
              <li className=" flex items-center space-x-2">

                <span>  Ensure a constant blood supply.</span>
              </li>
              <li className=" flex items-center space-x-2">

                <span> Reduce your risk of health conditions. </span>
              </li>
              <li className=" flex items-center space-x-2">

                <span> Feel good about making a difference. </span>
              </li>
              <li className=" flex items-center space-x-2">

                <span>  One donation can save lives and renew naturally. </span>
              </li>
            </ul>
            <div
              className="w-full md:w-fit flex flex-col-reverse md:flex-row md:items-center md:space-x-4 gap-y-4 md:space-y-0"
            >
              <Link to='/register'
                className="bg-[#d04742] active:scale-90 w-full md:w-fit flex items-center justify-center md:justify-start text-white py-[14px] px-[18px] rounded-md font-bold hover:bg-[#a42524] transition-all duration-200"
              >
                Sign Up Now
                <svg
                  viewBox="0 0 24 24"
                  focusable="false"
                  className="w-[14px] h-[14px] ml-3"
                >
                  <path
                    fill="currentColor"
                    d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
                  ></path>
                </svg>
              </Link>
              <div className="flex items-center cursor-pointer group ">
                <a
                  href="#"
                  className="font-bold text-[#d04742]  transition-all duration-200"
                  >Know More</a
                >
              </div>
            </div>
          </div>
          <img
            src={h2}  loading="lazy"
            alt="payment suite"
            className="hidden md:block md:max-w-[400px] lg:max-w-[600px] absolute right-0 lg:top-0 bottom-0 mt-8 "
          />
        </div>

        <div
          className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10"
        >
        </div>
      </div>
    </section>
<link rel="stylesheet" href="https://cdn.tailgrids.com/tailgrids-fallback.css" />

<section class="pt-20 lg:pt-[120px] pb-10 lg:pb-20 bg-[#F3F4F6]">
   <div class="container">
      <div class="flex flex-wrap -mx-4">
         <div class="w-full md:w-1/2 xl:w-1/3 px-4">
            <div className="bg-white rounded-lg overflow-hidden mb-10">
               <img
                  src="https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-01.jpg"
                  alt="image"
                  class="w-full"
                  />
               <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                  <h3>
                     <a
                        href="javascript:void(0)"
                        class="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        "
                        >
                     50+ Best creative website themes & templates
                     </a>
                  </h3>
                  <p class="text-base text-body-color leading-relaxed mb-7">
                     Lorem ipsum dolor sit amet pretium consectetur adipiscing
                     elit. Lorem consectetur adipiscing elit.
                  </p>
                  <a
                     href="javascript:void(0)"
                     class="
                     inline-block
                     py-2
                     px-7
                     border border-[#E5E7EB]
                     rounded-full
                     text-base text-body-color
                     font-medium
                     hover:border-primary hover:bg-primary hover:text-white
                     transition
                     "
                     >
                  View Details
                  </a>
               </div>
            </div>
         </div>
         <div class="w-full md:w-1/2 xl:w-1/3 px-4">
            <div class="bg-white rounded-lg overflow-hidden mb-10">
               <img
                  src="https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-02.jpg"
                  alt="image"
                  class="w-full"
                  />
               <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                  <h3>
                     <a
                        href="javascript:void(0)"
                        class="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        "
                        >
                     The ultimate UX and UI guide to card design
                     </a>
                  </h3>
                  <p class="text-base text-body-color leading-relaxed mb-7">
                     Lorem ipsum dolor sit amet pretium consectetur adipiscing
                     elit. Lorem consectetur adipiscing elit.
                  </p>
                  <a
                     href="javascript:void(0)"
                     class="
                     inline-block
                     py-2
                     px-7
                     border border-[#E5E7EB]
                     rounded-full
                     text-base text-body-color
                     font-medium
                     hover:border-primary hover:bg-primary hover:text-white
                     transition
                     "
                     >
                  View Details
                  </a>
               </div>
            </div>
         </div>
         <div class="w-full md:w-1/2 xl:w-1/3 px-4">
            <div class="bg-white rounded-lg overflow-hidden mb-10">
               <img
                  src="https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-03.jpg"
                  alt="image"
                  class="w-full"
                  />
               <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                  <h3>
                     <a
                        href="javascript:void(0)"
                        class="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        "
                        >
                     Creative Card Component designs graphic elements
                     </a>
                  </h3>
                  <p class="text-base text-body-color leading-relaxed mb-7">
                     Lorem ipsum dolor sit amet pretium consectetur adipiscing
                     elit. Lorem consectetur adipiscing elit.
                  </p>
                  <a
                     href="javascript:void(0)"
                     class="
                     inline-block
                     py-2
                     px-7
                     border border-[#E5E7EB]
                     rounded-full
                     text-base text-body-color
                     font-medium
                     hover:border-primary hover:bg-primary hover:text-white
                     transition
                     "
                     >
                  View Details
                  </a>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
  </div>

  )
}
