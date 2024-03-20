"use client"
import React, { useEffect, useRef } from 'react'
import { motion, AnimatePresence,useInView, useAnimation } from "framer-motion";


const TextRevel = ({children}) => {
    const textRevel = useRef(null) 
    const inView = useInView(textRevel,{once:true})
    const mainControls = useAnimation(); 
    useEffect(()=>{
      if(inView){
        mainControls.start("visible")
      }
    },[inView])
  return (
    <div ref={textRevel} style={{position:"relative",}}>
      {children}

      <motion.div variants={{
        hidden:{left:0},
        visible:{left:"100%"}
        }}
        initial="hidden"
        animate={mainControls}
        transition={{duration:0.5,ease:"easeIn"}}
        style={{position:"absolute",top:4,bottom:4,left:0,right:0,background:"orange",zIndex:20}}
        >

      </motion.div>
      
    </div>
  )
}

export default TextRevel
