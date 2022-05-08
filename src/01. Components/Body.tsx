
type BodyType = {
    title: string
    description: string
}

export const  Body = (props: BodyType) => {
    return (
        <>
            <div>{props.title}</div>
            <div>{props.description}</div>
        </>
    )
 }