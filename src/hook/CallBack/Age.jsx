/* eslint-disable react-refresh/only-export-components */

import React from "react"

// eslint-disable-next-line react-refresh/only-export-components, react/prop-types
 function Age({age}) {
    return (
        <h1>Age :{age}</h1>
    )
}
export default React.memo(Age)