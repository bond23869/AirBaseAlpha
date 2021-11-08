import React from "react";
import Maps from "./Maps";
import jan from "./images/jan.jpg";

function Kontakt() {
  return (
    <div className="contact backgroundSoldier">
      
      <div className="storTitle">
        <h1>KONTAKT</h1>
      </div>

      <div className="obrazi downDog upDog">
          <div className="obraz">
            <div className="obrazSlika">
              <img src={jan}></img>
            </div>
            <div className="obrazText">
              <p className="obrazIme">Gregor Matjan</p>
              <p>CEO</p>
              <p>Alphasniper#0783</p>
            </div>
          </div>
          <div className="obraz">
            <div className="obrazSlika">
              <img src={jan}></img>
            </div>
            <div className="obrazText">
              <p className="obrazIme">Jan Kotnik</p>
              <p>CTO</p>
              <p>Discord: Švic Majstr#2822</p>
            </div>
          </div>
          <div className="obraz">
            <div className="obrazSlika">
              <img src={jan}></img>
            </div>
            <div className="obrazText">
              <p className="obrazIme">Miha Podobnik</p>
              <p>Discord Admin</p>
              <p>B3#0932</p>
            </div>
          </div>
          <div className="obraz">
            <div className="obrazSlika">
              <img src={jan}></img>
            </div>
            <div className="obrazText">
              <p className="obrazIme">Blaž</p>
              <p>Facebook Admin</p>
              <p>Chief51#5390</p>
            </div>
          </div>
          <div className="obraz">
            <div className="obrazSlika">
              <img src={jan}></img>
            </div>
            <div className="obrazText">
              <p className="obrazIme">Patrik</p>
              <p>Quality Assurance</p>
              <p>swayze#7846</p>
            </div>
          </div>
          
      </div>

      <div className="Lokacija upPad miniDog">
        <Maps />
      <div className="lokacijaText">
        <h1>LOKACIJA PISARNE</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem dolorum nobis consequatur labore suscipit facilis et dicta, quidem ducimus iure possimus veniam explicabo quod temporibus impedit eum dolor vel perspiciatis!</p>
      </div>
        
      </div>
      
      

    </div>
  );
}

export default Kontakt;