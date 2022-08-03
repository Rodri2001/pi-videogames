import { Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';
import NavBar from "./components/Navbar/Navbar"
import React from 'react';
import Create from "./components/Create/Create"
//  import Card from './components/Card/Card';



function App() {
  fetch('http://localhost:3001/genres')

  return (

    <React.Fragment>
      <Route exact path="/"> <Landing /> </Route>
      <Route exact path="/home"> <NavBar /> <Home /> </Route>
      <Route exact path="/create"> <NavBar /> <Create /> </Route>
      <Route exact path="/detail/:id"
        render={({ match }) => <Detail id={match.params.id} />} />
    </React.Fragment>

  );
}

export default App;
