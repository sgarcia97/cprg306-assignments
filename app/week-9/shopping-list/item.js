import React from "react"

export default function Item({name, quantity, category, onSelect}){
    return(
        <>
        <ul onClick={()=>onSelect(name)}>
            <li className="text-2xl font-bold">{name}</li>
            <li>Buy {quantity} in {category}</li>
        </ul>
        </>
    )
}