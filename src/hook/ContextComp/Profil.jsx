import { useState } from "react"
import {UserContext} from "./Context"
import Card from "./Card"

export default function Profil() {
    const [User,SetUser]=useState("Abbas")
    const [NewUser,SetNewUser]=useState("")
    const UserValue={
        User,
        SetUser,
        NewUser,
        SetNewUser
    }
    return (
        <div className="container text-center">
            <h1>Use Context </h1>
            <UserContext.Provider  value={UserValue}>
                <Card/>
            </UserContext.Provider>
        </div>
    )
}
