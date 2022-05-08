import React, {ChangeEvent, useState} from 'react';

type FullInputComponentType = {
    addTitle: (title: string) => void
}

export const FullInputComponent = (props: FullInputComponentType) => {

    let [title, setTitle] = useState('')

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }
    const onClickHandler = () => {
        props.addTitle(title)
        setTitle('')
    }

    return (
        <div>
            <input value={title} onChange={onChangeHandler}/>
            <button onClick={onClickHandler}>+</button>
        </div>
    );
};