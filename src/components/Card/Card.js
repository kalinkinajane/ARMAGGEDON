import React from 'react';
import './Card.css'
import Dino from '../../image/dino.png'
import Asteroid from '../../image/Frame.png'
import AsteroidMid from '../../image/Frame2.png'
import AsteroidBig from '../../image/Frame3.png'
// import * as regExp from '../../utils/constants';

function renderAsteroid(card){
if(card.estimated_diameter.meters.estimated_diameter_max < 300){
   return ( <img className="card__asteroid"  src={Asteroid} alt="Изображение астероида"/>)
} if(card.estimated_diameter.meters.estimated_diameter_max > 300 && card.estimated_diameter.meters.estimated_diameter_max < 500 ){
   return ( <img className="card__asteroid-mid"  src={AsteroidMid} alt="Изображение астероида"/>)
} if(card.estimated_diameter.meters.estimated_diameter_max > 500 ){
    return ( <img className="card__asteroid-dig"  src={AsteroidBig} alt="Изображение астероида"/>) 
}
}
const changeTime = (time) => {
    const timeStamp = new Date(Date.parse(time))
  var options = { 
    month: 'long',
    day: 'numeric',
  };
  const date = timeStamp.toLocaleString("ru", options)
  const finishDate = date +" "+timeStamp.getFullYear();
  return finishDate;
  }

function Card({card}) {

  return (
 <div className={`card ${card.is_potentially_hazardous_asteroid ? "card-dangerous" : "card-not-dangerous"}`}>
<div className="card__image-conteiner">
    {renderAsteroid(card)}
    <img className="card__dinosaur" src={Dino} alt="Изображение динозавра"/>
</div>
<div className="card__info-conteiner">
<p className="card__name">{card.name.split('(')[1].slice(0, -1)}</p>
<ul>
<li className="card__text">
    <div>Дата</div>
    <div className="card__dashed"></div>
    <div>{changeTime(card.close_approach_data[0].close_approach_date)}</div>
    </li>
<li className="card__text">
    <div>Расстояние</div>
    <div className="card__dashed"></div>
    <div>{Math.ceil(card.close_approach_data[0].miss_distance.kilometers).toLocaleString()}<span> км</span></div>
    </li>
<li className="card__text">
    <div>Размер</div>
    <div className="card__dashed"></div>
    <div>{Math.ceil(card.estimated_diameter.meters.estimated_diameter_max)}<span> м</span></div>
    </li>
</ul>
</div>
<div className="card__container-button">
    <div className="card__button-text">
        <p  className="card__estimate">Оценка:</p>
       {card.is_potentially_hazardous_asteroid ? <strong>опасен</strong> : <strong>не опасен</strong>}
    </div>
    <button className="card__button">На уничтожение</button>
</div>
 </div>
  );
}

export default Card;