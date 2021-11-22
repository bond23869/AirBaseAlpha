import React from "react";
import video from "./videos/Compressed.mp4";
import running from "./images/man_run.svg";
import quality from "./images/okey.svg";
import safety from "./images/shield.svg";
import meh from "./images/smiley.svg";
import outdoor from "./images/outdoor.jpg";
import epicEvent from "./images/soldd.jpg";
import sposoja from "./images/rentGear.jpg";
import training from "./images/ar-min.jpg";
import Maps from "./Maps";
import { Link, withRouter } from "react-router-dom";
import MediaQuery from "react-responsive";


function ONas() {



  return (

    
    <div className="ONas">
      <div className="home downDog">
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
      <div >

        <div className=" upPad"><h1 id="secondTitle"> NAJ METKI LETIJO</h1></div>
        <div className="fourHorseman downDog">


          <div className="boxy">
            <embed className="runningMan" src={running} width="200px" height="200px" alt="active" />

            <p>Podpiramo šport, naravo in zdravje</p>
          </div>
          <div className="boxy">
            <embed src={quality} width="200px" height="200px" alt="Quality" />
            <p>Nova in kvalitetna oprema za izposojo</p>
          </div>
          <div className="boxy">
            <embed src={meh} width="200px" height="200px" alt="fun" />
            <p> Veliko zabave, užitka, taktike in še več</p>
          </div>
          <div className="boxy">
            <embed src={safety} width="200px" height="200px" alt="Safety" />
            <p>Zagotovljena maksimalna varnost</p>
          </div>
          <span className="stretch"></span>
        </div>


        <div className="middlePicture"></div>


        <div className="upPad"><h1>STORITVE</h1></div>

        <div className="Storitve upPad downDog">
          <div className="paket leftBoy" >
            <div className="paketNaslov miniDog"><p>SPOSOJA OPREME</p></div>
            <div className="slikaPaket"><img className="paketSlika" src={sposoja} /></div>
            <div className="sneakyText">
              <p>SPOSOJA KOMPLETA</p>
              <p>ALI</p>
              <p>SPOSOJA SAMO SPECIFIČNIH ARTIKLOV</p>
            </div>
            <div className="lowerBottom">
            </div>
            <div className="storitveButton">

              <Link className="" to="/oprema">
                SPOSODI OPREMO
              </Link>
            </div>
          </div>
          <div className="paket">
            <div className="paketNaslov miniDog">POLIGONI</div>
            <div className="slikaPaket"><img className="paketSlika" src={outdoor} /></div>
            <div className="sneakyText">
              <p>OUTDOOR POLIGON</p>

              <p>INDOOR POLIGON</p>

            </div>
            <div className="storitveButton">

              <Link className="" to="/poligoni">
                OGLED POLIGONOV
              </Link>
            </div>
          </div>
          <div className="paket" >
            <div className="paketNaslov miniDog">SPECIAL EVENTI</div>
            <div className="slikaPaket" ><img className="paketSlika" src={epicEvent} /></div>
            <div className="sneakyText">
              <p>NAJBOLJŠI EVENTI V SLOVENIJI</p>
              <p>NEPOZABNE DOGODIVŠČINE</p>
            </div>
            <div className="storitveButton">

              <Link className="" to="/storitve">
                OGLED EVENTOV
              </Link>
            </div>
          </div>
          <div className="paket rightBoy">
            <div className="paketNaslov miniDog">TRENINGI</div>
            <div className="slikaPaket"><img className="paketSlika" src={training} /></div>
            <div className="sneakyText">
              <p>COMING SOON...</p>


            </div>
            <div className="storitveButton">

              <Link className="" to="/storitve">
                OGLED TRENINGOV
              </Link>
            </div>
          </div>
        </div>

        <div className="thirdPicture">

        </div>


      </div>

      <div className="Lokacija upPad miniDog">
        <Maps />
        <div className="lokacijaText">
          <h1>LOKACIJA</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem dolorum nobis consequatur labore suscipit facilis et dicta, quidem ducimus iure possimus veniam explicabo quod temporibus impedit eum dolor vel perspiciatis!</p>
        </div>

      </div>

      <div className="rezervacija downDog">
        <h2>Rezervirajte svoj termin</h2>
        <div class="buttons">
          <div class="containerButton">
            <a href="https://www.picktime.com/AirsoftBaseAlpha" class="btn effect01" target="_blank"><span>Rezerviraj</span></a>
          </div>
        </div>

      </div>
    </div>
    
  );
}

export default ONas;