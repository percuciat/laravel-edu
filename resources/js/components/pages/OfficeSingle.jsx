import React from 'react';
import {useParams} from 'react-router-dom';
import { FormStatic, SliderPanorama } from '../partials'


const OfficeSingle = (props) => {
    let { officeId } = useParams();
    return <>
        <section className="section panorama">
            <SliderPanorama/>
        </section>
        <FormStatic/>
    </>
};



export default OfficeSingle;
