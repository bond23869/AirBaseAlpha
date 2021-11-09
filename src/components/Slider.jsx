import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import img from './images/navadnispopadi.jpg';
import img2 from './images/tiktok.png';
import img3 from './images/rentGear.jpg';
import img4 from './images/teambuilding.jpg';
const Slider = () =>{

    return(
    <AwesomeSlider style={{height:'30%',width:'60%', margin:'auto'}}>
    <div><img src={img}></img></div>
    <div><img src={img2}></img></div>
    <div><img src={img3}></img></div>
    <div><img src={img4}></img></div>
    
  </AwesomeSlider>
    )

};

export default Slider;