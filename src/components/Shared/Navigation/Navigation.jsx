"use client";

import { MenuButton } from "@/UI/hamburger";
import Image from "next/image";
import { motion, AnimatePresence ,useScroll,useMotionValueEvent} from "framer-motion";
import React, { useState } from "react";

const Navigation = () => {
    const {scrollY} = useScroll();
    const [hideNavbar,setHideNavbar] = useState(false)
  const [toggleMobileVersion, SetToggleMobile] = useState(false);
  const [toggleSubMenu, setToggleSubMenu] = useState([false, false]);
  const handleSubMenu = (Index) => {
    setToggleSubMenu((prev) => {
      const updatedToggleSubMenu = [...prev]; // Creating a copy of the state array
      updatedToggleSubMenu[Index] = !updatedToggleSubMenu[Index]; // Toggling the value at the specified index
      return updatedToggleSubMenu; // Returning the updated array
    });

    console.log(toggleSubMenu[1]);
  };
 useMotionValueEvent(scrollY,"change",(latest)=> {
    const previous = scrollY.getPrevious()
    if(previous<latest && latest > 150){
        setHideNavbar(true)
    }
    else{
        setHideNavbar(false)
    }
   }
    
    )
  return (
    <motion.div
    variants={{
        visible:{y:0},
        hidden:{y:"-100%" }
    }}
    animate={hideNavbar? "hidden" : "visible"}
    transition={{duration:0.35,ease:"easeInOut"}}
     className=" z-50  sticky  top-0" 
    >
      <div className="flex justify-between py-[36px]   px-[24px] sm:px-[32px] lg:px-[100px]">
        <div>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 6.032L10 0H0V10L6 16L0 22V32H10L16 26L22 32H32V22L26 16L32 10V0H22L16 6.032ZM9.336 30.4H1.6V22.664L7.136 17.128L14.872 24.864L9.336 30.4ZM16.24 24L8.24 16L8 15.76L7.672 15.432L1.6 9.336V1.6H8.864V10L29.272 30.4H22.664L16.24 24ZM30.4 22.664V29.272L10.464 9.336V2.728L16.064 8.328L21.56 2.728V10.448H29.296L23.736 16L30.4 22.664ZM30.4 8.864H23.136V1.6H30.4V8.864Z"
              fill="#0F0F0F"
            />
          </svg>
        </div>
        <div className="cursor-pointer">        <MenuButton
          isOpen={toggleMobileVersion}
          onClick={() => SetToggleMobile(!toggleMobileVersion)}
          strokeWidth="4"
          color="black"
          transition={{ ease: "easeOut", duration: 0.2 }}
          width="48"
          height="24"
          
        />
        </div>

      </div>
    <div className={`absolute   bg-white w-full ${toggleMobileVersion ? "h-screen" :"h-0 transition-all duration-300 ease-linear"}`}>
    <AnimatePresence >
      {toggleMobileVersion && (
        <motion.div
        initial={{ opacity: 0, y: 50 ,duration:1}}
        animate={{ opacity: 1, y: 0 ,duration:1 }} 
      
         className="grid grid-cols-1 md:grid-cols-4    px-[24px] sm:px-[32px] lg:px-[100px]   justify-between  max-w-[1200px] mx-auto">
          <div className="md:col-span-2 ">
            <motion.h1  initial={{ opacity: 0, y: 50 ,duration:1}}
        animate={{ opacity: 1, y: 0 ,duration:1 }} 
        transition={{ delay: 0.2 }}  className="text-[16px]  leading-[28px] tracking-[0.5px] font-medium text-[#ffb300] xl:text-[20px] xl:leading-[38px] mb-[32px]">
              Explore
            </motion.h1>
            <motion.h1  initial={{ opacity: 0, y: 50 ,duration:1}}
        animate={{ opacity: 1, y: 0 ,duration:1 }} 
        transition={{ delay: 0.3 }}  className=" text-[30px]  xl:text-[32px] leading-[38px] pb-[20px] md:pb-[15px]  xl:pb-[36px]  hover:text-[#ffb300]">
              x
            </motion.h1>
            <motion.h1  initial={{ opacity: 0, y: 50 ,duration:1}}
        animate={{ opacity: 1, y: 0 ,duration:1 }} 
        transition={{ delay: 0.4 }}  className=" text-[30px]  xl:text-[32px] leading-[38px] pb-[20px] md:pb-[15px] xl:pb-[36px]  hover:text-[#ffb300]">
              Projects
            </motion.h1>
            <motion.h1  initial={{ opacity: 0, y: 50 ,duration:1}}
        animate={{ opacity: 1, y: 0 ,duration:1 }} 
        transition={{ delay: 0.4 }}  className=" text-[30px]  xl:text-[32px] leading-[38px] pb-[20px] md:pb-[15px] xl:pb-[36px]  hover:text-[#ffb300]">
              Lif At X
            </motion.h1>
            <motion.h1  initial={{ opacity: 0, y: 50 ,duration:1}}
        animate={{ opacity: 1, y: 0 ,duration:1 }} 
        transition={{ delay: 0.4 }}  className=" text-[30px]  xl:text-[32px] leading-[38px] pb-[20px] md:pb-[15px] xl:pb-[36px]  hover:text-[#ffb300]">
              {" "}
              Careers
            </motion.h1>
            <motion.h1  initial={{ opacity: 0, y: 50 ,duration:1}}
        animate={{ opacity: 1, y: 0 ,duration:1 }} 
        transition={{ delay: 0.4 }}  className=" text-[30px]  xl:text-[32px] leading-[38px] pb-[20px] md:pb-[15px] xl:pb-[36px]  hover:text-[#ffb300]">
              Moonshot Thinking
            </motion.h1>
            <motion.h1  initial={{ opacity: 0, y: 50 ,duration:1}}
        animate={{ opacity: 1, y: 0 ,duration:1 }} 
        transition={{ delay: 0.4 }}  className=" text-[30px]  xl:text-[32px] leading-[38px] pb-[20px] md:pb-[15px] xl:pb-[36px]  hover:text-[#ffb300]">
              Blog
            </motion.h1>
          </div>
          <div className="md:col-span-2 grid lg:grid-cols-2 h-fit  justify-items-end">
            <div className="col-span-1 w-full  h-fit " onClick={() => handleSubMenu(0)}>
              <motion.div  
        className="flex  items-center justify-between border-t border-b border-black py-[24px] lg:block lg:border-none lg:py-0">
                <h1 className="text-[16px]   leading-[28px] tracking-[0.5px] font-medium text-[#ffb300] xl:text-[20px] xl:leading-[38px] lg:mb-[32px] ">
                  CONNECT
                </h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className={`block w-6 h-6 lg:hidden ${toggleSubMenu[0] && "rotate-180 transition-all ease-in-out duration-300 w-6 h-6"} `}
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </motion.div>

              <div className=" hidden lg:block">
                <motion.h1  initial={{ opacity: 0, y: 50 ,duration:1}}
        animate={{ opacity: 1, y: 0 ,duration:1 }} 
        transition={{ delay: 0.2 }}  className="text-[24px]  leading-[32px] pb-[24px] hover:text-[#ffb300]">
                  LinkedIn
                </motion.h1>
                <motion.h1  initial={{ opacity: 0, y: 50 ,duration:1}}
        animate={{ opacity: 1, y: 0 ,duration:1 }} 
        transition={{ delay: 0.3 }}  className="text-[24px]  leading-[32px] pb-[24px] hover:text-[#ffb300]">
                  YouTube
                </motion.h1>
                <motion.h1  initial={{ opacity: 0, y: 50 ,duration:1}}
        animate={{ opacity: 1, y: 0 ,duration:1 }} 
        transition={{ delay: 0.3 }}  className="text-[24px]  leading-[32px] pb-[24px] hover:text-[#ffb300]">
                  Instagram
                </motion.h1>
                <motion.h1  initial={{ opacity: 0, y: 50 ,duration:1}}
        animate={{ opacity: 1, y: 0 ,duration:1 }} 
        transition={{ delay: 0.4 }}  className="text-[24px]  leading-[32px] pb-[24px] hover:text-[#ffb300]">
                  Twitter
                </motion.h1>
              </div>
              {toggleSubMenu[0] && (
                <div className=" block lg:hidden">
                  <h1 className="text-[24px]  leading-[32px] pb-[24px] hover:text-[#ffb300]">
                    LinkedIn
                  </h1>
                  <h1 className="text-[24px]  leading-[32px] pb-[24px] hover:text-[#ffb300]">
                    YouTube
                  </h1>
                  <h1 className="text-[24px]  leading-[32px] pb-[24px] hover:text-[#ffb300]">
                    Instagram
                  </h1>
                  <h1 className="text-[24px]  leading-[32px] pb-[24px] hover:text-[#ffb300]">
                    Twitter
                  </h1>
                </div>
              )}
            </div>
            <div className="col-span-1 w-full" onClick={() => handleSubMenu(1)}>
              <div className="flex  items-center justify-between py-[24px] lg:block lg:border-none lg:py-0">
                <h1 className="text-[16px]   leading-[28px] tracking-[0.5px] font-medium text-[#ffb300] xl:text-[20px] xl:leading-[38px] lg:mb-[32px] ">
                LEARN
                </h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className={`block w-6 h-6 lg:hidden ${toggleSubMenu[1] && "rotate-180 transition-all ease-in-out duration-300 w-6 h-6"} `}
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>

              <div className=" hidden lg:block">
                <motion.h1  initial={{ opacity: 0, y: 50 ,duration:1}}
        animate={{ opacity: 1, y: 0 ,duration:1 }} 
        transition={{ delay: 0.2 }}  className="text-[24px]  leading-[32px] pb-[24px] hover:text-[#ffb300]">
                  Contact
                </motion.h1>
                <motion.h1  initial={{ opacity: 0, y: 50 ,duration:1}}
        animate={{ opacity: 1, y: 0 ,duration:1 }} 
        transition={{ delay: 0.3 }}  className="text-[24px]  leading-[32px] pb-[24px] hover:text-[#ffb300]">
                  Privacy + Terms
                </motion.h1>
                <motion.h1  initial={{ opacity: 0, y: 50 ,duration:1}}
        animate={{ opacity: 1, y: 0 ,duration:1 }} 
        transition={{ delay: 0.4 }}  className="text-[24px]  leading-[32px] pb-[24px] hover:text-[#ffb300]">
                Google
                </motion.h1>
                <motion.h1  initial={{ opacity: 0, y: 50 ,duration:1}}
        animate={{ opacity: 1, y: 0 ,duration:1 }} 
        transition={{ delay: 0.5 }}  className="text-[24px]  leading-[32px] pb-[24px] hover:text-[#ffb300]">
                  Alphabet
                </motion.h1>
              </div>
              {toggleSubMenu[1] && (
                <div className=" block lg:hidden">
                  <h1 className="text-[24px]  leading-[32px] pb-[24px] hover:text-[#ffb300]">
                    Contact
                  </h1>
                  <h1 className="text-[24px]  leading-[32px] pb-[24px] hover:text-[#ffb300]">
                    Privacy + Terms
                  </h1>
                  <h1 className="text-[24px]  leading-[32px] pb-[24px] hover:text-[#ffb300]">
                  Google
                  </h1>
                  <h1 className="text-[24px]  leading-[32px] pb-[24px] hover:text-[#ffb300]">
                    Alphabet
                  </h1>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
      </AnimatePresence>
    </div>
    </motion.div>
  );
};

export default Navigation;
