import React from 'react';
import { NavLink } from 'react-router-dom';



const Navigation = () => {
    
    return (
        <div className="navigation">
            <ul>
                <NavLink to="/" exact activeClassName="nav-active">
                    <li>Accueil</li>
                </NavLink>
                <li className="nav-portfolio">Portfolio
                    <ul className="nav-projects">
                        <NavLink to="/projet01" exact activeClassName="nav-active" className="hover">
                            <li>Projet 01</li>
                        </NavLink>
                        <NavLink to="/projet02" exact activeClassName="nav-active" className="hover">
                            <li>Projet 02</li>
                        </NavLink>
                        <NavLink to="/projet03" exact activeClassName="nav-active" className="hover">
                            <li>Projet 03</li>
                        </NavLink>
                        <NavLink to="/projet04" exact activeClassName="nav-active" className="hover">
                            <li>Projet 04</li>
                        </NavLink>
                    </ul>
                </li>
                <NavLink to="/contact" exact activeClassName="nav-active">
                    <li>Contact</li>
                </NavLink>
            </ul>
        </div>
    );

};



export default Navigation;