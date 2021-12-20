import { createSelector, createFeatureSelector } from "@ngrx/store";
import { Categories } from "src/app/models/categories";

export const selectCategories = createFeatureSelector<ReadonlyArray<Categories>>("categories");