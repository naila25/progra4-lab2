import { useCounter } from "../hooks/useCounter"


export default function Counter() {
    const { count, increaseCount, dicreaseCount, favoriteNumber } = useCounter();
    return (

        
        <div className="card">
            <h1>{count}</h1>

            {count === favoriteNumber && (
                <p className="favorite-message">
                    ¡Has alcanzado tu número favorito!
                </p>
            )}
            <button onClick={increaseCount}>
                ➕
            </button>

            <button onClick={dicreaseCount}>
                ➖
            </button>


        </div>

    )
}