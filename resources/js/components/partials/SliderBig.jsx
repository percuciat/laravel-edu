
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Pagination, Navigation} from 'swiper'
import slideBigImg from '../../../img/slides/bigSiderSimpleImg.jpg'

import 'swiper/swiper.scss';
import '../../../sass/_bigSlider.scss';


SwiperCore.use([Pagination, Navigation]);

const SliderBig = () => {
    const slides = [];

    for (let i = 0; i < 10; i++) {
        slides.push(
            <SwiperSlide key={`slide-${i}`} tag="li" className="sliderBig">
                <div className="sliderBig__wrapper">
                    <div className="sliderBig__content">
                        <div className="title-mark">
                            30 минут
                        </div>
                        <div className="content-text">
                            Всего за полчаса мы бесплатно сделаем подборку офисов
                            или коммерческой недвижимости в Москве по
                            вашему запросу и пришлем лучшие варианты
                            помещений на электронную почту или в любой
                            мессенджер. Всего за полчаса мы бесплатно
                            сделаем подборку офисов или коммерческой
                            недвижимости в Москве по вашему запросу и пришлем
                            лучшие варианты помещений на электронную почту или
                            в любой мессенджер
                        </div>
                    </div>
                    <div className="sliderBig__img">
                        <img src={slideBigImg} alt="" className="img"/>
                    </div>
                </div>
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
            // slidesPerColumn={1}
            // slidesPerView={2}
            // centeredSlides={true}
            // slidesPerView='auto'
            breakpoints={{
                // when window width is >= 320px
                320: {
                    width: 500,
                    slidesPerView: 1,
                    spaceBetween: 15,
                },
                520: {
                    width: 520,
                    slidesPerView: 1,
                    spaceBetween: 15,
                },
                // when window width is >= 768px
                768: {
                    width: 750,
                    slidesPerView: 1,
                },
                1440: {
                    width: 1440,
                    slidesPerView: 2,
                },
            }}
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
export default SliderBig;
