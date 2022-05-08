import React from 'react';

type ButtonType = {
    name: string
    callback: () => void
}

export const Button = (props: ButtonType) => {

    const onClickHandler = () => {

    }
    return (
        <button onClick={props.callback}>{props.name}</button>
    );
};
