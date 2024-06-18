import React from 'react';
import { useDispatch } from 'react-redux';
import { setVideoDetails } from './utlis/appSclice';

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { thumbnails, channelTitle, title } = snippet;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setVideoDetails({ title, channelTitle }));
  };

  return (
    <div className='p-4 mx-2 my-2 max-w-xs h-96 bg-white rounded-lg shadow-md cursor-pointer' onClick={handleClick}>
      <img className='rounded-t-lg' src={thumbnails.medium.url} alt={title} />
      <div className='p-4'>
        <h3 className='text-lg font-medium leading-tight py-2'>{title}</h3>
        <p className='text-gray-700 py-1'>{channelTitle}</p>
        <p className='text-gray-600 py-'>{statistics.viewCount} views</p>
      </div>
    </div>
  );
};

export default VideoCard;
