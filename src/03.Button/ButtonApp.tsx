import {Button} from "./Button";
import React from "react";

export function ButtonApp() {
    const ButtonCall = (sub: string, age: number) => {
        console.log(sub, age)
    }
    function ButtonCall2(sub: string) {
        console.log(sub)
    }
    const SButton = () => {
        console.log('I am stupid button')
    }
    return(
        <div className='App'>
            <Button title={'YouTube'} callback={() => ButtonCall('YouTube', 25)}/>
            <Button title={'Twitch'} callback={() => ButtonCall2('Twitch')}/>
        </div>
    )
}