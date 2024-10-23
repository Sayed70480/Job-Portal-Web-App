import { createSlice } from "@reduxjs/toolkit";


const jobSlice = createSlice({
    name : "job",
    initialState : {
        alljobs : [],
        singleJob : null,
        allAdminJobs : null,
        searchJobByText : "",
    },

    reducers :{
        setAlljobs : (state , action) =>{
            state.alljobs = action.payload
        },
        setSingleJob : (state , action) =>{
            state.singleJob = action.payload
        },
        setAllAdminJobs : (state ,action)=>{
            state.allAdminJobs = action.payload
        },
        setSearchJobByText : (state , action) =>{
            state.searchJobByText = action.payload
        } 



    }
});

export const {setAlljobs,setSingleJob,setAllAdminJobs,setSearchJobByText} = jobSlice.actions;
export default jobSlice.reducer