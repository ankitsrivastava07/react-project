import React from "react";
import './App.css';
import {Switch,Route} from "react-router-dom";
import Header from './component/Header'
import Home from './component/HomePage'
import NotFound from './component/404NotFound'
import SignIn from './component/SignIn'

function App() {
  return (

    <Switch>
    <Route path="/" exact>
      <Header></Header>
    </Route>
    <Route path="/home">
      <Home></Home>
    </Route>
    <Route path="/sign-in">
      <SignIn/>
    </Route>
    <Route path="*">
    <NotFound/>
    </Route>
    </Switch>
    );
}

export default App;
