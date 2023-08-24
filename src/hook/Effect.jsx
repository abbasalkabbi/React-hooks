import  { useEffect, useState } from 'react'

export default function Effect() {
    const [users,SetUser]=useState([])
    const [input,SetInput]=useState('')
    const [filteruser,SetFilter]=useState([])
    // get user from api
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(res => SetUser(res))
        return (()=>false)
    },[])
    // end
    useEffect(()=>SetFilter(users),[users])
    useEffect(()=>{
        const filter=users.filter(user=>user.name.toLowerCase().includes(input))
        SetFilter(filter)
    },[input])
    
    return (
        <div className='container text-center'>
            <h1>Use Effect </h1>
            <div className=" bg-secondary input-group mb-3">
                <span className=" bg-dark-subtl input-group-text" id="inputGroup-sizing-default">search</span>
                <input type="search" onInput={(e)=>SetInput(e.target.value.toLowerCase())} className="form-control bg-secondary" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
            </div>
            <div className="card " >
                <ul className="  list-group list-group-flush">
                    {filteruser.map(user => <li key={user.id} className=" bg-dark-subtle list-group-item">{user.name}</li> )}
                </ul>
                </div>
        
        </div>
    )
}
