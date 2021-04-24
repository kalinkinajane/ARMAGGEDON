import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css'
import Header from '../Header/Header'
import Main from '../Main/Main';
import About from '../About/About';
import Destruction from '../Destruction/Destruction';
import Footer from '../Footer/Footer'
import  useWindowWidth  from '../../hook/useWindowWidth';
import * as api from '../../utils/api';

function App() {
  const [cards, setData] = useState([]);
  const [destructionCard, setDestructionCard] = useState([]);
  const size = useWindowWidth();
  useEffect(() => {
    api.getInfo().then((data) =>{
     const arr = Object.values(data.near_earth_objects)
     const newArr = arr.reduce((r, a) => r.concat(a), []);
     setData(newArr)
    })
  }, [])
function onDestruction (card){
  setDestructionCard([card, ...destructionCard ])
}

  return (
    <div className="app">
  <Header/>
  <Switch>
    <Route path="/" exact>
      <Main size={size} cards={cards} onDestruction={onDestruction}/>
    </Route>
    <Route path="/destruction" exact>
      <Destruction size={size} cards={destructionCard}/>
    </Route>
    <Route path="/about" exact>
      <About />
    </Route>
  </Switch>
  <Footer/>
    </div>
  );
}

export default App;
