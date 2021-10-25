import React from "react";
import { Link, withRouter } from "react-router-dom";
import logo from './images/logo.png';

function Navigation(props) {
  return (

    <div className="navigation">
      <nav class="navbar navbar-expand navbar-dark bg-dark">
      
          
        <div class="container" id="navbar">
        <img id="logo" src={logo} alt="AirBase Alpha logo"/>
      <Link class="navbar-brand" to="/">
            AirBase Alpha
          </Link>
          
          <div>
            <ul class="navbar-nav ml-auto">

              <li
                class={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/">
                  O Nas
                  <span class="sr-only">(current)</span>
                </Link>
              </li>

              <li
                class={`nav-item  ${
                  props.location.pathname === "/storitve" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/storitve">
                  Storitve
                </Link>
              </li>

              <li
                class={`nav-item  ${
                  props.location.pathname === "/oprema" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/oprema">
                  Oprema
                </Link>
              </li>

              <li
                class={`nav-item  ${
                  props.location.pathname === "/poligoni" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/poligoni">
                  Poligoni
                </Link>
              </li>

              <li
                class={`nav-item  ${
                  props.location.pathname === "/pravilnik" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/pravilnik">
                  Pravilnik
                </Link>
              </li>

              <li
                class={`nav-item  ${
                  props.location.pathname === "/kontakt" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/kontakt">
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