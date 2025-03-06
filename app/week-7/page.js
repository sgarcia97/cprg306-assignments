import React from "react"
import ItemList from "./item-list"
import NewItem from "./new-item"

export default function Page(){
    return(
        <main className="main">
            <h2 className="text-3xl font-medium">Shopping List</h2>
            <NewItem/>
            <p></p>
            <ItemList/>
        </main>
    )
}