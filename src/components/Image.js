import React from 'react'

function Image({url,title}) {
  return (
    // list the image 
    <li>
        <img src={url}  alt={title}/>
    </li>
  )
}
export default Image