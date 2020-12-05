import React from 'react';
import PropTypes from 'prop-types';
import '../../../sass/_formStatic.scss';
import decor from '../../../img/formStaticImg.png'

const FormStatic = (props) => {
    return <>
        <form action="#" className="static-form section">
            <div className="title">
                Подберите мне недвижимость
            </div>
            <div className="wrapper">
                <label className="labelCommon">
                    <input type="text" className="inputCommon--alt" placeholder="Имя"/>
                </label>
                <label className="labelCommon">
                    <input type="number" className="inputCommon--alt" placeholder="Телефон"/>
                </label>
                <label className="labelCommon">
                    <input type="email" className="inputCommon--alt" placeholder="Эл.почта"/>
                </label>
                <div className="static-form__bottom">
                    <label className="hidden-label">
                        <input className="hidden" type="checkbox"/>
                        <span className="text">
                            Я согласен<br/>
                            <a className="link" href="#">с политикой обработки персональных данных</a>
                        </span>
                    </label>
                    <button className="btnCommon-alt">Отправить</button>
                </div>
            </div>
            <div className="img">
                <img src={decor} alt=""/>
            </div>
        </form>
    </>
};

FormStatic.propTypes = {};
FormStatic.defaultProps = {};

export default FormStatic;

