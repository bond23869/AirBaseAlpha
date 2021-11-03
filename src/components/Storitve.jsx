import React from "react";
import {Link} from 'react-scroll';

function Storitve() {
  return (
    <div>
      <div className="Storitve upPad downDog">
        
        <div className="storitveHeader">
          <h1>STORITVE</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper a lacus vestibulum sed arcu non odio. Lorem sed risus ultricies tristique nulla. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Orci eu lobortis elementum nibh tellus. Turpis massa sed elementum tempus egestas. Neque ornare aenean euismod elementum nisi. Phasellus vestibulum lorem sed risus. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. Praesent semper feugiat nibh sed. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper.</p>
          </div>

        <div className="threeMuskateers">
          <div className="muskateer">
            <div><h3>AIRSOFT TRENINGI</h3></div>
            <div><ul>
              <li>Spoznava z opremo</li>
              <li>Poliranje osnov</li>
              <li>Osnovne in napredne taktike</li>
              <li>Testiranje različnih tipov iger</li>
              <li>In veliko več</li>
            </ul>
            </div>
            <div><span className="flyToTrening left"><Link to="trening" spy={true} smooth={true}>TRENING</Link></span></div>
            </div>
            
          <div className="muskateer">

          <div><h3>EKIPNI SPOPADI</h3></div>
            <div><ul>
              <li>Rojstnodnevne zabave</li>
              <li>Team building</li>
              <li>Privat spopadi s svojo lastno ekipo (min. 6 ljudi)</li>
              <li>Testiranje različnih tipov iger</li>
            </ul>
            </div>
            <div><p id="bottom">Termini so rezervirani za sobote</p></div>
            <div className="bottom">
            <span className="flyToTrening middle"><Link to="ekipniSpopadi" spy={true} smooth={true}>EKIPNI SPOPAD</Link></span>
            </div>
            </div>
          
            
          <div className="muskateer">
            <div><h3>SPLOŠNI SPOPADI</h3></div>
            <div><p> Dobrodošli vsi, nedelja razervirana samo za max 30 oseb na spopad v poletnem času, 
              <div><span className="flyToTrening right"><Link to="splosniSpopadi" spy={true} smooth={true}>SPLOŠNI SPOPAD</Link></span></div>
              v outdoor prostoru in max 16 oseb v zimskem času v indoor prostoru.</p>  </div>
          </div>
          </div>

          

          
          
        </div>

        <div id="trening" className="upDog downDog">
          <div className="storTitle"><h1>TRENINGI</h1></div>
          <div className="treningPhoto"></div>
          <div className="treningText"></div>
        </div>

        <div id="ekipniSpopadi" className="ekipniSpopadi downDog upDog">
        <div className="storTitle"><h1>EKIPNI SPOPADI</h1></div>
        <div className="ekipniPhoto"></div>
        </div>

        <div id="splosniSpopadi" className="splosniSpopadi upDog downDog">
        <div className="storTitle"><h1>SPLOŠNI SPOPADI</h1></div>
        <div className="splosniPhoto"></div>
        </div>
</div>
    
    
  );
}

export default Storitve;