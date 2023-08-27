/* eslint-disable react-refresh/only-export-components */

import { useContext } from "react"
import {UserContext} from "./Context"
// eslint-disable-next-line react-refresh/only-export-components, react/prop-types
export default function Button() {
  const {SetUser,NewUser}=useContext(UserContext)
  return (
    <button  className="btn btn-primary m-3 p-3" onClick={()=>SetUser(NewUser)}>UpDate</button>
  )
}
