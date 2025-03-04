'use client'

import Items from "./items.json"
import Item from "./item"
import { useState } from "react"

const ItemList = () => {
    const [sortBy, setSortBy] = useState("")
    const [arr, setArr] =  useState(Items)
    const [catArr, setCatArr] = useState([])
    const [newArr, setNewArr] = useState([])

    const handleClick = (e) => {
        setSortBy(e.target.title)
        if(e.target.title === "gcategory"){
            const temp = Items.reduce((categories,item)=>{
                    categories.push(item.category)
                    categories.sort((a,b)=>{ return (a > b) ? 1 : -1  })
                    return categories
            },[])
            const ar = [...new Set(temp)]
            setCatArr(ar)
        }else{
            const ar = Items.sort((a,b)=>{
                if(e.target.title === "name"){
                    return a.name > b.name ? 1 : -1
                }else if(e.target.title === "category"){
                    return a.category > b.category ? 1 : -1
                }

        })
        setArr(ar)
    }
        
    }

    const categoryItems = (category) => {
        const cat = arr.filter((item) => 
            item.category === category
        )
        return cat
    }
   

    return (
        <>
        <div className="filters">
            <button className={sortBy == "name" ? `button1 active`: `button1`} title="name" onClick={handleClick}>Name</button>
            <button title="category" className={sortBy == "category" ? `button1 active`: `button1`} onClick={handleClick}>Category</button>
            <button title="gcategory" className={sortBy == "gcategory" ? `button1 active`: `button1`} onClick={handleClick}>Grouped Category</button>
            </div>
        {
          sortBy != "gcategory" ?
            arr.map((item,i) => {
                return <Item key={i} name={item.name} quantity={item.quantity} category={item.category}/>
            })
            : 
        
            catArr.map((item,ii) => {
           
                const na = categoryItems(item);
                    let test;
                    test = na.map((t,i)=>{
                        return <Item key={i} name={t.name} quantity={t.quantity} category={t.category}/>
                    })
              
             return <div key={ii}><h2 className="h2" >{item}</h2>{test}</div>
                    
                
                
            })
            
        }
        </>
    )
}

export default ItemList;