import React, { useEffect, useState } from 'react'
import { Youtube_API } from './utlis/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';

const VideoContainer = () => {
  const [videos, setVideos]=useState([]);
  useEffect(()=>{
   getVideos();
  },[]);
  const getVideos =async () => {
  const data=await fetch(Youtube_API)
  const json=await data.json();
console.log(json.items)
  setVideos(json.items)
  }
  return (
    <div className='flex flex-wrap px-8'>
      {videos.length===0 ? (
        <Shimmer />
      ) : (
        videos.map(video => (
          <Link to={"/Watch?v=" + video.id} key={video.id}>
            <VideoCard info={video} />
          </Link>
        ))
      )}
    </div>
  );
};

export default VideoContainer;