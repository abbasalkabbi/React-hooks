/* eslint-disable react-refresh/only-export-components */

import React from 'react'

// eslint-disable-next-line react-refresh/only-export-components, react/prop-types
 function Button({text,action}) {
  return (
    <button  className="btn btn-primary m-3 p-3" onClick={action}>{text}</button>
  )
}
export default React.memo(Button)