"use client"
import { useState } from "react"


export default function NewItem({onAddItem}){

    const [quantity, setQuantity] = useState(1)
    const [name, setName] = useState('')
    const [category, setCategory] = useState('produce')

    const categories = ["Produce","Dairy","Bakery","Meat","Frozen Foods","Canned Goods", "Dry Goods", "Beverages", "Snacks", "Household","Other"]
    const handleSubmit = (e) => {
        e.preventDefault();
        const obj = {
            id:1,
            name:name,
            quantity:quantity,
            category:category
        }
        onAddItem(obj)
        console.log(obj)
        setQuantity(1)
        setName('')
        setCategory('produce')
    }

    const increment = () => {
        setQuantity(quantity + 1)
    }

    const decrement = () => {
        quantity > 0 && setQuantity(quantity - 1)
    }
    return(
        <>
        <form className="form" onSubmit={handleSubmit}>
            <input id="name" type="text" value={name} placeholder="Item name" onChange={e =>setName(e.target.value)} required/>
            <div className="form-section-2">
        <div className="item-wrapper">
        <span>{quantity}</span>
        <div className="button-wrapper">
        <button type="button" className="button" onClick={decrement} disabled={quantity <= 1 && true}>-</button>
            <button type="button" className="button" disabled={quantity >= 20 && true} onClick={increment} >+</button>
            </div>
        </div>
        
        <select id="category" value={category} onChange={e=>setCategory(e.target.value)} required>
            {
                categories.map((cat,i) => {
                    return <option key={i} value={cat.toLowerCase()}>{cat}</option>
                })
            }
        </select>
        </div>
        <button className="form-button" type="submit"  >+</button>
        </form>
        </>

    )

}