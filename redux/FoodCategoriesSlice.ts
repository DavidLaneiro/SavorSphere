import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FoodCategoriesState } from "../models/FoodCategoriesState";
import { FoodCategory } from "../models/FoodCategory";

const foodCategoriesSlice = createSlice({
  name: "foodCategories",
  initialState: {
    foodCategoriesList: [],
  } as FoodCategoriesState,
  reducers: {
    setFoodCategories: (state, action: PayloadAction<FoodCategory[]>) => {
      state.foodCategoriesList = action.payload;
    }
  },
});

export const setCategories = foodCategoriesSlice.actions.setFoodCategories;
export default foodCategoriesSlice.reducer;