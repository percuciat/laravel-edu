import React, {useState} from 'react';
import MyContext from '../context';
import PropTypes from 'prop-types';

import { FormStatic, Card, ShowMore } from '../partials'
import {useRouteMatch} from "react-router-dom";



const Catalog = (props) => {
    let { path, url } = useRouteMatch();
    console.log(url)
    const arr = [
        {
            id: 1,
            name:'Башня 1',
            isOpenMap: false,
            urlId: 1234,
        },
        {
            id: 2,
            name:'Башня 2',
            isOpenMap: false,
            urlId: 1334,
        },
        {
            id: 3,
            name:'Башня 3',
            isOpenMap: false,
            urlId: 453543,
        },
        {
            id: 4,
            name:'Башня 44',
            isOpenMap: false,
            urlId: 45543,
        }
       ];
    let [changeStatusOpenMap, setChangeStatusOpenMap] = useState(arr);
    const openMap = (id) => {
        console.log('context')
        setChangeStatusOpenMap(
            changeStatusOpenMap.map(item => {
                if (item.id === id) {
                    item.isOpenMap = true;
                }
                return item
            })
        );

        /*let oldArr = arr.filter(item => item.id !== id);
        return oldArr.concat(changeStatusOpenMap)*/
    };
    console.log(arr);
    return <>
        <section className="catalog section">
            <MyContext.Provider value={{openMap}}>
                {
                    arr.map((item, index) => {
                        return <Card key={`${item.name}_${index}`} catalog elem={item} slug={`${url}/${item.urlId}`}/>
                    })
                }
            </MyContext.Provider>
            <ShowMore/>
        </section>
        <FormStatic/>
    </>
};

Catalog.propTypes = {};
Catalog.defaultProps = {};

export default Catalog;
