"use client"
import React from "react"
import itemsData from "./items.json"
import ItemList from "./item-list"
import NewItem from "./new-item"
import { MealIdeas } from "./meal-ideas"
import { useState } from "react"

export default function Page(){
    const [items, setItems] = useState(itemsData)
    const [selectedItemname, setSelectedItemname] = useState("bananas")
    const handleAddItem = (obj) => { 
        const newitems = [...items]
        newitems.push(obj)
        setItems(newitems)
    }

    const handleItemSelect = (item) => {
        const wordsToRemove = ["breasts", "L", "g", "sauce", "kg", "pack", "dozen"];
        const text = item;
        const wordRegex = new RegExp(`\\b(${wordsToRemove.join("|")})\\b|,`, "gi");
        const emojiRegex = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF]|[\d])/g;

        const result = text
        .replace(wordRegex, "")      // Remove words
        .replace(emojiRegex, "")     // Remove emojis
        .replace(/\s+/g, " ")        // Collapse spaces
        .trim();
        setSelectedItemname(result)
    }

    return(
        <>
        <main className="main split">
            <div className="main-sub">
            <h2 className="text-3xl font-medium">Shopping List</h2>
            <NewItem onAddItem={handleAddItem}/>
            <p></p>
            <ItemList items={items} onItemSelect={()=>handleItemSelect}/>
            </div>
            <MealIdeas ingredient={selectedItemname}/>
        </main>
   
        </>
    )
}