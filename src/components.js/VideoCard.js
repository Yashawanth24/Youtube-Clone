import React from 'react'
import { useDispatch } from 'react-redux';
import { setVideoDetails } from './utlis/appSclice';

const VideoCard = ({info}) => { 
  console.log(info)
    const{snippet,statistics}=info;
    const{thumbnails,channelTitle,title,publishedAt}=snippet;
 const dispatch=useDispatch();
 const handleClick=()=>{
  dispatch(setVideoDetails({title,channelTitle}))
 };
  return (
    <div className='p-2 m-2 w-80 shadow-md ' onClick={handleClick}>

         <img className='rounded-md' src={thumbnails.medium.url}/>
         <ul>
       <li className='font-bold py-2'>{title}</li>
       <li className='text-lg'>{channelTitle}</li>
      <li>{statistics.viewCount} views</li>
       </ul>
     </div>
  )

}

export default VideoCard