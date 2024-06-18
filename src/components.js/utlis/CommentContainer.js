import React, { useEffect, useState } from 'react'
import { YOUTUBE_Commnet_API } from './constants';

const CommentContainer = ({videoId}) => {
   const [commnets,setComments]=useState([])
    useEffect(()=>{
        getComment();
    },[videoId])
    const getComment=async()=>{
     const data=await fetch(YOUTUBE_Commnet_API+videoId)
     const json=await data.json()
    //   console.log(json)
     const textDisplay=json.items.slice(0,50).map(item=>item.snippet.topLevelComment.snippet.textOriginal);
    setComments(textDisplay)
    console.log(commnets)
    }
    
  return (
    <div>
        <h3 className='font-bold text-2xl  m-5 p-3'>Comment:</h3>
    {commnets.map((comment , index)=>(
        <p key={index} className='mx-10 p-4  font-serif rounded-xl w-[70%]'>
            {comment}
        </p>
    ))}

    </div>
  )

}
export default CommentContainer


// {videos.map(video=>
//     <Link to={"/Watch?v="+video.id}><VideoCard info={video} key={video.id} />
//     </Link>)}
//     </div>