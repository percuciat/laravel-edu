import React from 'react';
import PropTypes from 'prop-types';
import SwiperCore, {Pagination, Navigation} from 'swiper'
import {Swiper, SwiperSlide} from "swiper/react";

SwiperCore.use([Pagination, Navigation]);

import img from '../../../img/slides/sliderPanaramaImg.jpg'

const SliderPanorama = (props) => {
    const slides = [];
    for (let i = 0; i < 10; i++) {
        slides.push(
            <SwiperSlide key={`slide-${i}`} tag="li" className="sliderPanorama">
                <div className="sliderPanorama__wrapper">
                    <img className="sliderPanorama__img" src={img} alt=""/>
                </div>
            </SwiperSlide>
        )
    }

    return <>
        <Swiper
            tag="section"
            wrapperTag="ul"
            centeredSlides={true}
            spaceBetween={20}
            pagination={{ clickable: true, el: ".swiper-pagination", }}
            navigation={{
                prevEl: '.prev',
                nextEl: '.next',
            }}
            slidesPerView={1}
            activeSlideKey='slide-1'
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

SliderPanorama.propTypes = {};
SliderPanorama.defaultProps = {};

export default SliderPanorama;
