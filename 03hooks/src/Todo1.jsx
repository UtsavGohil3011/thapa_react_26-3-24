import React, { useState } from 'react'


const Todo1 = () => {
    
    const [listItem, setListItem] = useState('')
    const [Items, setItems] = useState([]);
  


    const itemEvent = (e) => {
        setListItem(e.target.value)
    }


    const addItem = () => {
        // Check if listItem is not empty before adding it to the array
        if (listItem !== '') {
            setItems((prevItems) => {
                return [...prevItems, listItem];
            });
        }
        // Clear the input field regardless of whether the item was added or not
        setListItem('');
    };


    const delItem = (index) => {
        setItems((prevItems) => {
            return prevItems.filter((_, i) => i !== index);
        });
    };

  return (
    <div>

    <div className='headingoftodo'>
    <h1> Todo 2 list </h1> 
    </div>

    <div className='headingoftodo2'>
        <input type='text' placeholder='Add a item' value={listItem} onChange={itemEvent} />
        <button onClick={addItem}>+</button>
        <ol className='headingoftodo3'>
            {Items.map((val,index) => {
                return <div className='under'>  <li>{val}</li>  <button onClick={() => delItem(index)}>❌</button> </div>
            })}            
        </ol>
    </div>
      
    </div>
  )
}
export default Todo1
