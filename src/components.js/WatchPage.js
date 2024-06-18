import React, { useEffect } from 'react'
import { closeMenu } from './utlis/appSclice'
import { useDispatch, useSelector } from 'react-redux'
import {  useSearchParams } from 'react-router-dom'
import CommentContainer from './utlis/CommentContainer'

const WatchPage = () => {
  
   const [searchparms]=useSearchParams();
    const dispatch=useDispatch();
    const videoDetails=useSelector((state)=>state.app.videoDetails)
    console.log(videoDetails.title)
    useEffect(()=>{
   dispatch(closeMenu())
    },[dispatch])
  return (
    <div className='flex flex-col'>
    <div className='px-5 '><iframe width="1000" height="500" src={"https://www.youtube.com/embed/"+searchparms.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe></div>
    {videoDetails && (
        <div className='px-5'>
      
          <h1 className='font-bold text-xl'>{videoDetails.title}</h1>
          <h2 className='text-lg font-bold font-serif py-4 mx-8'>{videoDetails.channelTitle}</h2>
        </div>
      )}

    <CommentContainer videoId={searchparms.get("v")}/>
    </div>
  )
}

export default WatchPage