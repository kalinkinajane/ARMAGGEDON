import Asteroid from '../image/Frame.png'
import AsteroidMid from '../image/Frame2.png'
import AsteroidBig from '../image/Frame3.png'
import Frame from '../image/FrameMob.png'
import Frame2 from '../image/FrameMob2.png'
import Frame3 from '../image/FrameMob3.png'

const renderAsteroid = (card, size) =>{
    if(card.estimated_diameter.meters.estimated_diameter_max < 300){
       return ( size.width > 600 ? <img className="card__asteroid"  src={Asteroid} alt="Изображение астероида"/> : <img className="mobile__asteroid"  src={Frame} alt="Изображение астероида"/>)
    } if(card.estimated_diameter.meters.estimated_diameter_max > 300 && card.estimated_diameter.meters.estimated_diameter_max < 500 ){
       return (size.width > 600 ? <img className="card__asteroid-mid"  src={AsteroidMid} alt="Изображение астероида"/> : <img className="mobile__asteroid-mid" src={Frame3} alt="Изображение астероида"/>)
    } if(card.estimated_diameter.meters.estimated_diameter_max > 500 ){
        return (size.width > 600 ? <img className="card__asteroid-dig"  src={AsteroidBig} alt="Изображение астероида"/> : <img className="mobile__asteroid-dig"  src={Frame2} alt="Изображение астероида"/>) 
    }
    }
    export default renderAsteroid;