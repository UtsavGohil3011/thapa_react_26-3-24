import React from 'react'
import { Params, useParams, useLocation } from 'react-router-dom'

const User = () => {
    const {name} = useParams();
    const {name2} = useParams();
    const location = useLocation();
  return (
    <div>

    <h1>Hello, {name} {name2}😊 </h1>
      
    </div>
  )
}

export default User
