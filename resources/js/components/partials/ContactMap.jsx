import React from 'react';
import { YMaps, Map, Placemark } from "react-yandex-maps";
import '../../../sass/_contactMap.scss'

const mapData = {
    center: [55.751574, 37.573856],
    zoom: 9,
};

const coordinates = [
    [55.684758, 37.738521],
    [57.684758, 39.738521]
];




const ContactMap = (props) => {
    return <>
            <YMaps>
                <Map defaultState={mapData} className="contactMap">
                    {coordinates.map((coordinate, index) => <Placemark geometry={coordinate} key={index} />)}
                </Map>
            </YMaps>
    </>;
};


export default ContactMap;
