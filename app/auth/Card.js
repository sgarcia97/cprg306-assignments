
import { useContext } from "react"

export const Card = ({children}) => {

    return(
        <>
        
        <div className="card">
            {children}
            
        </div>
        
        </>
    )
}

export const Comp3 = () => {
    const name = useContext(ourContext)
    return(
        <p>{name}</p>
    )
}


