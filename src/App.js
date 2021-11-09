import React, { useEffect } from 'react';
import { Switch, Route, Redirect , useLocation, useHistory } from 'react-router-dom';
import Contact from './pages/Contact';
import Home from './pages/Home';
import {Projet1, Projet2, Projet3, Projet4} from './pages/Portfolio';
import { AnimatePresence } from 'framer-motion';


const App = () => {

  const location = useLocation();
  let history = useHistory();

  useEffect(() => {

    const handleScrollToElement = (e) => {
      console.log(e.wheelDeltaY);
      const url = window.location.origin + "/";

      const wheelRouter = (after, before) => {
        if (e.wheelDeltaY < 0) {
          setTimeout(() => {
            history.push(after);
          }, 500);
        } else if (e.wheelDeltaY > 0) {
          setTimeout(() => {
            history.push(before);
          }, 500);
        }
      };

      switch (window.location.href.toString()) {
        case url:
          if (e.wheelDeltaY < 0) {
            setTimeout(() => {
              history.push("projet01");
            }, 500);
          }
          break;
        case url + "projet01":
          wheelRouter("projet02", "");
          break;
        case url + "projet02":
          wheelRouter("projet03", "projet01");
          break;
        case url + "projet03":
          wheelRouter("projet04", "projet02");
          break;
        case url + "projet04":
          wheelRouter("contact", "projet03");
          break;
        case url + "contact":
          if (e.wheelDeltaY > 0) {
            setTimeout(() => {
              history.push("projet04");
            }, 500);
          }
          break;
        default:
          console.log("nothing");
      }
    };
    window.addEventListener("wheel", handleScrollToElement);
  }, [history]);

  return (
    
    <AnimatePresence>
      <Switch location={location} key={location.pathname} >
        <Route path="/" exact component={Home} />
        <Route path="/projet01" exact component={Projet1} />
        <Route path="/projet02" exact component={Projet2} />
        <Route path="/projet03" exact component={Projet3} />
        <Route path="/projet04" exact component={Projet4} />
        <Route path="/contact" exact component={Contact} />
      <Redirect to="/" />
    </Switch>
    </AnimatePresence>
    
  );
};



export default App;