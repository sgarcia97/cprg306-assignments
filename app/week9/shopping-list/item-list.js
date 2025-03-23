'use client'

import Item from "./item"
import { useState } from "react"

const ItemList = ({items, onItemSelect}) => {
    let newitems = [...items];
    let arr= '';
    const [sortBy, setSortBy] = useState("name")

    if(sortBy === "name"){
        newitems = newitems.toSorted((a,b)=>{
            return a.name > b.name ? 1 : -1
        })
    }else if(sortBy === "category"){
        newitems = newitems.toSorted((a,b)=>{
            return a.category> b.category ? 1 : -1
        })
    }else if(sortBy === "gcategory"){
        let temp = newitems.reduce((categories,item)=>{
            categories.push(item.category)
            const newcategories = categories.toSorted((a,b)=>{ return a > b ? 1 : -1  })
            return newcategories
    },[])
    let ar = [...new Set(temp)]
    arr = [...ar]
    }

    const categoryItems = (category) => {
        let ar = newitems.filter((item) => 
            item.category === category
        )
        return ar
    }
   
    return (
        <>
            <div className="filters">
                <button className={sortBy == "name" ? `button1 active`: `button1`} title="name" onClick={()=>setSortBy('name')}>Name</button>
                <button title="category" className={sortBy == "category" ? `button1 active`: `button1`} onClick={()=>setSortBy('category')}>Category</button>
                <button title="gcategory" className={sortBy == "gcategory" ? `button1 active`: `button1`} onClick={()=>setSortBy('gcategory')}>Grouped Category</button>
            </div>
        {
            sortBy != "gcategory" ?
          
            newitems.map((item,i) => {
                return <Item key={i} name={item.name} quantity={item.quantity} category={item.category} onSelect={onItemSelect(()=>item.name)}/>
            })
            : 
            arr.map((item,ii) => {
           
                let ca = categoryItems(item);
                    let categoryItem;
                    categoryItem = ca.map((t,i)=>{
                        return <Item key={i} name={t.name} quantity={t.quantity} category={t.category} onSelect={onItemSelect(()=>t.name)}/>
                    })
             return <div key={ii} className="grid"><h2 className="h2" >{item}</h2>{categoryItem}</div>   
            })
            
        }
        </>
    )
}

export default ItemList;