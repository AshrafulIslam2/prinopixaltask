"use client"
import React, { useEffect, useRef } from 'react'
import { motion, AnimatePresence,useInView } from "framer-motion";
import TextRevel from '@/UI/TextRevel';

const HeroSectionDescription = () => {

  return (
    <div className="max-w-[1272px] px-[80px] xl:px-0">
      
      <div className="flex flex-wrap gap-6 text-[20px] leading-[32px]  md:text-[36px] lg:text-[60px] md:leading-[70px] xl:leading-[84px] tracking-widest">
      <h1>We</h1> <h1>create</h1> <h1>radical</h1><h1>new</h1> <TextRevel> <h1>technologies</h1></TextRevel> <TextRevel> <h1>to</h1></TextRevel> <TextRevel> <h1>solve</h1></TextRevel> <TextRevel> <h1>some</h1></TextRevel> <TextRevel><h1>of</h1> </TextRevel> <TextRevel> <h1>the world’s </h1></TextRevel> <TextRevel><h1>hardest
        problems</h1></TextRevel>
      </div>
  
      
      <div className="grid grid-cols-1 xl:grid-cols-2  pt-[80px] gap-y-6  pb-[180px]  xl:pt-[200px] xl:pb-[300px]">
        <motion.div className="text-[20px] leading-[32px] md:text-[24px] md:leading-[36px] lg:text-[32px] lg:leading-[48px] xl:text-[58px] xl:leading-[64px] max-w-[200px]"
         initial={{ opacity: 0, y: 100 ,duration:1}}
         whileInView={{ opacity: 1, y: 0 ,duration:1 }} 
         transition={{ease:"backInOut"}}
        >
          <h1>X - The MoonShoot Factory</h1>
          <h1></h1>
          <h1></h1>
        </motion.div>
        <motion.div className="text-[14px] leading-[24px] sm:text-[16px] sm:leading-[28px]  xl:text-[22px] xl:leading-[40px]"  initial={{ opacity: 0, y: 100 ,duration:2}}
         whileInView={{ opacity: 1, y: 0 ,duration:1 }} 
         transition={{ease:"linear",delay:0.5 ,}}>
          {" "}
          X is a diverse group of inventors and entrepreneurs who build and
          launch technologies that aim to improve the lives of millions, even
          billions, of people. Our goal: 10x impact on the world’s most
          intractable problems, not just 10% improvement. We approach projects
          that have the aspiration and riskiness of research with the speed and
          ambition of a startup.{" "}
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSectionDescription;
