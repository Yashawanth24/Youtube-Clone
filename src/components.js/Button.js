import React from 'react'

const Button = ({name}) => {
   
  return (
    <div>
    <button className='px-6 py-1 rounded-lg m-2 bg-gray-200'>{name}
  </button>
    </div>

  )
}

export default Button;