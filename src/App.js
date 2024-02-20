import React from 'react';
import ReactDOM from 'react-dom';
import Cards from './Cards';
import './index.css';
import Sdata from './Sdata';
import { useState } from "react";
import ReactModal from 'react-modal';


const App = () => {
  const [cards,setcard]=useState(Sdata);

  function removeCard(id){
    const newCard=cards.filter(card => card.id !== id);
    setcard(newCard);
  }

  return (
  <div className="App">
   <Cards cards={cards} removeCard={removeCard} ></Cards>
  </div>
  );
};

export default App;
