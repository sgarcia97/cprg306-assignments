'use client'
import { Card } from './Card'
import { createContext, useContext, useState } from 'react'

const ourContext = createContext();

const useCounter = () => {
    const [count, setCount] = useState(0)


    const increment = () => {
        setCount((prev)=>prev+1)
    }

    return [count, increment];
}

const Page = () => {
    const [name, setName] = useState("Sam")
    const [count, increment] = useCounter(0)
    return(
        <div className="main">
            <ourContext.Provider value={name}>
                 <Card>
                    <p>Test</p>
                </Card>
            </ourContext.Provider>
        </div>
    )
}

export default Page