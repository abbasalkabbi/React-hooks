import { useContext } from "react"
import {UserContext} from "./Context"

export default function Input() {
    const {SetNewUser,User}=useContext(UserContext)
    return (
        <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">New Name</span>
            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
                onChange={(e)=>{
                    e.target.value.length >=3?  SetNewUser(e.target.value):SetNewUser(User)
               }
                }
                />
        </div>
    )
}
