import { createSlice } from "@reduxjs/toolkit";


const jobSlice = createSlice({
    name : "job",
    initialState : {
        alljobs : [],
        singleJob : null
    },

    reducers :{
        setAlljobs : (state , action) =>{
            state.alljobs = action.payload
        },
        setSingleJob : (state , action) =>{
            state.singleJob = action.payload
        }


    }
});

export const {setAlljobs,setSingleJob} = jobSlice.actions;
export default jobSlice.reducer