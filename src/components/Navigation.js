import React from 'react';
import { NavLink } from 'react-router-dom';



const Navigation = () => {
    
    return (
        <div className="navigation">
            <ul>
                <NavLink to="/"
                         exact
                         activeClassName="nav-active"
                >
                    <li>Accueil</li>
                </NavLink>


            </ul>
        </div>
    );

};



export default Navigation;