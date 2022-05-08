import React from 'react';
import './App.css';
import {Header} from "./01. Components/Header";
import {Body} from "./01. Components/Body";
import {Footer} from "./01. Components/Footer";
import {AppMap} from "./02.Map/AppMap";

function App() {
        return(
            <div>
                <AppMap />
            </div>
        )
}

export default App;
