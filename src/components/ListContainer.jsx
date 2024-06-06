import React from 'react'
import "./ListContainer.css"
const ListContainer = (props) => {
  
  return (
    <div className='props'>
      <p className='p-List'> {props.texto} </p>
    </div>
  )
}

export default ListContainer