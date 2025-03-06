"use client"
import React from "react"
import itemsData from "./items.json"
import ItemList from "./item-list"
import NewItem from "./new-item"
import { useState } from "react"

export default function Page(){
    const [items, setItems] = useState(itemsData)

    const handleAddItem = (obj) => { 
        items.push(obj)
        console.log(obj)
        console.log(items)
    }

    return(
        <main className="main">
            <h2 className="text-3xl font-medium">Shopping List</h2>
            <NewItem onAddItem={handleAddItem}/>
            <p></p>
            <ItemList items={items}/>
        </main>
    )
}