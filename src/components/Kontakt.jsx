import React from "react";
import Maps from "./Maps";
import jan from "./images/jan.jpg";

function Kontakt() {
  return (
    <div className="contact ">

      <div className="storTitle">
        <h1>KONTAKT</h1>
      </div>

      <div className="obrazi miniDog upDog">
        <div className="topObraz">
          <div className="obraz">
            <div className="obrazSlika">
              <img src={jan}></img>
            </div>
            <div className="obrazText">
              <p className="obrazIme">Gregor Matjan</p>
              <p>CEO</p>
              <p>Discord: Alphasniper#0783</p>
            </div>
          </div>
        </div>
        <div className="middleObraz">
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
          <div className="obraz" style={{margin:'0% 25% 0% 0%'}}>
            <div className="obrazSlika">
              <img src={jan}></img>
            </div>
            <div className="obrazText">
              <p className="obrazIme">Miha Podobnik</p>
              <p>Discord Admin</p>
              <p>Discord: B3#0932</p>
            </div>
          </div>
        </div>
        <div className="bottomObraz ">
          <div className="obraz" style={{margin:'5% 0% 0% 30%'}}>
            <div className="obrazSlika">
              <img src={jan}></img>
            </div>
            <div className="obrazText">
              <p className="obrazIme">Blaž</p>
              <p>Facebook Admin</p>
              <p>Discord: Chief51#5390</p>
            </div>
          </div>
          <div className="obraz" style={{margin:'5% 0% 0% 15%'}}>
            <div className="obrazSlika">
              <img src={jan}></img>
            </div>
            <div className="obrazText">
              <p className="obrazIme">Patrik</p>
              <p>Quality Assurance</p>
              <p>Discord: swayze#7846</p>
            </div>
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