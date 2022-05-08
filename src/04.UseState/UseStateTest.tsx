import {useState} from "react";


export function UseStateTest() {

    let [a, setA] = useState(1)

    const onClickHandler = () => {
        setA(a += 1)
        console.log(a)
    }

    const zero = () => {
        setA(0)
    }

    return (
        <div>
            <h1 onClick={onClickHandler}>{a}</h1>

            <button onClick={zero}>Zero</button>
        </div>
    )
}