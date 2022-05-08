
type FooterType = {
    id: number
    about: string
}

export function Footer(props: FooterType) {
    return <div>{props.about} {props.id}</div>
}