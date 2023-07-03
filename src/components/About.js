/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// countUp
import CountUp from "react-countup";
// intersection observer hook
import { useInView } from "react-intersection-observer";
// motion
import { motion } from "framer-motion";
// variant
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-y-10 lg:items-center lg:gap-x-20 lg:gap-y-0">
          {/* img */}
          <div>
            <motion.div 
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}}

            className="flex bg-about bg-contain bg-no-repeat lg:w-[640px] h-[640px] mix-blend-lighten bg-top"></motion.div>
          </div>
          {/* text */}
          <motion.div 
           variants={fadeIn('left', 0.5)}
           initial='hidden'
           whileInView={'show'}
           viewport={{once: false, amount: 0.3}}
          >
            <div className="flex-1">
              <h2 className="h2 text-accent">Over mij.</h2>
              <h3 className="h3 mb-4">
                Ik ben een junior Software Developer, Ik ben 22 Jaar oud  <br></br> 
                Ik zit momenteel op het ROC in Amsterdam zuid oost
              </h3>
              <p className="mb-6">
                
              </p>
            </div>
            {/* stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  <CountUp start={0} end={1} duration={3} />
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Jaar ervaring <br />
          
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  <CountUp start={0} end={3} duration={3} /> 
                  
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  beroeps projecten <br />
                  succesvol afgerond
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  <CountUp start={0} end={10} duration={3} />
                  +
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  tevreden <br />
                  Docenten
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg">Contact mij</button>
              <a href="#" className="text-gradient btn-link">
                Mijn Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
