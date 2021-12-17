import React from 'react'

function Pizza({details}) {

    return (
        <div className='Pizza Container'>
            <h2> Your Pizza</h2>
            <p>name: {details.name} </p>
            <p>size: {details.size} </p>
            <p>topping1: {details.topping1} </p>
            <p>topping2: {details.topping2} </p>
            <p>topping3: {details.topping3} </p>
            <p>topping4: {details.topping4} </p>
            <p>special: {details.special} </p>

        </div>
    )
}

export default Pizza