import React from "react";
import { Link, withRouter } from "react-router-dom";
import logo from './images/logo.png';

function Navigation(props) {
  return (

    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
      
          
        <div className="container" id="navbar">
        <img id="logo" src={logo} alt="AirBase Alpha logo"/>
      <Link className="navbar-brand" to="/">
            AirBase Alpha
          </Link>
          
          <div>
            <ul className="navbar-nav ml-auto">

              <li
                className={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/">
                  O Nas
                  <span className="sr-only">(current)</span>
                </Link>
              </li>

              <li
                className={`nav-item  ${
                  props.location.pathname === "/storitve" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/storitve">
                  Storitve
                </Link>
              </li>

              <li
                className={`nav-item  ${
                  props.location.pathname === "/oprema" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/oprema">
                  Oprema
                </Link>
              </li>

              <li
                className={`nav-item  ${
                  props.location.pathname === "/poligoni" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/poligoni">
                  Poligoni
                </Link>
              </li>

              <li
                className={`nav-item  ${
                  props.location.pathname === "/pravilnik" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/pravilnik">
                  Pravilnik
                </Link>
              </li>

              <li
                className={`nav-item  ${
                  props.location.pathname === "/kontakt" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/kontakt">
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