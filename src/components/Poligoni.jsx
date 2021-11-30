import React from "react";
import indoorSlika from "./images/testIndoorPhoto.jpg";
import pravljicna from "./images/pravljicna3.JPG";
import Slider from "./Slider.jsx";
import MediaQuery from "react-responsive";
import SwiperPoligonSlike from "./SwiperPoligonSlike";

function Poligoni() {
  return (
    <div className="contact">

      <div className="storTitle minierDog upMinierDog">
        <h1>OUTDOOR POLIGON PRAVLJIČNA DEŽELA</h1>
      </div>


      <MediaQuery maxWidth={850}>
        <div className="indoorPoligon miniDog">
          <div className="indoorPoligonText">
            <p className="upDog">Naš prvi outdoor poligon je pravljična dežela v Škofji Loki. </p>
            <p>Vsebuje objekte, ki imajo tudi zgornje nadstropje.</p>
            <p> Poligon je primeren za vse tipe replik od assualta do sniperja</p>
          </div>
          
        </div>

        <div className="poligonSlike">
          <SwiperPoligonSlike/>
        </div>
      </MediaQuery>

      <MediaQuery minWidth={851}>
        <div className="indoorPoligon miniDog">
          <div className="indoorPoligonText">
            <p className="upDog">Naš prvi outdoor poligon je pravljična dežela v Škofji Loki. </p>
            <p>Vsebuje objekte, ki imajo tudi zgornje nadstropje.</p>
            <p> Poligon je primeren za vse tipe replik od assualta do sniperja</p>
          </div>
          <div className="indoorPoligonSlika">
            <img className="indoorSlika" src={pravljicna} />
          </div>
        </div>

        <div className="minierDog">
        <h2> GALERIJA OUTDOOR</h2>

      </div>

        <div className="downDog">
        <Slider />

      </div>
      </MediaQuery>

      
      




      {/*

      <div className=" miniDog">
      <div className="storTitle">
          <h1>INDOOR POLIGON</h1>
      </div>
      </div>
    <div className="indoorPoligon miniDog">
      <div className="indoorPoligonText">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div className="indoorPoligonSlika">
        <img className="indoorSlika" src={indoorSlika}/>
      </div>
      
    </div>

    <div className="miniDog">
      <h2>VIRUTALNI SPREHOD </h2>
      
    </div>
    <div className="googleMapsVirtualka downDog">

      <div className="virtualniSprehod">
        <p>Zgornje nadstropje</p>
        <iframe className="indoorVirtual" src="https://www.google.com/maps/embed?pb=!4v1635701665999!6m8!1m7!1sCAoSLEFGMVFpcE1heWNGdEtrZUJzOUpkdDJVUEp0Y21LZlI2Sm5JZ2l6a3JTaFZJ!2m2!1d46.16804910182!2d14.597014566151!3f220.149163630574!4f-12.496769583461642!5f1.5980949908595639" ></iframe>
        </div>
      <div className="virtualniSprehod">
      <p>Spodnje nadstropje</p>
        <iframe className="indoorVirtual" src="https://www.google.com/maps/embed?pb=!4v1635700542998!6m8!1m7!1sCAoSLEFGMVFpcFB2dVhyQTF5SnRqbUhGbVZ6UDNRbFY4SjlkaVpZMU5HdUF1T0o1!2m2!1d46.1680444!2d14.5969712!3f301.4171865745311!4f-1.026702862783793!5f0.4000000000000002" ></iframe>
        </div>
      </div>
      */}
    </div>

  );
}

export default Poligoni;