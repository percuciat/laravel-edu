import React from 'react';
import SwiperCore, {Pagination, Navigation} from 'swiper'
import {Swiper, SwiperSlide} from "swiper/react";
import {Link} from "react-router-dom";

// import '../../../sass/_sliderAdvantage.scss'

import Card from "./card/Card";


SwiperCore.use([Pagination, Navigation]);

const SliderAdvantage = ({servicesSingle}) => {
    const slides = [];
    for (let i = 0; i < 10; i++) {
        slides.push(
            <SwiperSlide key={`slide-${i}`} tag="li" className="sliderAdvantages">
                <Card servicesSingle={servicesSingle}/>
            </SwiperSlide>
        )
    }

    return <>
        <Swiper
            tag="section"
            wrapperTag="ul"
            spaceBetween={20}
            pagination={{ clickable: true, el: ".swiper-pagination", }}
            navigation={{
                prevEl: '.prev',
                nextEl: '.next',
            }}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {slides}
            <div className="slider-swiper-attributes">
                <button className="prev swiper-arr" />
                <div className="swiper-pagination" />
                <button className="next swiper-arr" />
            </div>
        </Swiper>
    </>;
};



export default SliderAdvantage;
