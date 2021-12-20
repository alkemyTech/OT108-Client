import { createAction, props } from "@ngrx/store";
import { Categories } from "src/app/models/categories";

export const loadCategoriesList = createAction("[Categories List/API] Load Catergories");

export const retrievedCategoriesList = createAction(
  "[Categories List/API] Retrieve Categories Success",
  props<{ categories: ReadonlyArray<Categories> }>()
);