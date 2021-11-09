import React from 'react';
import ButtonsBottom from '../components/ButtonsBottom';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import Projet from '../components/Projet';

export const Projet1 = () => {

    return (
        <main>
            <div className="project">
                <Navigation />
                <Logo />
                <Projet projectNumber={0} />
                <ButtonsBottom left={"/"} right={"/projet02"} />
            </div>
        </main>
    );

};
export const Projet2 = () => {

    return (
        <main>
            <div className="project">
            <Navigation />
            <Logo />
            <Projet projectNumber={1} />
            <ButtonsBottom left={"/projet01"} right={"/projet03"} />
            </div>
        </main>
    );

};
export const Projet3 = () => {

    return (
        <main>
            <div className="project">
                <Navigation />
                <Logo />
                <Projet projectNumber={2} />
                <ButtonsBottom left={"/projet02"} right={"/projet04"} />
            </div>
        </main>
    );

};
export const Projet4 = () => {

    return (
        <main>
            <div className="project">
                <Navigation />
                <Logo />
                <Projet projectNumber={3} />
                <ButtonsBottom left={"/projet03"} right={"/contact"} />
            </div>
        </main>
    );

};