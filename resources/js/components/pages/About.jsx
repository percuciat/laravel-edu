import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { FormStatic, Intro, SliderAdvantage, SliderPartners, SliderSimple } from '../partials'



import Img1 from '../../../img/aboutImg1.jpg'
import Img2 from '../../../img/aboutImg2.jpg'
import Img3 from '../../../img/aboutImg3.jpg'
import Img4 from '../../../img/aboutImg4.jpg'
import Img5 from '../../../img/aboutImg5.jpg'




const About = (props) => {
    let width = { matches: window.matchMedia("(max-width: 768px)"), };

    let [changeWidth, setWidth] = useState(width);

    useEffect(() => {
        const handler = e => setWidth({matches: e.matches});
        width.matches.addListener(handler);
        return () => width.matches.removeListener(handler);
    }, []);

    return <>
        <Intro/>
        <section className="team section">
            <div className="title">
                Наша команда
            </div>
            {
                width.matches.matches
                    ?
                        <SliderSimple team/>
                    :  <div className="content">
                        <div className="content__item"><img src={Img1} alt="" className="img"/></div>
                        <div className="content__item"><img src={Img2} alt="" className="img"/></div>
                        <div className="content__item"><img src={Img3} alt="" className="img"/></div>
                        <div className="content__item"><img src={Img4} alt="" className="img"/></div>
                        <div className="content__item"><img src={Img5} alt="" className="img"/></div>
                    </div>
            }

        </section>
        <section className="section">
            <div className="title">
                Наши преимущества
            </div>
            <SliderAdvantage/>
        </section>
        <section className="section partners">
            <div className="title">
                Наши партнеры
            </div>
            <SliderPartners/>
        </section>
        <FormStatic/>
    </>
};

About.propTypes = {};
About.defaultProps = {};

export default About;
