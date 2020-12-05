import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

import '../../../../sass/_card.scss'

import img from "../../../../img/slides/imgSiderAdvantages.jpg";


const Card = ({servicesSingle, catalog, name}) => {
    return <div className="Card">
            <div className="Card__img">
                <img className="img" src={img} alt=""/>
                {
                    servicesSingle || catalog ?
                        <div className="mark">А</div>
                        : <></>
                }
            </div>
            <div className="Card__content">
                {
                    servicesSingle || catalog ?
                        <>
                            <div className="Card__wrapper">
                                <div className="Card__wrapper-header">
                                    <div className="head">
                                        <div className="content-title">
                                            {name}
                                        </div>
                                        <div className="content-rating Card__AttributesIcons">
                                            <div className="text class-attribute">
                                                Класс А
                                            </div>
                                        </div>
                                    </div>
                                    <div className="head head-address">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M14 6.66699C14 11.3337 8 15.3337 8 15.3337C8 15.3337 2 11.3337 2 6.66699C2 5.07569 2.63214 3.54957 3.75736 2.42435C4.88258 1.29913 6.4087 0.666992 8 0.666992C9.5913 0.666992 11.1174 1.29913 12.2426 2.42435C13.3679 3.54957 14 5.07569 14 6.66699Z" stroke="#ADADAD" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M8 8.66699C9.10457 8.66699 10 7.77156 10 6.66699C10 5.56242 9.10457 4.66699 8 4.66699C6.89543 4.66699 6 5.56242 6 6.66699C6 7.77156 6.89543 8.66699 8 8.66699Z" stroke="#ADADAD" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                        <address>
                                            г. Москва, Пресненская наб. 6
                                        </address>
                                    </div>
                                    <ul className="head">
                                        <li className="Card__AttributesIcons">
                                            <div className="metro-attribute">
                                                <span className="description-text">Баррикадная</span>
                                            </div>
                                        </li>
                                        <li className="Card__AttributesIcons">
                                            <div className="walk-attribute">
                                                <span className="description-text">5 мин</span>
                                            </div>
                                        </li>
                                        <li className="Card__AttributesIcons">
                                            <div className="ifns-attribute">
                                                <span className="description-text">ИФНС № 3</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                {
                                    !catalog ?
                                        <>
                                            <div className="Card__wrapper-content">
                                                <div className="content-subtitle">История подбора</div>
                                                <div className="content-text">
                                                    Офис класса А, расположенный в новом высотном здании в центральном деловом районе города Москва. Здание находится с хорошим транспортным сообщением. Недалеко от здания находятся основные объекты инфраструктуры и зоны отдыха.
                                                    Помещение офиса имеет ремонт в соответствии с высокими стандартами качества.
                                                </div>
                                            </div>
                                            <div className="Card__wrapper-bottom">
                                                <div className="description">
                                                    Это мог бы быть ваш офис
                                                </div>
                                                <Link to="/catalog" className="link btnCommon-alt">В каталог</Link>
                                            </div>
                                        </>
                                        : <>
                                            <div className="Card__wrapper-table">
                                                <div className="table__head">
                                                    <div className="table__head-item content-subtitle">Площадь</div>
                                                    <div className="table__head-item content-subtitle">руб. в месяц</div>
                                                    <div className="table__head-item content-subtitle hiddenMobile">Этаж</div>
                                                    <div className="table__head-item content-subtitle hiddenMobile">Состояние</div>
                                                </div>
                                                <ul className="table__list">
                                                    <li className="table__list-item">
                                                        <div className="item-attribute">
                                                            <Link to="/" className="description-text">15.68 кв.м</Link>
                                                        </div>
                                                        <div className="item-attribute">
                                                            <span className="description-text">48 347</span>
                                                        </div>
                                                        <div className="item-attribute hiddenMobile">
                                                            <span className="description-text">51</span>
                                                        </div>
                                                        <div className="item-attribute hiddenMobile">
                                                            <span className="description-text">С отделкой</span>
                                                        </div>
                                                    </li>
                                                    <li className="table__list-item">
                                                        <div className="item-attribute">
                                                            <Link to="/" className="description-text">15.68 кв.м</Link>
                                                        </div>
                                                        <div className="item-attribute">
                                                            <span className="description-text">48 347</span>
                                                        </div>
                                                        <div className="item-attribute hiddenMobile">
                                                            <span className="description-text">51</span>
                                                        </div>
                                                        <div className="item-attribute hiddenMobile">
                                                            <span className="description-text">С отделкой</span>
                                                        </div>
                                                    </li>
                                                    <li className="table__list-item">
                                                        <div className="item-attribute">
                                                            <Link to="/" className="description-text">15.68 кв.м</Link>
                                                        </div>
                                                        <div className="item-attribute">
                                                            <span className="description-text">48 347</span>
                                                        </div>
                                                        <div className="item-attribute hiddenMobile">
                                                            <span className="description-text">51</span>
                                                        </div>
                                                        <div className="item-attribute hiddenMobile">
                                                            <span className="description-text">С отделкой</span>
                                                        </div>
                                                    </li>
                                                    <li className="table__list-item">
                                                        <div className="item-attribute">
                                                            <Link to="/" className="description-text">15.68 кв.м</Link>
                                                        </div>
                                                        <div className="item-attribute">
                                                            <span className="description-text">48 347</span>
                                                        </div>
                                                        <div className="item-attribute hiddenMobile">
                                                            <span className="description-text">51</span>
                                                        </div>
                                                        <div className="item-attribute hiddenMobile">
                                                            <span className="description-text">С отделкой</span>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="Card__wrapper-bottom">
                                                <Link to="/" className="link btnCommon-alt">Посмотреть в аренду</Link>
                                            </div>
                                        </>
                                }

                            </div>
                        </>
                        : <>
                            <div className="content-title">Преимущество №1</div>
                            <div className="content-subtitle">Принцип эффективного сотрудничества</div>
                            <div className="content-text">
                                Защищая интересы каждого клиента, ACRE использует только
                                эффективные решения и нестандартные пути для достижения поставленных целей.
                                Важное преимущество поиска помещения с нами – разнообразие вариантов,
                                выгодные условия и приемлемый ценовой диапазон.
                                Основой для принятия эффективного и оптимального решения служит
                                информация, которой мы обеспечиваем своих клиентов, опираясь на
                                большой опыт и знание современной рыночной системы.
                            </div>
                        </>
                }
            </div>
    </div>
};

Card.propTypes = {};
Card.defaultProps = {};

export default Card;
