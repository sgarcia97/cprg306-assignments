"use client"
import { useUserAuth } from "../_utils/auth-context";
import { redirect } from 'next/navigation';
import React from "react"
import { getItems, addItem } from "../_services/shopping-list-service"
import ItemList from "./item-list"
import NewItem from "./new-item"
import { MealIdeas } from "./meal-ideas"
import { useState, useEffect } from "react"
import Link from "next/link";


export default function Page(){
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    const [items, setItems] = useState([])
    const [selectedItemname, setSelectedItemname] = useState("bananas")

   

    useEffect(()=>{
        const loadItems = async () => {
            const it = await getItems(user.uid)
            setItems(it)
        }

        user && loadItems()
    },[user])

    const handleAddItem = async (obj) => { 
        const add = await addItem(user.uid, obj)
        const newitems = [...items]
        newitems.push(obj)
        setItems(newitems)
    }

    const logOut = async () => {
        firebaseSignOut()
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
        {
            user ?
        (
        <main className="main split">
            <div className="main-sub">
            <h2 className="text-3xl font-medium">Shopping List <div style={{fontSize:'1rem'}}>{user.uid}</div><button onClick={logOut} className="button1" style={{fontSize:14}}>Logout</button></h2>
            <NewItem onAddItem={handleAddItem}/>
            <p></p>
            { items.length > 0 &&
            <ItemList items={items} onItemSelect={()=>handleItemSelect}/>
                }
            </div>
            <MealIdeas ingredient={selectedItemname}/>
        </main>
        )
        : 
        redirect('/week-10')
        (
            <div style={{textAlign:"center", padding:10}}>You are not authorized to view this page! <Link href="http://localhost:3001">Go to home page</Link></div>
        )
    }
        </>
    )
}