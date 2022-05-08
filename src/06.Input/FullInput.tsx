import React, {useState} from 'react';
import {FullInputComponent} from "./FullInputComponent";
import {Input} from "./Input";
import {Button} from "./Button";

export const FullInput = () => {

    let [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
        ])
    let [title, setTitle] = useState('')


    function addTitle(title: string) {
        let newMessage = {message: title}
        setMessage([newMessage ,...message])
    }
    const buttonHandler = () => {
        addTitle(title)
        setTitle('')
    }

    return (
        <div style={{padding: '30px'}}>
            {/*<FullInputComponent addTitle={addTitle}/>*/}

            <Input title={title} setTitle={setTitle}/>
            <Button name={'+'} callback={buttonHandler}/>

            {message.map((el, index) => {
                return <div key={index}>{el.message}</div>
            })}
        </div>
    );
};