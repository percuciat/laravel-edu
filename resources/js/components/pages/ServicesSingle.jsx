import React from 'react';
import {useParams} from 'react-router-dom';
import PropTypes from 'prop-types';
import { FormStatic, Intro, SliderAdvantage } from '../partials'


const ServicesSingle = (props) => {
    let { topicId } = useParams();

    return <>
        <Intro/>
        <section className="section">
            <div className="title">
                {topicId}
            </div>
            <SliderAdvantage servicesSingle/>
        </section>
        <FormStatic/>
    </>
};

ServicesSingle.propTypes = {};
ServicesSingle.defaultProps = {};

export default ServicesSingle;
