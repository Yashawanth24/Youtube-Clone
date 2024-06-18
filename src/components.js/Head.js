import React, { useEffect, useState } from "react";
import{useDispatch} from "react-redux"
import { toggleMenu } from "./utlis/appSclice";
import { Link } from "react-router-dom";
import { YOUTUBE_Search_API } from "./utlis/constants";
const Head=()=>{

    const [searchText,  setSearchText]=useState("");
    const [suggestion, setsuggestion]=useState([]);
    const [showsuggestion,setShowsuggestion]=useState(true)
    
   

    useEffect(()=>{
       const timer= setTimeout(()=>getSuggestion(),200);
       return()=>{
        clearTimeout(timer)
       }
    },[searchText]);

const getSuggestion=async()=>{
   const data = await fetch(YOUTUBE_Search_API+searchText)
   const json= await data.json();
   console.log(json[1]);
   setsuggestion(json[1])
}
useEffect(() => {
    const handleScroll = () => {
      setShowsuggestion(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

    const dispatch=useDispatch();
 const toggleMenuHandler=()=>{
    dispatch(toggleMenu());
 }
 return (
    <div className="grid grid-flow-col p-6 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-9 cursor-pointer"
          alt=""
          src="https://cdn4.iconfinder.com/data/icons/navigation-40/24/hamburger-menu-512.png"
        />

        <img
          className="h-7 mx-3 cursor-pointer"
          alt="Icon"
          src="https://tse4.mm.bing.net/th?id=OIP.xxNZm92rz6ZHHChoF2zZSAHaBp&pid=Api&P=0&h=180"
        />
      </div>
      <div className="col-span-10 relative">
        <div className="px-20 flex items-center">
          <input
            className="w-1/2 h-8 border border-gray-500 rounded-l-2xl"
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onFocus={()=>setShowsuggestion(true)}
            onBlur={()=>setShowsuggestion(false)}
          />
          <button className="border border-gray-500 h-8 px-3 rounded-r-2xl bg-gray-100" >
            🔍
          </button>
        </div>
       
       { showsuggestion && (<div className="fixed bg-white w-[29rem] mx-20 px-5 py-1 my-1 border border-gray-300 mt-1 shadow-lg rounded-lg">
            <ul>
                {suggestion.map(s=> <li key={s} className="py-1 hover:bg-gray-100">{s} </li>)}
            </ul>
          </div>
      )}
      </div>
      <div className="col-span-1 flex justify-end items-center">
        <img
          className="h-8"
          src="https://tse3.mm.bing.net/th?id=OIP.w2McZSq-EYWxh02iSvC3xwHaHa&pid=Api&P=0&h=180"
        />
      </div>
    </div>
  );
}
export default Head;