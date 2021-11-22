import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import img from './images/pravljicna5.JPG';
import img2 from './images/pravljicna4.JPG';
import img3 from './images/pravljicna3.JPG';
import img4 from './images/pravljicna2.JPG';
import img5 from './images/pravljicnaSkupna.JPG';
import img6 from './images/pravljicna1.JPG';

const Slider = () =>{

    return(
    <AwesomeSlider style={{height:'30%',width:'60%', margin:'auto'}}>
    <div><img src={img4}></img></div>
    <div><img src={img2}></img></div>
    <div><img src={img3}></img></div>
    <div><img src={img5}></img></div>
    <div><img src={img}></img></div>
    <div><img src={img6}></img></div>
    
  </AwesomeSlider>
    )

};

export default Slider;