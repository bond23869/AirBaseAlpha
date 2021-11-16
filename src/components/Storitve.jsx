import React from "react";
import { Link } from 'react-scroll';
import DiscordInvite from "react-discord-invite";
import sposoja from "./images/rentGear.jpg";
import sniper from "./images/sniper.png";
import bullets from "./images/bullets.jpg";
import click from "./images/whiteClick.png";

function Storitve() {

 
  
  

  const extend = (object) => {
    
    
   
    var asoltPaket = document.getElementsByClassName('asoltPaket')[0];
    var dmrPaket = document.getElementsByClassName('dmrPaket')[0];
    var sniperPaket = document.getElementsByClassName('sniperPaket')[0];

    var asoltPaketSlike = document.getElementsByClassName('opremaPaketSlika');


    if (object.includes('asoltPaket')) {

      

      console.log("asoltPaket")
      if (asoltPaket.style.width === "80%") {
        dmrPaket.style.display = "block";
        sniperPaket.style.display = "block";
        asoltPaket.style.width = "30%";
        Array.prototype.forEach.call(asoltPaketSlike,function(el){

          el.style.display="none";
  
        });
      }
      else {
        dmrPaket.style.display = "none";
        sniperPaket.style.display = "none";
        asoltPaket.style.width = "80%";
        Array.prototype.forEach.call(asoltPaketSlike,function(el){

          el.style.display="inline-block";
  
        });
      }

    }
    else if (object.includes('dmrPaket')) {
      if (asoltPaket.style.display === "none") {
        asoltPaket.style.display = "block";
        sniperPaket.style.display = "block";
        dmrPaket.style.width = "30%";
      }
      else {
        asoltPaket.style.display = "none";
        sniperPaket.style.display = "none";
        dmrPaket.style.width = "80%";
      }
    }
    else if (object.includes('sniperPaket')) {
      if (asoltPaket.style.display === "none") {
        asoltPaket.style.display = "block";
        dmrPaket.style.display = "block";
        sniperPaket.style.width = "30%"
      }
      else {
        asoltPaket.style.display = "none";
        dmrPaket.style.display = "none";
        sniperPaket.style.width = "80%";
      }
    }
  }
  
  return (
    <div>
      <div className="Storitve upPad downDog">

        <div className="storitveHeader">
          <h1>STORITVE</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper a lacus vestibulum sed arcu non odio. Lorem sed risus ultricies tristique nulla. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Orci eu lobortis elementum nibh tellus. Turpis massa sed elementum tempus egestas. Neque ornare aenean euismod elementum nisi. Phasellus vestibulum lorem sed risus. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. Praesent semper feugiat nibh sed. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper.</p>
        </div>

        <div className="threeMuskateers">
          <div className="muskateer">
            <div className="topMusk"><h3>AIRSOFT TRENINGI</h3></div>
            <div className="middleMusk">
              <ul>
                <li>Spoznava z opremo</li>
                <li>Poliranje osnov</li>
                <li>Osnovne in napredne taktike</li>
                <li>Testiranje različnih tipov iger</li>
                <li>Komunikacija preko woki tokijev</li>
                <li>In veliko več</li>
              </ul>
            </div>
            <div className="bottomMusk"><span className="flyToTrening left"><Link to="trening" spy={true} smooth={true}>TRENING</Link></span></div>
          </div>

          <div className="muskateer">

            <div className="topMusk"><h3>SPOPADI</h3></div>
            <div className="middleMusk"><ul>
              <li>Rojstnodnevne zabave in team-buildingi</li>

              <li>Privat spopadi s svojo lastno ekipo (min. 6 ljudi)</li>
              <li>Testiranje različnih tipov iger</li>
            </ul>
              <p >Termini so rezervirani za sobote</p>
            </div>

            <div className="bottomMusk">
              <span className="flyToTrening middle"><Link to="ekipniSpopadi" spy={true} smooth={true}>SPOPADI</Link></span>
            </div>
          </div>


          <div className="muskateer">
            <div className="topMusk"><h3>SPOSOJA OPREME</h3></div>
            <div className="middleMusk"><p> Ponujamo veliko izbiro opreme za sposojo od zaščitne opreme do replik.</p>

            </div>
            <div className="bottomMusk">
              <span className="flyToTrening "><Link to="splosniSpopadi" spy={true} smooth={true}>SPOSOJA OPREME</Link></span>
            </div>
          </div>
        </div>





      </div>



      <div id="splosniSpopadi" className="splosniSpopadi upDog downDog">
        <div className="storTitle"><h1>SPOPADI</h1></div>
        <div className="splosniPhoto minierDog"></div>
        <div className="splosniText">
          <h2>Spopadi, kjer so vabljeni vsi airsoft navdušenci!</h2>
          <p>Redni spopadi se prirejajo vsak vikend</p>
          <p>Dopoldanski in Popoldanski termin</p>
          <p>Več si lahko pogledate na Discordu: </p>
          <p>Rezervirajte svoje mesto!</p>
        </div>

        <div className="discord upMinierDog">
          <DiscordInvite palette="light" guild="846714265738280972" />
        </div>
        <div class="buttons">
          <div class="containerButton">
            <a href="https://twitter.com/masuwa1018" class="btn effect01" target="_blank"><span>Rezerviraj</span></a>
          </div>
        </div>

      </div>

      <div id="ekipniSpopadi" className="ekipniSpopadi downDog upDog">
        <div className="storTitle"><h1>SPOSOJA OPREME</h1></div>
        <div className="ekipniPhoto"></div>
        <div className="sposojaText upMinierDog">
          <h2>SPOSODITE SI OPREMO!</h2>
          <div className="Lokacija upMinierDog">
            <div className="sposodnaSlika"><img src={sposoja}></img></div>
            <div className="sposodniText">
              <h2>Samo specifičen del opreme</h2>
              <h3>Lahko si sposodite vse od baterije za repliko</h3>
              <h3>do zaščitne maske</h3>
              <div className="cenik upMinierDog">
                <h2 style={{ color: '#2c699f' }}>CENIK</h2>
                <ul>
                  <li>Renta replike Assault: 10€</li>
                  <br />
                  <li>Renta zaščitne maske: 5€</li>
                  <br />
                  <li>Renta zaščitnih očal: 5€</li>
                  <br />
                  <li>Renta baterije 7,4V: 5€</li>
                  <br />
                  <li>Renta baterije 11,1V: 5€</li>
                  <br />
                  <li>Nakup metkov: 5€</li>


                </ul>
              </div>
            </div>
          </div>


        </div>
        <div>
          <div className="minierDog upPad">
            <h2>Sposodite si paket</h2>
          </div>
          <div className="opremaPaketi">

            <div className="opremaPaket asoltPaket" onClick={(event) => extend(event.target.className)}>
              <div className="opremaTop"><h1>SOLDIER</h1></div>
              <div className="opremaMiddle">
                <p>V PAKETU DOBITE:</p>
                
                  <p>Assualt rifle repliko (M4, AK-47, ...)</p>
                  <p>Zaščitno masko in očaka</p>
                <p>1x High-cap magazine</p>
                  <p>BB metke 0.28g</p>
                
              </div>
              
              <div className="clickable">
                <img src={click}/>
              </div>
            </div>


            <div className="opremaPaket dmrPaket" onClick={(event) => extend(event.target.className)}>
              <div className="opremaTop"><h1>DESIGNATED MARKSMAN</h1></div>
              <div className="opremaMiddle">
              <p>V PAKETU DOBITE:</p>
                
                <p>Designated marksman rifle</p>
                <p>Zaščitno masko in očaka</p>
                <p>2x Mid-cap magazine</p>
                <p>BB metke 0.35g</p>
              </div>
              <div className="clickable">
                <img src={click}/>
              </div>
            </div>
            <div className="opremaPaket sniperPaket" onClick={(event) => extend(event.target.className)}>
              <div className="opremaTop"><h1>SNIPER</h1></div>
              <div className="opremaMiddle">
              <p>V PAKETU DOBITE:</p>
                
                <p>Sniper repliko</p>
                <p>Zaščitno masko in očaka</p>
                <p>2x Mid-cap magazine</p>
                <p>BB metke 0.40g</p>
              </div>
              <div className="clickable">
                <img src={click}/>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div id="trening" className="upDog downDog" >
        <div className="storTitle"><h1>TRENINGI</h1></div>
        <div className="treningPhoto"></div>
        <div className="treningText"></div>
        <h2 className="upPad">COMING SOON...</h2>
      </div>
    </div>


  );
}

export default Storitve;