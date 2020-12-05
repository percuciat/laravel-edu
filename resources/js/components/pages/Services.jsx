import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";

import {FormStatic, ServiceCard} from '../partials'


import img1 from '../../../img/servicesCardImg1.jpg'
import img2 from '../../../img/servicesCardImg2.jpg'
import img3 from '../../../img/servicesCardImg3.jpg'


const Services = (props) => {
    const infoServices = [
        {
            img: img1,
            textTitle: 'Подбор недвижимости',
            url: ''
        },
        {
            img: img2,
            textTitle: 'Помещения от застройщиков'
        },
        {
            img: img3,
            textTitle: 'Готовый арендный бизнес'
        }
    ];
    let { path, url } = useRouteMatch();
    return <>
        <section className="section servicesCards">
            <ul className="servicesCards__list">
                {
                    infoServices.map((item, index) => {
                        return <ServiceCard key={index} info={item} slug={url}/>
                    })
                }
            </ul>
        </section>
        <FormStatic/>
    </>
};


export default Services;
