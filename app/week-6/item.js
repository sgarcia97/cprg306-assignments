import React from "react"

export default function Item({name, quantity, category}){
    return(
        <>
        <ul>
            <li className="text-2xl font-bold">{name}</li>
            <li>Buy {quantity} in {category}</li>
        </ul>
        </>
    )
}