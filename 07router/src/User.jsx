import React from 'react'
import { Params, useParams, useLocation } from 'react-router-dom'

const User = () => {
    const {name} = useParams();
    // const {name2} = useParams();
    const location = useLocation();
    // console.log(location);

  return (
    <div>

    <h1>Hello, {name} 😊 </h1>
    <p>My current location is {location.pathname}</p>
    {location.pathname === `/user/utsav` ?
    <button>You got me</button>:null}
     
    </div>
  )
}

export default User
