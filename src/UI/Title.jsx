"use client"
import React, { useEffect, useRef } from 'react'
import { motion, AnimatePresence,useInView, useAnimation } from "framer-motion";


const Title = () => {
    const titleR = useRef(null) 
    const inView = useInView(titleR,{once:true})
  return (
    <motion.div ref={titleR}  initial={{ height: "50px" }}
    animate={inView ? { height: "100px" } : { height: "50px" }}
    exit={{ height: "50px" }}
    transition={{ duration: 3, ease: "linear" }}
    style={{ background: "red" }}>
      <h1 className='bg-green-200'>Public X Project</h1>
    </motion.div>
  )
}

export default Title
