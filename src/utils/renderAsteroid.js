import Asteroid from '../image/Frame.png'
import AsteroidMid from '../image/Frame2.png'
import AsteroidBig from '../image/Frame3.png'

const renderAsteroid = (card) =>{
    if(card.estimated_diameter.meters.estimated_diameter_max < 300){
       return ( <img className="card__asteroid"  src={Asteroid} alt="Изображение астероида"/>)
    } if(card.estimated_diameter.meters.estimated_diameter_max > 300 && card.estimated_diameter.meters.estimated_diameter_max < 500 ){
       return ( <img className="card__asteroid-mid"  src={AsteroidMid} alt="Изображение астероида"/>)
    } if(card.estimated_diameter.meters.estimated_diameter_max > 500 ){
        return ( <img className="card__asteroid-dig"  src={AsteroidBig} alt="Изображение астероида"/>) 
    }
    }

    export default renderAsteroid;