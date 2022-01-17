import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import '../../../sass/_serviceCard.scss';


const ServiceCard = ({info, slug}) => {

    return <>
        <li className="serviceCard-item">
            <figure className="serviceCard-wrapper">
                <div className="serviceCard-img">
                    <img className="img" src={info.img} alt=""/>
                </div>
                <figcaption className="serviceCard-content">
                    <div className="title">
                        {info.textTitle}
                    </div>
                    <Link to={`${slug}/props-v-state`} className="btnCommon-alt">
                        Подробнее
                    </Link>
                </figcaption>
            </figure>
        </li>
    </>
};

ServiceCard.propTypes = {};
ServiceCard.defaultProps = {};

export default ServiceCard;
