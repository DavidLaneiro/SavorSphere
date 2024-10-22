import { configureStore } from "@reduxjs/toolkit";
import foodCategoriesReducer from "./FoodCategoriesSlice"

export const store = configureStore({
    reducer: {
        foodCategories : foodCategoriesReducer
    },
  });
  

  export type RootState = ReturnType<typeof store.getState>;
