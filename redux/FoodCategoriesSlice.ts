import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FoodCategoriesState } from "../models/FoodCategoriesState";
import { FoodCategory } from "../models/FoodCategory";

const foodCategoriesSlice = createSlice({
  name: "foodCategories",
  initialState: {
    foodCategoriesList: [],
    foodCategoriesFilteredList: [],
  } as FoodCategoriesState,
  reducers: {
    setFoodCategories: (state, action: PayloadAction<FoodCategory[]>) => {
      state.foodCategoriesList = action.payload;
      state.foodCategoriesFilteredList = action.payload;
    },
    setFilteredFoodCategories: (state, action: PayloadAction<FoodCategory[]>) => {
      state.foodCategoriesFilteredList = action.payload;
    }
  },
});

export const {setFoodCategories, setFilteredFoodCategories} = foodCategoriesSlice.actions;
export default foodCategoriesSlice.reducer;