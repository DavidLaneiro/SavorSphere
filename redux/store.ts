import { configureStore } from "@reduxjs/toolkit";
import foodCategoriesSliceReducer from "./FoodCategoriesSlice"

export const store = configureStore({
    reducer: {
        foodCategoriesSlice : foodCategoriesSliceReducer
    },
  });
  

export type RootState = ReturnType<typeof store.getState>;
