import React from 'react';
import './App.css';
import {Header} from "./01. Components/Header";
import {Body} from "./01. Components/Body";
import {Footer} from "./01. Components/Footer";
import {AppMap} from "./02.Map/AppMap";
import {ButtonApp} from "./03.Button/ButtonApp";
import {UseStateApp} from "./04.UseState/UseStateApp";
import {Filter} from "./05.Filter/FilterApp";
import {FullInput} from "./06.Input/FullInput";

function App() {
        return(
            <div>
                <FullInput />
            </div>
        )
}

export default App;
