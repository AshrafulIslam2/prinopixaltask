"use client"
import React from 'react'
import { motion, AnimatePresence } from "framer-motion";
const HeroSection = () => {
  return (
    <motion.div className=' p-[80px] z-30'
    initial={{scale:2.2 ,zIndex:"50"}}
    animate={{scale:1,zIndex:"30"}}
    transition={{duration:1,ease:"linear"}}
    style={{ width: "100%", height: "700px" ,overflow: "hidden"}} 
    >
      <video src='/home_desktop5_9DCE7153.mp4'   className="w-full h-full border  object-cover z-30"  muted
        loop  autoPlay/>
    </motion.div>
  )
}

export default HeroSection
