"use client"
import { useState } from "react"


export default function NewItem(){

    const [quantity, setQuantity] = useState(1)

    const increment = () => {
        setQuantity(quantity + 1)
    }

    const decrement = () => {
        quantity > 0 && setQuantity(quantity - 1)
    }
    return(
        <>
        <div className="item-wrapper">
        <span>{quantity}</span>
        <div className="button-wrapper">
        <button className="button" onClick={decrement} disabled={quantity <= 1 && true}>-</button>
            <button className="button" disabled={quantity >= 20 && true} onClick={increment} >+</button>
            </div>
        </div>
        </>

    )

}