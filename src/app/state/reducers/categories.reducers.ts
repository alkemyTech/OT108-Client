import { createReducer, on } from "@ngrx/store";
import { Categories } from "src/app/models/categories";
import { loadCategoriesList, retrievedCategoriesList } from "../actions/categories.actions";

export const initialState: ReadonlyArray<Categories> = [];

export const categoriesReducer = createReducer(
  initialState,
  on(loadCategoriesList, (state) => {
    return [...state];
  }),

  on(retrievedCategoriesList, (state, { categories }) => {
    return [...state, ...categories];
  })
);