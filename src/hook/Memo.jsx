import { useMemo, useState } from "react"

export default function Memo() {
    const [CounterOne,SetCounterOne]=useState(0)
    const [CounterTwo,SetCountertwo]=useState(0)
    
    const IsEven=useMemo(()=>{
        let i =0
        while( i <2000000000) i++
        return CounterOne % 2 === 0
    },[CounterOne])
    return (
        <div className="container text-center">
            <h1>Use Memo</h1>
            <button  className="btn btn-primary m-3 p-3" onClick={()=>SetCounterOne(prev =>prev + 1)}>{CounterOne } is { IsEven ?"Even":'Odd'}</button>
            <button  className="btn btn-danger m-3 p-3" onClick={()=>SetCountertwo(prev =>prev + 1)}>{CounterTwo}</button>
        </div>
    )
}
