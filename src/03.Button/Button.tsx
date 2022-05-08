
type ButtonType = {
    title: string
    callback: () => void
}

export function Button(props: ButtonType) {
    const onClickHandler = () => {
        props.callback()
    }
    return (
        <div>
            <button onClick={onClickHandler}>{props.title}</button>
        </div>
    )
}