import { createSlice } from "@reduxjs/toolkit";

const appSlice=createSlice({
    name:"app",
    initialState:{
        isMenuOpen:true,
        videoDetails:{
            title:'',
            channelTitle:'',
        },
    },
    reducers:{
        toggleMenu(state,action){
            state.isMenuOpen=!state.isMenuOpen;
    },
    closeMenu(state){
        state.isMenuOpen=false;
    },
    setVideoDetails(state,action){
        state.videoDetails=action.payload;
    }
    },
});
export const {toggleMenu,closeMenu, setVideoDetails}=appSlice.actions
export default appSlice.reducer;