import React from "react";
import { Link, withRouter } from "react-router-dom";
import logo from './images/logo.png';
import phone from './images/phone.svg';
import clock from './images/clock.svg';
import mail from './images/mail.svg';
import fb from './images/fb.png';
import tktk from './images/tiktok.png';
import insta from './images/insta.png';
import MediaQuery from "react-responsive";
import menu from "./images/menu.png";
function Navigation(props) {

  function dropThatMenu() {
    var mobileMenu = document.getElementsByClassName('mobileMenu')[0];

    if (mobileMenu.style.display === 'block') {
      mobileMenu.style.display = 'none'
      mobileMenu.style.height = '0px';
    }
    else {
      mobileMenu.style.display = 'block';
      mobileMenu.style.height = 'auto'
    }
  }

  function byeMenu(){
    var mobileMenu = document.getElementsByClassName('mobileMenu')[0];

    mobileMenu.style.display = 'none';
  }

  return (
    <>
      <MediaQuery maxWidth={850}>
        <div className="navigation">

          <div className="blackBar">
            <div className="blackKontakt">
              <div className="bKontakt"><embed src={phone} /></div>
              <div className="bKontakt"><embed src={clock} /></div>
              <div className="bKontakt"><embed src={mail} /></div>

            </div>
            <div className="blackMenu">
              <img src={menu} onClick={dropThatMenu}></img>
            </div>
          </div>
          <div className="mobileMenu">
            <ul className="styleless">
              <li onClick={byeMenu}>
                <Link className="" to="/storitve">
                  Storitve
                </Link>
              </li>
              <li onClick={byeMenu}>
                <Link className="" to="/poligoni">
                  Poligoni
                </Link>
              </li>
              <li onClick={byeMenu}>
                <Link className="" to="/pravilnik">
                  Pravilnik
                </Link>
              </li>
              <li onClick={byeMenu}>
                <Link className="" to="/kontakt">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
          <nav className="navigationBar">

            <div className="navigationBar">
              <img id="logo" src={logo} alt="Airsoft Base Alpha logo" />

              <Link className="navBrand" to="/">
                AIRSOFT BASE ALPHA
              </Link>


            </div>
          </nav>
        </div>
      </MediaQuery>



      <MediaQuery minWidth={851}>
        <div className="navigation">

          <div className="blackBar">
            <div className="blackKontakt">
              <div className="bKontakt"><embed src={phone} /><p>+386 41 566 716</p></div>
              <div className="bKontakt"><embed src={clock} /><a className="hoverWhite">Rezervacija termina</a></div>
              <div className="bKontakt"><embed src={mail} /><p>airsoftbasealpha@gmail.com</p></div>
            </div>
            <div className="blackMedija">
              <a href="https://www.facebook.com/airbasealfa/" ><img src={fb}></img></a>
              <a href="https://www.instagram.com/airbasealpha/" ><img src={insta}></img></a>
              <a href="https://www.tiktok.com/@airbasealpha" ><img src={tktk}></img></a>
            </div>
          </div>
          <nav className="navigationBar">

            <div className="navigationBar">
              <img id="logo" src={logo} alt="Airsoft Base Alpha logo" />

              <Link className="navBrand" to="/">
                AIRSOFT BASE ALPHA
              </Link>

              <div className="rightNav">
                <ul className="navList">
                  <li
                    className={`  ${props.location.pathname === "/" ? "active" : ""
                      }`}
                  >
                    <Link className="" to="/">
                      O Nas
                      <span className="sr-only">(current)</span>
                    </Link>
                  </li>

                  <li
                    className={`  ${props.location.pathname === "/storitve" ? "active" : ""
                      }`}
                  >
                    <Link className="" to="/storitve">
                      Storitve
                    </Link>
                  </li>
                  {/*
                  <li
                    className={` ${props.location.pathname === "/oprema" ? "active" : ""
                      }`}
                  >
                    <Link className="" to="/oprema">
                      Oprema
                    </Link>
                  </li>
                    */}
                  <li
                    className={`  ${props.location.pathname === "/poligoni" ? "active" : ""
                      }`}
                  >
                    <Link className="" to="/poligoni">
                      Poligoni
                    </Link>
                  </li>

                  <li
                    className={`  ${props.location.pathname === "/pravilnik" ? "active" : ""
                      }`}
                  >
                    <Link className="" to="/pravilnik">
                      Pravilnik
                    </Link>
                  </li>

                  <li
                    className={`  ${props.location.pathname === "/kontakt" ? "active" : ""
                      }`}
                  >
                    <Link className="" to="/kontakt">
                      Kontakt
                    </Link>
                  </li>

                </ul>
              </div>
            </div>
          </nav>
        </div>
      </MediaQuery>
    </>
  );
}

export default withRouter(Navigation);