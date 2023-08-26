/* eslint-disable react-refresh/only-export-components */
import React from "react"

// eslint-disable-next-line react-refresh/only-export-components, react/prop-types
function Salary({salary}) {
  return (
    <h1> Salary :{salary}</h1>
  )
}

export default React.memo(Salary)
