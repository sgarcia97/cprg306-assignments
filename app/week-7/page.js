import React from "react"
import ItemList from "./item-list"

export default function Page(){
    return(
        <main className="main">
            <h2 className="text-3xl font-medium">Shopping List</h2>
            <ItemList/>
        </main>
    )
}