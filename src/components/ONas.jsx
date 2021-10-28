import React from "react";
import video from "./videos/Compressed.mp4";
import running from "./images/man_run.svg";
import quality from "./images/okey.svg";
import safety from "./images/shield.svg";
import meh from "./images/smiley.svg";
import test from "./images/soldd.jpg";

function ONas() {



  return (
    <div className="ONas">
      <div className="home">
        <video autostart="true" autoPlay loop src={video} type="video/mp4" width="100%" height="15%" muted />
      </div>

      <div className="del2 upPad">

        <h1 className="sectionAdress">O NAS</h1>

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
      </div>

      <div className="soldier">

      </div>

      <div className="miniDog upPad"><h1 id="secondTitle"> NAJ METKI LETIJO</h1></div>

      <div className="fourHorseman downDog">


        <div className="boxy1">
          <embed src={running} width="125px" height="125px" alt="active" />

          <p>Podpiramo šport, razvoj in zdravje</p>
        </div>
        <div className="boxy2">
          <embed src={quality} width="125px" height="125px" alt="Quality" />
          <p>Nova in kvalitetna oprema za izposojo</p>
        </div>
        <div className="boxy3">
          <embed src={meh} width="125px" height="125px" alt="fun" />
          <p> Veliko zabave, užitka, taktike in še več</p>
        </div>
        <div className="boxy4">
          <embed src={safety} width="125px" height="125px" alt="Safety" />
          <p>Zagotovljena maksimalna varnost</p>
        </div>
        <span className="stretch"></span>
      </div>

      <div className="Storitve upPad downDog">
        <div className="paket">
          <div className="paketNaslov">RAZLIČNI PAKETI</div>
          <div ><img className="paketSlika" src={test}/></div>
        </div>
        <div className="paket">
          <div className="paketNaslov">SPOSOJA OPREME</div>
          <div ><img className="paketSlika" src={test}/></div>
        </div>
        <div className="paket">
          <div className="paketNaslov">EPIC EVENTI</div>
          <div ><img className="paketSlika" src={test}/></div>
        </div>
        <div className="paket">
          <div className="paketNaslov">TRENINGI</div>
          <div><img className="paketSlika" src={test}/></div>
          <div className="sneakyText"><p>Yo mama so fat, she stole my half eaten donut</p></div>
        </div>
      </div>

      <div className="Lokacija"></div>

      <div className="quotes downDog">

      </div>
      <div className="rezervacija">
        <h2>Rezervirajte svoj termin</h2>
        <button></button>
      </div>
    </div>
  );
}

export default ONas;