import { useContext } from "react"
import {UserContext} from "./Context"

export default function User() {
    const {User} = useContext(UserContext)
    return (
        <div>
            <h1 className="text-primary">
                {User}
            </h1>
        </div>
    )
}
