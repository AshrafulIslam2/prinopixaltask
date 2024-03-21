"use client";
import React, { useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
  useAnimation,
  animate,
} from "framer-motion";

const Project = () => {
  const backgroundStyle = {
    backgroundImage: `url('/Image01.webp')`, // Assuming your_image.jpg is in the public folder
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%", // Adjust as needed
    height: "100vh", // Adjust as needed
  };
  const backgroundStyle2 = {
    backgroundImage: `url('/Image02.webp')`, // Assuming your_image.jpg is in the public folder
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%", // Adjust as needed
    height: "100vh", // Adjust as needed
  };
  const backgroundStyle3 = {
    backgroundImage: `url('/Image03.webp')`, // Assuming your_image.jpg is in the public folder
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%", // Adjust as needed
    height: "100vh", // Adjust as needed
  };
  const backgroundStyle4 = {
    backgroundImage: `url('/Image04.webp')`, // Assuming your_image.jpg is in the public folder
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%", // Adjust as needed
    height: "100vh", // Adjust as needed
  };
  return (
    <>
      <h1 className=" text-[12px] flex font-medium text-left w-full leading-[20px] lg:text-[16px] lg:leading-[28px] xl:text-[22px] xl:leading-[40px]">
        <span className="bg-[#ffb300] py-[20px] px-[80px] ">
          Public X Project
        </span>
      </h1>

      <div className="w-full bg-fixed" style={backgroundStyle}>
        <div className="w-full pt-[100px] pl-[50px] 2xl:pt-[500px] 2xl:pl-[300px] flex flex-col gap-y-4 xl:gap-y-10">
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className=" text-[18px] leading-[28px] sm:text-[20px] sm:leading-[32px] md:text-[24px] md:leading-[36px] xl:text-[28px] xl:leading-[44px] text-white "
          >
            What if beams of light could provide <br />
            global access to fast, affordable connectivity?
          </motion.h1>
          <motion.h1
            className="text-[16px] leading-[28px] sm:text-[20px] sm:leading-[32px] md:text-[24px] md:leading-[36px]  xl:text-[28px] text-white xl:leading-[44px] flex items-center  gap-x-2 md:gap-x-6 xl:gap-x-10 group  hover:text-[#ffb300] w-fit"
            initial={{ x: "-100%" }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1 }}
          >
            <button className=" relative  button  bg-white  group-hover:bg-[#ffb300]   overflow-hidden font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="svg w-6 h-6  lg:w-10 lg:h-10 absolute  text-black group-hover:translate-x-9 duration-300 ease-in-out transition-all"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="svg w-6 h-6  lg:w-10 lg:h-10 -translate-x-9 text-black group-hover:translate-x-0 duration-300 ease-in-out transition-all"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
            Explore Taara
          </motion.h1>
        </div>
      </div>
      <div className="w-full bg-fixed" style={backgroundStyle3}>
        <div className="w-full pt-[100px] pl-[50px] 2xl:pt-[500px] 2xl:pl-[300px] flex flex-col gap-y-4 xl:gap-y-10">
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className=" text-[18px] leading-[28px] sm:text-[20px] sm:leading-[32px] md:text-[24px] md:leading-[36px] xl:text-[28px] xl:leading-[44px] text-white "
          >
            What if beams of light could provide <br />
            global access to fast, affordable connectivity?
          </motion.h1>
          <motion.h1
            className="text-[16px] leading-[28px] sm:text-[20px] sm:leading-[32px] md:text-[24px] md:leading-[36px]  xl:text-[28px] text-white xl:leading-[44px] flex items-center  gap-x-2 md:gap-x-6 xl:gap-x-10 group hover:text-[#ffb300]   w-fit"
            initial={{ x: "-100%" }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1 }}
          >
            <button className=" relative  button  bg-white  group-hover:bg-[#ffb300] overflow-hidden font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="svg w-6 h-6  lg:w-10 lg:h-10 absolute  text-black group-hover:translate-x-9 duration-300 ease-in-out transition-all"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="svg w-6 h-6  lg:w-10 lg:h-10 -translate-x-9 text-black group-hover:translate-x-0 duration-300 ease-in-out transition-all"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
            Explore Taara
          </motion.h1>
        </div>
      </div>
      <div className="w-full bg-fixed" style={backgroundStyle2}>
        <div className="w-full pt-[100px] pl-[50px] 2xl:pt-[500px] 2xl:pl-[300px] flex flex-col gap-y-4 xl:gap-y-10">
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className=" text-[18px] leading-[28px] sm:text-[20px] sm:leading-[32px] md:text-[24px] md:leading-[36px] xl:text-[28px] xl:leading-[44px] text-white "
          >
            What if beams of light could provide <br />
            global access to fast, affordable connectivity?
          </motion.h1>
          <motion.h1
            className="text-[16px] leading-[28px] sm:text-[20px] sm:leading-[32px] md:text-[24px] md:leading-[36px]  xl:text-[28px] text-white xl:leading-[44px] flex items-center  gap-x-2 md:gap-x-6 xl:gap-x-10 group hover:text-[#ffb300]  w-fit"
            initial={{ x: "-100%" }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1 }}
          >
            <button className=" relative  button  bg-white  group-hover:bg-[#ffb300] overflow-hidden font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="svg w-6 h-6  lg:w-10 lg:h-10 absolute  text-black group-hover:translate-x-9 duration-300 ease-in-out transition-all"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="svg w-6 h-6  lg:w-10 lg:h-10 -translate-x-9 text-black group-hover:translate-x-0 duration-300 ease-in-out transition-all"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
            Explore Taara
          </motion.h1>
        </div>
      </div>
     <div className="relative w-full">
     <h1 className=" absolute  -top-20 text-[12px] flex font-medium text-left w-full leading-[20px] lg:text-[16px] lg:leading-[28px] xl:text-[22px] xl:leading-[40px]">
        <span className="bg-[#ffb300] py-[20px] px-[80px] ">
          Stories + News
        </span>
      </h1>
      <div className="w-full bg-fixed" style={backgroundStyle4}>
        <div className="w-full justify-end  h-full px-[40px] lg:px-[180px] flex flex-col gap-y-4 xl:gap-y-10">
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className=" text-[18px] leading-[28px] sm:text-[20px] sm:leading-[32px] md:text-[24px] md:leading-[36px] xl:text-[28px] xl:leading-[44px] text-white "
          >
            we choose to go to the moon
          </motion.h1>
          <motion.h1
            className="text-[16px] leading-[28px] sm:text-[20px] sm:leading-[32px] md:text-[24px] md:leading-[36px]  xl:text-[18px] text-white xl:leading-[44px] flex items-center justify-between   gap-x-2 md:gap-x-6 xl:gap-x-10 group  w-full pb-10"
            initial={{ y: "200px" }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.2 }}
          >
            
           MOONSHOT THINKING
            <button className=" relative  button  bg-gray-300/15  group-hover:bg-[#ffb300] overflow-hidden font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="svg w-6 h-6  lg:w-10 lg:h-10 absolute  text-white group-hover:translate-x-9 duration-300 ease-in-out transition-all"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="svg w-6 h-6  lg:w-10 lg:h-10 -translate-x-9 text-white group-hover:translate-x-0 duration-300 ease-in-out transition-all"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </motion.h1>
        </div>
      </div>
     </div>
    </>
  );
};

export default Project;
