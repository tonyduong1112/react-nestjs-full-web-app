import { IHomaPageState } from "./type";
import { createSlice } from "@reduxjs/toolkit";

const initialState: IHomaPageState = {
  topCars: [],
};

export const homePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    setTopCars: (state, action) => {
      state.topCars = action.payload;
    },
  },
});

export const { setTopCars } = homePageSlice.actions;
export default homePageSlice.reducer;
