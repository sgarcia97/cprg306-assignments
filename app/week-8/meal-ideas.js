"use client"

export const MealIdea = ({ingredient}) => {
    const [meals, setMeals] = useState([])
    useEffect(()=>{
        const loadMealIdeas = async () => {
            const onlineMeals = await fetchMealIdeas()
            setMeals(onlineMeals)
        }
        loadMealIdeas()
    },[ingredient])
    
}

const fetchMealIdeas = async () => {
    try{
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken');
    const data = await response.json();
    return data.meals

    }catch(error){
        console.log(error)
    }

}