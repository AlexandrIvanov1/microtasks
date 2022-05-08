import React from 'react';

type MoneyType = {
    banknots: string,
    value: number,
    number: string
}

type ComponentsFilterType = {
    onClickHandler: (Button: string) => void,
    currentMoney: Array<MoneyType>
}

export const ComponentsFilter = (props: ComponentsFilterType) => {
    return (
        <div>
            <ul>
                {props.currentMoney.map((item, index) => {
                    return <li key={index}>
                        <span>{item.banknots}</span><span>{item.value}</span><span>{item.number}</span></li>
                })}
            </ul>
            <div style={{marginLeft: '20px'}}>
                <button onClick={() => props.onClickHandler('All')}>All</button>
                <button onClick={() => props.onClickHandler('RUB')}>RUB</button>
                <button onClick={() => props.onClickHandler('Dollars')}>Dollars</button>
            </div>
        </div>
    );
};
