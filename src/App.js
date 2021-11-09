import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Contact from './pages/Contact';
import Home from './pages/Home';
import {Projet1, Projet2, Projet3, Projet4} from './pages/Portfolio';



const App = () => {

  return (

    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/projet01" exact component={Projet1} />
      <Route path="/projet02" exact component={Projet2} />
      <Route path="/projet03" exact component={Projet3} />
      <Route path="/projet04" exact component={Projet4} />
      <Route path="/contact" exact component={Contact} />
      <Redirect to="/" />
    </Switch>

  );
};



export default App;