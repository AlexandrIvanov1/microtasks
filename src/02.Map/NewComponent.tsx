
type NewComponentType = {
    users: Array<UsersType>
}

type UsersType = {
    id: number
    name: string
    age: number
}

export const NewComponent = (props: NewComponentType) => {
    return (
        <div>
            <ul>
                {props.users.map((item, index) => {
                    return (
                        <li key={index}>Name - {item.name}, age - {item.age}, id - {item.id}</li>
                    )
                })}
            </ul>
        </div>
    )
}