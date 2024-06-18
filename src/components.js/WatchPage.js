import React, { useEffect } from 'react';
import { closeMenu } from './utlis/appSclice';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import CommentContainer from './utlis/CommentContainer';

const WatchPage = () => {
  
   const [searchParams] = useSearchParams();
   const dispatch = useDispatch();
   const videoDetails = useSelector((state) => state.app.videoDetails);
   
   useEffect(() => {
     dispatch(closeMenu());
   }, [dispatch]);

   return (
     <div className="flex flex-col items-center bg-gray-100 min-h-screen p-5">
       <div className="w-full max-w-4xl">
         <div className="bg-white shadow-lg rounded-lg overflow-hidden">
           <iframe 
             width="100%" 
             height="500" 
             src={"https://www.youtube.com/embed/" + searchParams.get("v")} 
             title="YouTube video player" 
             frameBorder="0" 
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
             referrerPolicy="strict-origin-when-cross-origin" 
             allowFullScreen
             className="w-full"
           ></iframe>
         </div>
         {videoDetails && (
           <div className="bg-white shadow-lg rounded-lg p-5 mt-5">
             <h1 className="font-bold text-2xl mb-2">{videoDetails.title}</h1>
             <h2 className="text-lg font-medium text-gray-700">{videoDetails.channelTitle}</h2>
           </div>
         )}
         <div className="bg-white shadow-lg rounded-lg p-5 mt-5 w-full">
           <CommentContainer videoId={searchParams.get("v")} />
         </div>
       </div>
     </div>
   );
}

export default WatchPage;
