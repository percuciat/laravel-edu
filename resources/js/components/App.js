import React from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter} from "react-router-dom";
import Aside from './partials/Aside';
import Routes from "./route/Routes";


function App() {
    return <>
        <BrowserRouter>
            <Aside/>
            <div className="content__wrapper">
                <Routes/>
            </div>
        </BrowserRouter>
    </>
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
