import { Action, createAction,props } from "@ngrx/store";
import { Slides } from "src/app/models/slides";

export enum type {
    GET_ALL_SLIDES = "[Slides] Get All",
    GET_ALL_SLIDES_FAIL    = '[Slides] Get All Fail',
    GET_ALL_SLIDES_SUCCESS = '[Slides] Get All Success',
}

export const getAllSlides = createAction(type.GET_ALL_SLIDES);
export const getAllSlidesFail    = createAction(type.GET_ALL_SLIDES_FAIL, props<{ error: any }>());
export const getAllSlidesSuccess = createAction('[Slides] Get All Success', props<{ slide: ReadonlyArray<Slides> }>());