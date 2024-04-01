import React, { useState } from 'react'


const Todo = () => {
    const [listItem, setListItem] = useState('@')

    const itemEvent = (e) => {

        setListItem(e.target.value)


    }
  return (
    <div>

    <div className='headingoftodo'>
    <h1> Todo list </h1>
    </div>

    <div className='headingoftodo2'>
        <input type='text' placeholder='Add a item' onChange={itemEvent} />
        <button>+</button>
        <ol className='headingoftodo3'>
            <li>{listItem}</li>
            <li></li>
            <li></li>
        </ol>
    </div>
      
    </div>
  )
}

export default Todo
