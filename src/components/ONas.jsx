import React from "react";
import video from "./videos/Compressed.mp4"
import running from "./images/968009.png"
import quality from "./images/1_(24).jpg"
import safety from "./images/Web_(200).jpg"
import meh from "./images/download.png"
import soldier from "./images/airsoft-1.jpg"
function ONas() {
  return (
    <div className="ONas">
    <div className="home downDog">
      <video autostart="true" autoPlay loop src={video} type="video/mp4" width="100%" height="15%" muted/>
    </div>

    <div className="smoMi">
      <h1 class="sectionAdress">O NAS</h1>
    </div>

    <div className="opis">
      <div className="blockOfOpis">
        <h2 id="blueTitle">KDO SMO</h2>
        <p>Smo organizacija, katere glavni cilj je, da čim več ljudi, vseh generacij spravimo v gibanje, 
          stran od ekranov in distrakcij. Ponujamo izjemno izkušnjo AirSoft bitke ter veliko zabave.</p>
      </div>
      <div className="blockOfOpis downDog">
        <h2 id="blueTitle">KAJ JE AIRSOFT?</h2>
        <p>Airsoft je ekipni šport, pri katerem se uporabljajo replike orožij, ki za streljanje uporabljajo kroglice iz trde plastike, premera 6mm.</p>
      </div>
    </div>

    <div className="soldier downDog">
      <img src={soldier} id="soldier"/>
    </div>
    
    <div className="fourHorseman downDog">
      <div className="boxy1">
        <img src={running} width="125px" height="125px" />
        <p>Podpiramo šport, razvoj in zdravje</p>
      </div>
      <div className="boxy2">
        <img src={quality} width="125px" height="125px"/>
        <p>Nova in kvalitetna oprema za izposojo</p>
      </div>
      <div className="boxy3">
        <img src={meh} width="125px" height="125px" />
        <p> Veliko zabave, užitka, taktike in še več</p>
      </div>
      <div className="boxy4">
        <img src={safety} width="125px" height="125px" />
        <p>Zagotovljena maksimalna varnost</p>
      </div>
      
    </div>

    </div>
  );
}

export default ONas;