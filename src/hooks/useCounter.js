import { useState,useEffect } from 'react'

export function useCounter() {

    const [count, setCount] = useState(() => {

      return parseInt(localStorage.getItem("count")) || 0;
    })

    const favoriteNumber = 10; 


    const dicreaseCount = () => {
        if (count > 0)
            setCount((count) => count - 1)
    }

    const increaseCount = () => {

        setCount((count) => count + 1)
    }

    useEffect(() => {
        localStorage.setItem("count", count);
    }, [count]);

    return { count, increaseCount, dicreaseCount, favoriteNumber}
}

