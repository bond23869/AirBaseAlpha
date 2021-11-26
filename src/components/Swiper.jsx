// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper-bundle.min.css'
import { Link, withRouter } from "react-router-dom";
import training from "./images/ar-min.jpg";
import sposoja from "./images/rentGear.jpg";
import outdoor from "./images/outdoor.jpg";
import epicEvent from "./images/soldd.jpg";

import SwiperCore,{
    Pagination
} from 'swiper';
SwiperCore.use([Pagination]);

export default () => {
    return (
        <Swiper
            pagination = {true}
            spaceBetween={50}
            slidesPerView={1}
            
        >
            <SwiperSlide>
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
            </SwiperSlide>
            <SwiperSlide>
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
            </SwiperSlide>
            <SwiperSlide><div className="paket">
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
          </div></SwiperSlide>
            <SwiperSlide>
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
            </SwiperSlide>
            ...
        </Swiper>
    );
};