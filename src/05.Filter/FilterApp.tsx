import {useState} from "react";
import {ComponentsFilter} from "./ComponentsFilter";

type MoneyType = 'All' | 'RUB' | 'Dollars'

export function Filter() {

    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234'},
        {banknots: 'Dollars', value: 50, number: ' z67890'},
        {banknots: 'RUB', value: 100, number: ' w1267890'},
        {banknots: 'Dollars', value: 100, number: ' e12378'},
        {banknots: 'Dollars', value: 50, number: ' c7890'},
        {banknots: 'RUB', value: 100, number: ' r17890'},
        {banknots: 'Dollars', value: 50, number: ' x12390'},
        {banknots: 'RUB', value: 50, number: ' v890'},
    ])

    const [filter, setFilter] = useState<MoneyType>('All')

    let currentMoney = money
    if (filter === 'RUB') {
        currentMoney = money.filter(item => item.banknots === 'RUB')
    }
    if (filter === 'Dollars') {
        currentMoney = money.filter(item => item.banknots === 'Dollars')
    }

    const onClickHandler = (Button: string) => {
        // @ts-ignore
        setFilter(Button)
    }

    return (
        <ComponentsFilter
            onClickHandler={onClickHandler}
            currentMoney={currentMoney}
        />
    )
}