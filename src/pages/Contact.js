import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import ButtonsBottom from '../components/ButtonsBottom';
import ContactForm from '../components/ContactForm';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import SocialNetwork from '../components/SocialNetwork';

const Contact = () => {
    return (
        <main>
            <div className="contact">
                <Navigation />
                <Logo />
                <ContactForm />
                <div className="contact-infos">
                    <div className="address">
                        <div className="content">
                           <h4>Adresse :</h4>
                           <p>129 rue nationale</p>
                           <p>57600 FORBACH</p> 
                        </div>
                    </div>
                    <div className="phone">
                        <div className="content">
                            <h4>Téléphone :</h4>
                            <CopyToClipboard text="06.27.75.53.93" 
                                            className="hover">
                            <p style={{cursor: 'pointer'}} 
                            className="clipboard" 
                            onClick={() => {alert('Téléphone enregistré !')}}>06.27.75.53.93</p>
                            </CopyToClipboard>
                        </div> 
                    </div>
                    <div className="email">
                        <div className="content">
                            <h4>E-mail :</h4>
                            <CopyToClipboard text="DevReact@enterprise.com" 
                                            className="hover">
                            <p style={{cursor: 'pointer'}} 
                            className="clipboard" 
                            onClick={() => {alert('E-mail enregistré !')}}>DevReact@enterprise.com</p>
                            </CopyToClipboard>
                        </div> 
                    </div>
                    <SocialNetwork />
                    <div className="credits">
                        <p>DevReact - 2021</p>
                    </div>
                </div>
                <ButtonsBottom left={"/projet04"}/>
            </div>
        </main>
    );
};

export default Contact;