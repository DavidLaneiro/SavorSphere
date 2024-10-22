import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FoodCategoriesState } from "../models/FoodCategoriesState";
import { FoodCategory } from "../models/FoodCategory";

const foodCategoriesSlice = createSlice({
  name: "foodCategories",
  initialState: {
    foodCategories: [],
  } as FoodCategoriesState,
  reducers: {
    setCategories: (state, action: PayloadAction<FoodCategory[]>) => {
      state.foodCategories = action.payload;
    }
  },
});

export const setCategories = foodCategoriesSlice.actions.setCategories;
export default foodCategoriesSlice.reducer;