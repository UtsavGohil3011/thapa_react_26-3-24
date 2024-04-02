import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const Pokemon = () => {
    const [num,setNum] = useState(1);
  return (
    <div>

    <h1 className='text-center mt-5 mb-5'>Pokemon API</h1> 
    <h2> You select {num} value </h2>

    <select className='mt-5 mb-5' value={num} onChange={(e)=>{setNum(e.target.value)}}>
        <option value='1'>1</option>
        <option value='33'>33</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
        <option value='5'> 5</option>
    </select>
      
    </div>
  )
}

export default Pokemon
