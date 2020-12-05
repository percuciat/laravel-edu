import React from 'react';
import '../../../sass/_header.scss'

const Header = ({about, services, title}) => {
    return <>
        <header className="header section">
            <div className="header__title">
                {title}
            </div>
            <div className="header__content">
                <div className="text">
                    Работа компании ACRE осуществляется
                    по принципам эффективности и результативности,
                    доверительного отношения и полной
                    конфиденциальности.
                </div>
                {
                    about || services ?
                        <></>
                        : <button className="btnCommon--gold">Начать сотрудничество</button>
                }

            </div>
        </header>
    </>
};

Header.propTypes = {
};
Header.defaultProps = {};

export default Header;

