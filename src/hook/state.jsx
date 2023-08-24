import { useState } from "react"


export default function State() {
    const [count,SetCount]=useState(0);
    
    
    return (
        <div className="container text-center"> 
            <h1 className="fs-1">useState</h1>
            <h1>
                {count}
            </h1>
            <button  className="btn btn-primary m-3" onClick={()=>SetCount(prev =>prev + 1)}>+</button>
            <button  className="btn btn-danger m-3" onClick={()=>SetCount(prev =>prev - 1)}>-</button>
        </div>
    )
}
