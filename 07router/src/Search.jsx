import React, { useState } from 'react'

const Search = () => {

    const [img, setImg] = useState('');

    const inputEvent = (e) => {

        const re = e.target.value
        setImg(re)

    }

    if (img === '') {

        return(
            <div className='d-flex flex-column justify-content-center align-items-center p-5'>
                <h1>Filter</h1><br/>
                <input  type='text' placeholder='Search Anything...' value={img} onChange={inputEvent}  /><br/>
                <h1> Write Nything to search the image </h1>
            </div>

        )         
    }



    const randomImg = `https://source.unsplash.com/random/620x480/?${img}`

  

  return (
    <div className='d-flex flex-column justify-content-center align-items-center p-5'>

    <h1>Filter</h1><br/>
    <input  type='text' placeholder='Search Anything...' value={img} onChange={inputEvent}  /><br/>

    <img src={randomImg} alt='not found image'/>

    
      
    </div>
  )
}

export default Search
