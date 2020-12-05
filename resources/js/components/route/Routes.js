import React from 'react';
import {
    TransitionGroup,
    CSSTransition
} from "react-transition-group";

import {
    Switch,
    Route,
    useLocation,
} from "react-router-dom";

import {Home, Services, Partner, Contacts, About, Catalog, ServicesSingle} from '../pages'
import { Footer, Header } from '../partials'


const Routes = () => {
    let location = useLocation();

    const textTitleHeader = {
        services: "Услуги компании",
        about: "О компании",
        partners: "Информация для партнеров",
    };


    return (
        <TransitionGroup>
            <CSSTransition
                key={location.key}
                classNames="fade"
                timeout={300}
            >
            <Switch location={location}>
                <Route exact path='/' >
                    <main className="main">
                        <div className="container--index">
                            <Home/>
                        </div>
                    </main>
                    <Footer isIndex={true}/>
                </Route>
                <Route exact path='/about' >
                    <Header about title={textTitleHeader.about} />
                    <main className="main">
                        <div className="container">
                            <About/>
                        </div>
                    </main>
                    <Footer/>
                </Route>
                <Route exact path='/services' >
                    <Header services title={textTitleHeader.services}/>
                    <main className="main">
                        <div className="container">
                            <Services/>
                        </div>
                    </main>
                    <Footer/>
                </Route>
                <Route path={`/services/:topicId`}>
                    <Header />
                    <main className="main">
                        <div className="container">
                            <ServicesSingle servicesSingle={true}/>
                        </div>
                    </main>
                    <Footer/>
                </Route>
                <Route path='/contacts' >
                    <main className="main">
                        <div className="container">
                            <Contacts/>
                        </div>
                    </main>
                    <Footer/>
                </Route>
                <Route path='/catalog'>
                    <Header />
                    <main className="main">
                        <div className="container">
                            <Catalog/>
                        </div>
                    </main>
                    <Footer/>
                </Route>
                <Route path='/partners'>
                    <Header title={textTitleHeader.partners}/>
                    <main className="main">
                        <div className="container">
                            <Partner/>
                        </div>
                    </main>
                    <Footer/>
                </Route>
            </Switch>
            </CSSTransition>
        </TransitionGroup>
    )
};
export default Routes;
