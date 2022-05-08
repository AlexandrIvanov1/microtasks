import {NewComponent} from "./NewComponent";
import React from "react";
import {TopCars} from "./Cars";


export function AppMap() {

    const students = [
        {id: 1, name: "James", age: 8},
        {id: 2, name: "Robert", age: 18},
        {id: 3, name: "John", age: 28},
        {id: 4, name: "Michael", age: 38},
        {id: 5, name: "William", age: 48},
        {id: 6, name: "David", age: 58},
        {id: 7, name: "Richard", age: 68},
        {id: 8, name: "Joseph", age: 78},
        {id: 9, name: "Thomas", age: 88},
        {id: 10, name: "Charles", age: 98},
        {id: 11, name: "Christopher", age: 100},
    ]

    const topCars = [
        {manufacturer:'BMW', model:'m5cs', grade: 5/10},
        {manufacturer:'Mercedes', model:'e63s', grade: 2/10},
        {manufacturer:'Audi', model:'rs6', grade: 8/10}
    ]

    return (
        <div>
            <NewComponent users={students}/>
            <TopCars cars={topCars}/>
        </div>
    );
}