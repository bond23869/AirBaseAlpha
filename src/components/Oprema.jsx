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
          <div className="oprema left mask"><p>It is me the ranger</p></div>
          <div className="oprema vest"></div>
          <div className="oprema right oblacila"></div>
        </div>
        <div className="triOpreme upMinierDog">
          <div className="oprema left rifle"></div>
          <div className="oprema dmr"></div>
          <div className="oprema right sniper"></div>
        </div>
        
        
        
      </div>
    </div>
  );
}

export default Oprema;