import React from "react";
import { Link } from 'react-scroll';
import DiscordInvite from "react-discord-invite";
import sposoja from "./images/rentGear.jpg";
import sniper from "./images/sniper.png";

import click from "./images/whiteClick.png";
import mask from "./images/mask.png";
import bb36 from "./images/036.jpg";
import bb28 from "./images/028.jpg";
import bb40 from "./images/040.jpg";
import midCaps from "./images/2xmidCAp.jpg";
import highCap from "./images/higcap.jpg";
import sniperMag from "./images/sniperMag.jpg";
import rifle from "./images/rifle.png";
import dmr from "./images/dmr.png";
import MediaQuery from "react-responsive";

function Storitve() {

 
  
  

  const extend = (object) => {
    
    
   
    var asoltPaket = document.getElementsByClassName('asoltPaket')[0];
    var dmrPaket = document.getElementsByClassName('dmrPaket')[0];
    var sniperPaket = document.getElementsByClassName('sniperPaket')[0];
    

    var middleOprema = document.getElementsByClassName('opremaMiddle');
    var middleText = document.getElementsByClassName('middleText');
    var opremaSlike = document.getElementsByClassName('delPaketaSlika');
    var opremaSlikeDmr = document.getElementsByClassName('delPaketaSlika1');
    var opremaSlikeSniper = document.getElementsByClassName('delPaketaSlika2');

    if (object.includes('asolt')) {
        console.log(object);
      
      if (asoltPaket.style.width === "80%") {
        dmrPaket.style.display = "block";
        sniperPaket.style.display = "block";
        asoltPaket.style.width = "30%";
        
        middleText[0].style.display="block";
        Array.prototype.forEach.call(opremaSlike,function(el){

          el.style.display="none";
  
        });
      }
      else {
        dmrPaket.style.display = "none";
        sniperPaket.style.display = "none";
        asoltPaket.style.width = "80%";
        middleOprema[0].style.width="90%";
        middleText[0].style.display="flex";
        middleText[0].style.justifyContent="space-between";
        Array.prototype.forEach.call(opremaSlike,function(el){

          el.style.display="block";
  
        });
      }




    }
    else if (object.includes('dmr')) {
      if (asoltPaket.style.display === "none") {
        asoltPaket.style.display = "block";
        sniperPaket.style.display = "block";
        dmrPaket.style.width = "30%";
        
        middleText[1].style.display="block";
        Array.prototype.forEach.call(opremaSlikeDmr,function(el){

          el.style.display="none";
  
        });
      }
      else {
        asoltPaket.style.display = "none";
        sniperPaket.style.display = "none";
        dmrPaket.style.width = "80%";
        middleOprema[1].style.width="90%";
        middleText[1].style.display="flex";
        middleText[1].style.justifyContent="space-between";
        Array.prototype.forEach.call(opremaSlikeDmr,function(el){

          el.style.display="block";
  
        });
      }
    }

    else if (object.includes('sniper')) {
      if (asoltPaket.style.display === "none") {
        asoltPaket.style.display = "block";
        dmrPaket.style.display = "block";
        sniperPaket.style.width = "30%"
        middleText[2].style.display="block";
        Array.prototype.forEach.call(opremaSlikeSniper,function(el){

          el.style.display="none";
  
        });
      }
      else {
        asoltPaket.style.display = "none";
        dmrPaket.style.display = "none";
        middleOprema[2].style.width="90%";
        sniperPaket.style.width = "80%";
        middleText[2].style.display="flex";
        middleText[2].style.justifyContent="space-between";
        Array.prototype.forEach.call(opremaSlikeSniper,function(el){

          el.style.display="block";
  
        });
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
              <span className="flyToTrening middle"><Link to="splosniSpopadi" spy={true} smooth={true}>SPOPADI</Link></span>
            </div>
          </div>


          <div className="muskateer">
            <div className="topMusk"><h3>SPOSOJA OPREME</h3></div>
            <div className="middleMusk"><p> Ponujamo veliko izbiro opreme za sposojo od zaščitne opreme do replik.</p>

            </div>
            <div className="bottomMusk">
              <span className="flyToTrening "><Link to="ekipniSpopadi" spy={true} smooth={true}>SPOSOJA OPREME</Link></span>
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
          
        <MediaQuery minWidth={851}>
        <h2>SPOSODITE SI OPREMO!</h2>
          <div className="Lokacija upMinierDog">
            <div className="sposodnaSlika"><img src={sposoja}></img></div>
            <div className="sposodniText">
              <h2>Samo specifičen del opreme</h2>
              <h3>Lahko si sposodite vse od baterije za repliko</h3>
              <h3>do zaščitne maske</h3>
              <h2 className="upMinierDog" style={{ color: '#2c699f' }}>CENIK</h2>
              <div className="cenik upMinierDog">
                
                <div className="inlineDiv"><ul>
                  <li>Renta replike Assault: 10€</li>
                  <br />
                  <li>Renta zaščitne maske: 5€</li>
                  <br />
                  <li>Renta zaščitnih očal: 5€</li>
                  <br />

                </ul></div>
                <div className="inlineDiv">
                <ul>
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

      </MediaQuery>

      <MediaQuery maxWidth={850}>
      <h2>SPOSODITE SI OPREMO!</h2>
          <div className="Lokacija upMinierDog">
            
            <div className="sposodniText">
              <h2>Samo specifičen del opreme</h2>
              <h3>Lahko si sposodite vse od baterije za repliko</h3>
              <h3>do zaščitne maske</h3>
              <h2 className="upMinierDog" style={{ color: '#2c699f' }}>CENIK</h2>
              <div className="cenik upMinierDog">
                
                <div className="inlineDiv"><ul>
                  <li>Renta replike Assault: 10€</li>
                  <br />
                  <li>Renta zaščitne maske: 5€</li>
                  <br />
                  <li>Renta zaščitnih očal: 5€</li>
                  <br />

                </ul></div>
                <div className="inlineDiv">
                <ul>
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


      </MediaQuery>           

        </div>
        <div>
          <div className="minierDog upDog">
            <h2>Sposodite si paket</h2>
          </div>
          <div className="opremaPaketi">

            <div className="opremaPaket asoltPaket" >
              <div className="opremaTop"><h1>SOLDIER</h1></div>
              <div className="opremaMiddle">
                
                <p>V PAKETU DOBITE:</p>
                <div className="middleText">
                <div className="delPaketa">
                    <p>Assualt rifle repliko (M4, AK-47, ...)</p>
                    <img className="delPaketaSlika" src={rifle}/>
                  </div>

                  <div className="delPaketa">
                    <p>Zaščitno masko in očaka</p>
                    <img className="delPaketaSlika" src={mask}/>
                  </div>
                  <div className="delPaketa">
                    <p>1x High-cap magazine</p>
                    <img className="delPaketaSlika" src={highCap}/>
                  </div>
                  <div className="delPaketa">
                    <p>BB metke 0.28g</p>
                    <img className="delPaketaSlika" src={bb28}/>
                  </div>
                  
                  </div>
                  
              </div>
              
              <div className="clickable" >
                <img className="asolt" src={click} onClick={(event) => extend(event.target.className)}/>
              </div>
            </div>


            <div className="opremaPaket dmrPaket" >
              <div className="opremaTop"><h1>DMR</h1></div>
              
              <div className="opremaMiddle">
                
                <p>V PAKETU DOBITE:</p>
                <div className="middleText">
                
                <div className="delPaketa">
                    <p>Designated Marskman rifle</p>
                    <img className="delPaketaSlika1" src={dmr}/>
                  </div>

                  <div className="delPaketa">
                    <p>Zaščitno masko in očala</p>
                    <img className="delPaketaSlika1" src={mask}/>
                  </div>
                  <div className="delPaketa">
                    <p>2x Mid-cap magazine</p>
                    <img className="delPaketaSlika1" src={midCaps}/>
                  </div>
                  <div className="delPaketa">
                    <p>BB metke 0.35g</p>
                    <img className="delPaketaSlika1" src={bb36}/>
                  </div>
                </div>
                
              </div>
              <div className="clickable">
                <img className="dmr" src={click} onClick={(event) => extend(event.target.className)}/>
              </div>
            </div>



            <div className="opremaPaket sniperPaket" >
              <div className="opremaTop"><h1>SNIPER</h1></div>
              <div className="opremaMiddle">
              <p>V PAKETU DOBITE:</p>
                <div className="middleText">
                <div className="delPaketa">
                    <p>Sniper rifle replika</p>
                    <img className="delPaketaSlika2" src={sniper}/>
                  </div>

                  <div className="delPaketa">
                    <p>Zaščitno masko in očala</p>
                    <img className="delPaketaSlika2" src={mask}/>
                  </div>
                  <div className="delPaketa">
                    <p>1x sniper magazine</p>
                    <img className="delPaketaSlika2" src={sniperMag}/>
                  </div>
                  <div className="delPaketa">
                    <p>BB metke 0.40g</p>
                    <img className="delPaketaSlika2" src={bb40}/>
                  </div>
                </div>
              </div>
              <div className="clickable">
                <img className="sniper" src={click} onClick={(event) => extend(event.target.className)}/>
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