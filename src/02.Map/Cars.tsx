type TopCarsType = {
    cars: Array<CarsArray>
}
type CarsArray = {
    manufacturer: string
    model: string
    grade: number
}

export const TopCars = (props: TopCarsType) => {
    return (
        <div>
            <table>
                <tr>
                    <th>manufacturer</th>
                    <th>model</th>
                    <th>grade</th>
                </tr>
                {props.cars.map(el => {
                    return (
                        <tr>
                            <td>{el.manufacturer}</td>
                            <td>{el.model}</td>
                            <td>{el.grade}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}