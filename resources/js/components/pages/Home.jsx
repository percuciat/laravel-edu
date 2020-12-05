import React from 'react';
import { SliderBig, Slider, SliderSimple } from '../partials'


import kirill from '../../../img/kirill.jpg'
import kirillMark from '../../../img/kirillMark.svg'


const Home = (props) => {
    return <>
        <section className="preview section">
            <div className="title">
                ACRE
            </div>
            <div className="subtitle">
                Коммерческая<br/>
                недвижимость<br/>
                в Москве
            </div>
        </section>
        <section className="advantages section">
            <div className="title">
                Наши<br/>
                преимущества
            </div>
            <SliderBig/>
        </section>
        <section className="services section">
            <div className="title">
                Услуги
            </div>
            <SliderSimple services={true}/>
        </section>
        <section className="discount section">
            <div className="title">
                Акции
            </div>
            <SliderSimple />
        </section>
        <section className="about section">
            <div className="about__block">
                <div className="title-mark">Об ACRE</div>
                <div className="content">
                    ACRE является компанией полного цикла в сфере коммерческой недвижимости.
                    Мы представляем как интересы собственников/арендодателей
                    по вопросам маркетинга, сдачи в аренду или продажи зданий,
                    так и интересы потенциальных арендаторов/покупателей.<br/>
                    <br/>
                    Благодаря большому опыту и знанию рынка мы обеспечиваем
                    своих клиентов самой точной и актуальной информацией,
                    которая служит основой для принятия оптимального и
                    своевременного решения.<br/>
                    <br/>
                    Следуя профессиональным нормам,
                    мы ценим время своих клиентов, соблюдая конфиденциальность,
                    придерживаемся профессиональной ответственности, и стараемся
                    соответствовать стандартам индустрии недвижимости и компетентности в своей работе.
                </div>
                <a href="#" className="btnCommon-alt">Подробнее</a>
            </div>
            <div className="about__block">
                <div className="title-mark">Команда</div>
                <div className="content">
                    Команда cтратегического консалтинга ACRE предлагает
                    различные продукты и услуги для инвесторов и банков,
                    девелоперов и собственников, государственных организаций
                    и конечных пользователей.<br/>
                    <br/>
                    Ежегодно наша команда ведет
                    переговоры относительно сдачи в аренду или продажи десятков
                    тысяч квадратных метров офисных помещений.<br/>
                    <br/>
                    В сфере коммерческой
                    недвижимости наши специалисты имеют большой профессиональный
                    опыт работы как с российскими, так и европейскими компаниями.
                </div>
            </div>
            <figure className="about__picture">
                <div className="about__picture-img">
                    <img src={kirill} alt="" className="img"/>
                </div>
                <figcaption>
                    <div className="about__picture-text">
                        Федоров Кирилл Александрович
                    </div>
                    <div className="about__picture-description">
                        Генеральный директор компании ACRE
                    </div>
                    <div className="about__picture-mark">
                        <img className="img" src={kirillMark} alt=""/>
                    </div>
                </figcaption>
            </figure>
        </section>
        <section className="gallery">
            <div className="title">
                Популярные объекты
            </div>
            <Slider/>
        </section>
    </>
};

Home.propTypes = {};
Home.defaultProps = {};

export default Home;

