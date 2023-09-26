import React from 'react'


export default function Homepage() {
  return (
    <div>
    <div className='bg-[#02042b]'>
      <div className="bg-[#02042b] w-10/12 md:w-11/12 max-w-[1080px] mx-auto flex flex-col lg:flex-row items-center justify-between -mt-[0.5px]">
      <div className="space-y-8 my-16 lg:my-0">
          <h1 className= "font-extrabold text-[115px] leading-[1.1] text-white mx-[-10px] mt-[-5%]">
            BLOOD <br></br>
            BANK
          </h1>
          <div className="w-6 h-1 bg-[#d04742] px-[30px]"></div>
          <p className="text-[18px] leading-7 text-white opacity-70">
          Save lives through seamless blood management. Collect vital donations from generous donors. Distribute life-saving resources to healthcare providers. Never run dry on the gift of life
          </p>
          <button className="bg-[#d04742] active:scale-90 text-white py-[14px] px-[18px] rounded-md font-bold hover:bg-[#a42524] transition-all duration-200">Sign Up Now</button>
      
          
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
              className=" text-xl md:leading-10 md:text-[28px] font-bold md:max-w-[500px] max-w-[190px]"
            >
              Supercharge your business with the all‑powerful
              <span className="text-[#d04742]"> Payment Gateway</span>
            </h3>
            <div className="w-6 h-1 bg-[#d04742] px-[30px]"></div>
            <ul className="space-y-2 my-6 md:my-0">
              <li className=" flex items-center space-x-2">

                <span>100+ Payment Methods</span>
              </li>
              <li className=" flex items-center space-x-2">

                <span> Industry Leading Success Rate </span>
              </li>
              <li className=" flex items-center space-x-2">

                <span> Superior Checkout Experience </span>
              </li>
              <li className=" flex items-center space-x-2">

                <span> Easy to Integrate </span>
              </li>
              <li className=" flex items-center space-x-2">

                <span> Instant Settlements from day 1 </span>
              </li>
              <li className=" flex items-center space-x-2">

                <span> In-depth Reporting and Insights </span>
              </li>
            </ul>
            <div
              className="w-full md:w-fit flex flex-col-reverse md:flex-row md:items-center md:space-x-4 gap-y-4 md:space-y-0"
            >
              <button
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
              </button>
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
            src="./Image.png"  loading="lazy"
            alt="payment suite"
            className="hidden md:block md:max-w-[400px] lg:max-w-[600px] absolute right-0 lg:top-0 bottom-0"
          />
        </div>

        <div
          className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10"
        >

          <div className="w-full min-h-[15rem] relative cursor-pointer featureCard">

            

            <svg
              viewBox="0 0 349.32501220703125 225"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              className="stroke-1 stroke-[#818597] h-full w-full absolute z-[90] featureCardSVG transition-all duration-200"

            >
              <path
                d="m 0 6 
              a 6 6 0 0 1 6 -6 
              h 250.32501220703125 
              a 16 16 0 0 1 11 5 
              l 77 77 
              a 16 16 0 0 1 5 11 
              v 126 
              a 6 6 0 0 1 -6 6 
              h -337.32501220703125 
              a 6 6 0 0 1 -6 -6 
              z"
                fill="#fff"
              ></path>
            </svg>

            <div
              className="z-[1000] absolute h-full w-full pl-5 py-6 pr-8 flex flex-col justify-between featureCardBox"
            >
              <div>
                <h3
                  className=" text-[#d04742] font-extrabold  leading-[1.2] text-[1.375rem]"
                >
                  Become a Donor
                </h3>
                <p className=" text-grayText mt-6">
                Lorem Ipsum is simply dummy text of the print-
                ing and typesetting industry. Lorem Ipsum has
                been the industry's standard.
                </p>
              </div>
              <div className="flex items-center cursor-pointer place-items-end">
                <a
                  href="#"
                  className=" active:scale-90 font-bold text-[#d04742] transition-all duration-200"
                  >Know More</a
                >
              </div>
            </div>
          </div>

          <div className="w-full min-h-[15rem] relative cursor-pointer featureCard">

            

            <svg
              viewBox="0 0 349.32501220703125 225"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              className="stroke-1 stroke-[#818597] h-full w-full absolute z-[90] featureCardSVG transition-all duration-200"

            >
              <path
                d="m 0 6 
              a 6 6 0 0 1 6 -6 
              h 250.32501220703125 
              a 16 16 0 0 1 11 5 
              l 77 77 
              a 16 16 0 0 1 5 11 
              v 126 
              a 6 6 0 0 1 -6 6 
              h -337.32501220703125 
              a 6 6 0 0 1 -6 -6 
              z"
                fill="#fff"
              ></path>
            </svg>

            <div
              className="z-[1000] absolute h-full w-full pl-5 py-6 pr-8 flex flex-col justify-between featureCardBox"
            >
              <div>
                <h3
                  className="font-extrabold text-[#d04742] leading-[1.2] text-[1.375rem]"
                >
                  Why Give Blood?
                </h3>
                <p className="text-grayText mt-6">
                Lorem Ipsum is simply dummy text of the print-
                ing and typesetting industry. Lorem Ipsum has
        been the industry's standard.
                </p>
              </div>
              <div className="flex items-center cursor-pointer place-items-end">
                <a
                  href="#"
                  className="active:scale-90 font-bold text-[#d04742] transition-all duration-200"
                  >Know More</a
                >
                
              </div>
            </div>
          </div>

          <div className="w-full min-h-[15rem] relative cursor-pointer featureCard">

            

            <svg
              viewBox="0 0 349.32501220703125 225"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              className="stroke-1 stroke-[#818597] h-full w-full absolute z-[90] featureCardSVG transition-all duration-200"

            >
              <path
                d="m 0 6 
              a 6 6 0 0 1 6 -6 
              h 250.32501220703125 
              a 16 16 0 0 1 11 5 
              l 77 77 
              a 16 16 0 0 1 5 11 
              v 126 
              a 6 6 0 0 1 -6 6 
              h -337.32501220703125 
              a 6 6 0 0 1 -6 -6 
              z"
                fill="#fff"
              ></path>
            </svg>

            <div
              className="z-[1000]  absolute h-full w-full pl-5 py-6 pr-8 flex flex-col justify-between featureCardBox"
            >
              <div>
                <h3
                  className=" font-extrabold text-[#d04742] leading-[1.2] text-[1.375rem]"
                >
                  How Your Donation Helps
                </h3>
                <p className="mt-6">
                Lorem Ipsum is simply dummy text of the print-
                ing and typesetting industry. Lorem Ipsum has
                been the industry's standard.
                </p>
              </div>
              <div className="flex items-center cursor-pointer place-items-end">
                <a
                  href="#"
                  className=" active:scale-90 font-bold text-[#d04742] transition-all duration-200"
                  >Know More</a
                >
                
              </div>
            </div>
          </div>


          
        </div>
      </div>
    </section>
  </div>

  )
}
