import { useRef } from "react"


export default function Ref() {
    const last=useRef()
    const first=useRef()
    
    const GoToButtom=()=>{
        last.current.scrollIntoView({
            'behavior':'smooth'
        })
    }
    const GoToTop=()=>{
        first.current.scrollIntoView({
            'behavior':'smooth'
        })
    }
    return (
        <div className="ref container text-center">
            <h1>Use Ref </h1>
            <button  ref={first} className="btn btn-primary m-3" onClick={GoToButtom}>Go to Buttom</button>
            <div className="bg-primary"></div>
            <div className="bg-danger"></div>
            <div className="bg-info"></div>
            <div  ref={last} className="bg-warning"></div>
            <button  className="btn btn-primary m-3" onClick={GoToTop}>Go to up</button>
        </div>
    )
}
