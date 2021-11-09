
import React, { useState } from 'react';
import { projectsData } from '../data/projectsData';
import { motion } from 'framer-motion';


const Projet = (props) => {

    const [currentProject] = useState(projectsData);
    const projet = currentProject[props.projectNumber];

    //random ball 
    let left = Math.floor(Math.random() * 200 + 700) + 'px';
    let top = Math.floor(Math.random() * 200 + 150) + 'px';
    let size = 'scale(' + (Math.random() * 0.7) + ")";

    const variants = {
        initial : {
            opacity: 0,
            transition: { duration : 0.5 },
            x: 200,
        },
        visible : {
            opacity: 1,
            x: 0,
        },
        exit: {
            opacity: 0.4,
            transition: { duration : 0.35 },
            x: -800,
        }
    };

    let plusMinus = Math.random() > 0.4 ? 1 : -1;

    let imgX = Math.random() * 350 * plusMinus;
    let imgY = Math.random() * 120 * plusMinus;

    const animImg = {

        initial : {
            opacity: 0,
            x: imgX,
            y: imgY
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0
        }

    }

    const transition = {

        ease: [0.03, 0.87, 0.73, 0.9],
        duration: 0.6

    };

    
    return (

       <motion.div className="project-main"
                   initial='initial'
                   animate='visible'
                   exit='exit'
                   variants={variants}
                   transition={transition}>
           <div className="project-content">
               <h1>{projet.title}</h1>
               <p>{projet.date}</p>
               <ul className="languages">
                   {projet.languages.map((item) => {

                    return <li key={item}>{item}</li> 

                   })}
               </ul>
           </div>
           <div className="img-content">
               <motion.div className="img-container hover"
                           initial='initial'
                           animate='visible'
                           variants={animImg}>
                   <span>
                       <h3>{projet.title}</h3>
                       <p>{projet.infos}</p>
                   </span>
                   <img src={projet.img} alt={projet.title} />
               </motion.div>
               <div className="button-container">
                   <a href={projet.link} target="_blank" rel="noopener noreferrer" className="hover">
                       <span className="button">Voir le site</span>
                   </a>
               </div>
           </div>
           <span className="random-circle" style={{left, top, transform: size}}></span>
       </motion.div>

    );
};



export default Projet;