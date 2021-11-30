// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper-bundle.min.css'
import { Link, withRouter } from "react-router-dom";
import slika1 from "./images/pravljicna1.JPG";
import slika2 from "./images/pravljicna2.JPG";
import slika3 from "./images/pravljicna3.JPG";
import slika4 from "./images/pravljicna4.JPG";
import slika5 from "./images/pravljicna5.JPG";

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
            <img src={slika1}/>
            </SwiperSlide>
            <SwiperSlide>
            <img src={slika2}/>
            </SwiperSlide>
            <SwiperSlide>
            <img src={slika3}/>
            </SwiperSlide>
            <SwiperSlide>
            <img src={slika4}/>
            </SwiperSlide>
            <SwiperSlide className="miniDog">
            <img src={slika5}/>
            </SwiperSlide>
            
          
        </Swiper>
    );
};