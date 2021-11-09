
import React, { useState } from 'react';
import { projectsData } from '../data/projectsData';



const Projet = (props) => {

    const [currentProject] = useState(projectsData);
    const projet = currentProject[props.projectNumber];

    //random ball 
    let left = Math.floor(Math.random() * 200 + 700) + 'px';
    let top = Math.floor(Math.random() * 200 + 150) + 'px';
    let size = 'scale(' + (Math.random() * 0.7) + ")";

    
    return (

       <div className="project-main">
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
               <div className="img-container hover">
                   <span>
                       <h3>{projet.title}</h3>
                       <p>{projet.infos}</p>
                   </span>
                   <img src={projet.img} alt={projet.title} />
               </div>
               <div className="button-container">
                   <a href={projet.link} target="_blank" rel="noopener noreferrer" className="hover">
                       <span className="button">Voir le site</span>
                   </a>
               </div>
           </div>
           <span className="random-circle" style={{left, top, transform: size}}></span>
       </div>

    );
};



export default Projet;