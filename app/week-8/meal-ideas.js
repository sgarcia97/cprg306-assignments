"use client"
import { useState, useEffect } from "react"

export const MealIdeas = ({ingredient}) => {
    const [meals, setMeals] = useState([])
    useEffect(()=>{
        const loadMealIdeas = async () => {
            const onlineMeals = await fetchMealIdeas(ingredient)
            setMeals(onlineMeals)
        }
        loadMealIdeas()
    },[ingredient])
    return(
        <div className="floatop">
            <h2>Meal Ideas for - {ingredient}</h2>
            <div className="main-sub">
              {(meals == null) ? <div>No ingredients found.</div>: meals.map((m,i)=>{
                return <ul key={i}>{m.strMeal}</ul>
              })}
            </div>
        </div>
    )
    
}

const fetchMealIdeas = async (ingredient) => {
    
    try{
    const url = "https://www.themealdb.com/api/json/v1/1/filter.php?i="+ingredient
    const response = await fetch(url);
    const data = await response.json();
    return data.meals
    }catch(error){
        console.log(error)
    }

}