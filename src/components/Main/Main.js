import React from 'react';
import './Main.css'
import Card from '../Card/Card'

function Main({size, cards}) {
  return (
 <div className="main">
<div className="card__container">
 {cards.map((card) => (
  <Card card={card} key={card.id}/>
 ))}
</div>
 </div>
  );
}

export default Main;