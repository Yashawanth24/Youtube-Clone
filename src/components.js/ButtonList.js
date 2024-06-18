import React from 'react'
import Button from './Button'
const List = ["All", "JavaScript", "Cooking", "Cricket", "News", "Live", "Songs", "Comedy", "Java", "Cars", "Podcasts", "Recently"];
const ButtonList = () => {
  return(
    <div className="flex">
      {List.map((item, index)=>(
        <Button key={index} name={item}/>
      ))}
    </div>
  )
}

export default ButtonList