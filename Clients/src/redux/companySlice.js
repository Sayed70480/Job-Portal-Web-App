import { createSlice } from "@reduxjs/toolkit";

const companySlice = createSlice({
  name: "company",
  initialState: {
    singleCompany: null,
    allCompanies : null,
    searchCompanybyText : "",
  },
  reducers: {
    setSingleCompany: (state, action) => {
      state.singleCompany = action.payload;
    },
    setAllCompanies : (state ,action) =>{
      state.allCompanies = action.payload
    },
    setSearchCompanybyText : (state , action) =>{
      state.searchCompanybyText = action.payload
    }
  },
});

export const { setSingleCompany ,setAllCompanies,setSearchCompanybyText} = companySlice.actions;
export default companySlice.reducer;
