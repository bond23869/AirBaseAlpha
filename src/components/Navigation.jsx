import React from "react";
import { Link, withRouter } from "react-router-dom";
import logo from './images/logo.png';

function Navigation(props) {
  return (

    <div className="navigation">
      <nav className="navigationBar">
      
        <div className="navigationBar">
      <img id="logo" src={logo} alt="Airsoft Base Alpha logo"/>
        
      <Link className="navBrand" to="/">
            AIRSOFT BASE ALPHA
          </Link>
          
          <div className="rightNav">
            <ul className="navList">
              <li
                className={`  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link className="" to="/">
                  O Nas
                  <span className="sr-only">(current)</span>
                </Link>
              </li>

              <li
                className={`  ${
                  props.location.pathname === "/storitve" ? "active" : ""
                }`}
              >
                <Link className="" to="/storitve">
                  Storitve
                </Link>
              </li>

              <li
                className={` ${
                  props.location.pathname === "/oprema" ? "active" : ""
                }`}
              >
                <Link className="" to="/oprema">
                  Oprema
                </Link>
              </li>

              <li
                className={`  ${
                  props.location.pathname === "/poligoni" ? "active" : ""
                }`}
              >
                <Link className="" to="/poligoni">
                  Poligoni
                </Link>
              </li>

              <li
                className={`  ${
                  props.location.pathname === "/pravilnik" ? "active" : ""
                }`}
              >
                <Link className="" to="/pravilnik">
                  Pravilnik
                </Link>
              </li>

              <li
                className={`  ${
                  props.location.pathname === "/kontakt" ? "active" : ""
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
  );
}

export default withRouter(Navigation);