import React from 'react';
import PropTypes from 'prop-types';

import { FormStatic, Card, ShowMore } from '../partials'



const Catalog = (props) => {
    const arr = ['Башня 1', 'Башня 2', 'Башня 3', 'Башня 44']
    return <>
        <section className="catalog section">
            {
                arr.map((item, index) => {
                    return <Card key={`${item}_${index}`} catalog name={item}/>
                })
            }
            <ShowMore/>
        </section>
        <FormStatic/>
    </>
};

Catalog.propTypes = {};
Catalog.defaultProps = {};

export default Catalog;
