import { useState } from "react"


export default function State() {
    const [count,SetCount]=useState(0);
    
    return (
        <div>
            <h1>
                {count}
            </h1>
            <button onClick={()=>SetCount(prev =>prev + 1)}>+</button>
            <button onClick={()=>SetCount(prev =>prev - 1)}>-</button>
        </div>
    )
}
