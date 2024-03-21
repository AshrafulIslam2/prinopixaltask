"use client";
// import Swiper core and required modules


import { MenuButton } from "@/UI/hamburger";
import Image from "next/image";
import { motion, AnimatePresence ,useScroll,useMotionValueEvent} from "framer-motion";
import React, { useState } from "react";


const Slider = () => {
  return (
    <>
       <h1 className=" text-[12px] flex font-medium text-left w-full leading-[20px] lg:text-[16px] lg:leading-[28px] xl:text-[22px] xl:leading-[40px]">
        <span className="bg-[#ffb300] py-[20px] px-[80px] ">
          Public X Project
        </span>
      </h1>
      <div className='bg-[#0f0f0f] w-full py-[40px] px-[20px] xl:px-0'>
        <div className='max-w-[1110px] mx-auto text-white flex flex-col gap-y-[40px]'>
            <motion.h1 initial={{y:"20px",opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:0.3,ease:"easeInOut"}}  className=' text-[24px] leading-[36px] xl:text-[40px] xl:leading-[60px]'>10 Year  of  moonshoots</motion.h1>
            <motion.h1  initial={{y:"20px",opacity:0}} whileInView={{y:0,opacity:1}} transition={{ delay:0.3 , duration:1,ease:"easeInOut"}} className='text-[16px] leading-[28px] xl:text-[22px] xl:leading-[40px]'>In 2010, Google founders Larry Page and Sergey Brin decided to form a new division of the company to work on moonshots: far-out, sci-fi sounding technologies that could one day make the world a radically better place. It was a grand experiment — some might say a moonshot unto itself. 10 years in, X has incubated hundreds of different moonshot projects, many of which have gone on to become independent businesses</motion.h1>
        </div>
      </div>

    

      
    </>
  )
}

export default Slider
