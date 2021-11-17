import React from "react";
import rifle from "./images/rifle.png";
import mask from "./images/mask.png";
import vest from "./images/vest.png";
function Oprema() {
  return (
    <div className="contact">
      <div className="storTitle minierDog">
        <h1>Oprema</h1>
      </div>
      <div className="opremaOpis minierDog">
        <div className="triOpreme">
          <div className="oprema left mask"><p>ZAŠČITNA MASKA</p></div>
          <div className="oprema vest"><p>TACTICAL RIG</p></div>
          <div className="oprema right oblacila"><p>KAMUFLAŽNA OBLAČILA</p></div>
        </div>
        <div className="triOpreme upMinierDog">
          <div className="oprema left rifle"><p>ASSUALT RIFLE REPLIKA</p></div>
          <div className="oprema dmr"><p>DESIGNATED MARKSMAN RIFLE REPLIKA</p></div>
          <div className="oprema right sniper"><p>SNIPER RIFLE REPLIKA</p></div>
        </div>
        
        
        
      </div>
    </div>
  );
}

export default Oprema;