import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { useEffect } from 'react';


const Add = () => {
    const [num,setNum] = useState(0)
    const [num2,setNum2] = useState(0)

    const addVal = () => {
        setNum(num+1)
    }
    const addVal2 = () => {
        setNum2(num2+1)
    }

    useEffect(()=>{
        if (num>0) {
            document.title=   `you clicked (${num})  (${num2})  `
        }
        else{
            document.title=   `React APP `
        }
        
    },[num,num2])

    // Three value pass [] , [num], [num2] and ckeck 



  return (
    <div>

     <Button onClick={addVal}  variant="outlined"> Add {num} </Button>
     <Button onClick={addVal2}  variant="outlined"> Add {num2} </Button>
  
    </div>
  )
}

export default Add
