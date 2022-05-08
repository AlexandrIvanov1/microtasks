import React from 'react';
import './App.css';
import {Header} from "./01. Components/Header";
import {Body} from "./01. Components/Body";
import {Footer} from "./01. Components/Footer";

function App() {
        return(
            <div>
                <Header title={'Title'}/>
                <Body title={'Body'} description={'description'}/>
                <Footer id={1} about={''}/>
            </div>
        )
}

export default App;
