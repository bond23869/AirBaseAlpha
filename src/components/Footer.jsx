import React from "react";
import instagram from "./images/instagram.svg";
import facebook from "./images/facebook.svg";
import tiktok from "./images/tiktok.svg";


function Footer() {

    return (
    <div className="footer">
      <footer className="py-5 bg-dark">
        <div className="container spicyFooter">
          
            <div className="socialniMediji">
            <h6>SOCIAL NETWORKS</h6>
            <a href="https://www.instagram.com/airbasealpha/"><img src={instagram} alt="instagram"></img></a>
            <a href="https://www.facebook.com/airbasealfa/"><img src={facebook} alt="facebook"></img></a>
            <a href="https://www.tiktok.com/@airbasealpha"><img src={tiktok} alt="tiktok"></img></a>
            </div>
            
          

            <div>
            <h6>KONTAKT</h6>
            <p>Email: airsoftbasealpha@gmail.com</p>
            <p>Tel: +386 41 566 716</p>
            </div>
            

            <div className="footerLokacija">
            <h6>LOKACIJA</h6>
            <p>AirBaseAlpha D.o.o., kalčkova ulica 12</p>
            </div>
            
        </div>
      </footer>
    </div>
  );
}



export default Footer;