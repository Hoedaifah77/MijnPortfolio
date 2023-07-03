/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// icons
import { BsArrowUpRight } from "react-icons/bs";
// motion
import { motion } from "framer-motion";
// variants
import {fadeIn} from "../variants";

// services
const services = [
  {
    name: "HTML-CSS",
    description:
      "Als junior softwareontwikkelaar beschik ik over een solide basis in HTML en CSS. Mijn kennis van deze essentiële webtalen stellen mij in staat om goed gestructureerde webpagina's te maken.",
    
  },
  {
    name: "Javascript",
    description:
      "Als junior softwareontwikkelaar ben ik bedreven in JavaScript en React, waarmee ik interactieve en dynamische webapplicaties bouw. Mijn portfolio toont mijn vaardigheden in het creëren van boeiende gebruikersinterfaces met deze technologieën.",
    
  },
  {
    name: "Mysql Databases",
    description:
      "Als junior softwareontwikkelaar ben ik vertrouwd met MySQL databases. Ik ontwerp en beheer databases, en voer databaseoperaties uit. Mijn portfolio bevat projecten waarin ik MySQL-databases gebruik voor effectieve gegevensopslag.",
    
  },
  {
    name: "PHP",
    description:
      "Als junior softwareontwikkelaar heb ik basisvaardigheden in PHP en kan ik eenvoudige server-side functionaliteit implementeren. Ik ben gemotiveerd om mijn kennis verder uit te breiden en meer geavanceerde PHP-functionaliteiten te leren.",
    
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:mt-16">
          {/* text and images */}
          <motion.div 
          variants={fadeIn('left', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0">
            <h2 className="h2 text-accent mb-6 ">Wat ik doe.</h2>
            <h3 className="h3 mb-12 max-w-[455px]">
              Ik ben een Front End Developer die net begonnen is, met zijn dromen te verwerkelijken.
            </h3>
            <button className="btn btn-sm">check mijn werk</button>
          </motion.div>
          {/* services */}
          <motion.div
          variants={fadeIn('left', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          >
            {/* services list */}
            <div className="flex-1">
              {
                services.map((service, index) => {
                  // destructure data
                  const {name, description, link} = service;
                  return (
                    <div className="border-b border-white/20 h-[142px] mb-[36px] flex" key={index}>
                      <div className="max-w-[476px]">
                        <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-5">{name}</h4>
                        <p className="font-secondary leading-tight">{description}</p>
                      </div>
                      <div className="flex  flex-col flex-1 items-end">
                      
                        <a href="#" className="text-gradient text-sm">{link}</a>
                      </div>
                    </div>
                  )
                })
              }
            
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
