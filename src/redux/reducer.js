import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  navStatus:false
};

export const counterSlice = createSlice({
  name: 'navbarStatus',
  initialState:initialState,
  reducers: {
    navbarStatus: (state,action) => {
    //    console.log('coming');
      state.navStatus = !state.navStatus;
    }
   
  }
})

// Action creators are generated for each case reducer function
export const { navbarStatus } = counterSlice.actions;

export default counterSlice.reducer;