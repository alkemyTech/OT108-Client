import { Action,createReducer, on } from "@ngrx/store";
import * as slideActions from './slide.actions';
import * as slideState from './slide.state';

const slideReducer = createReducer(
    slideState.initialstate,
    on(slideActions.getAllSlides,(state) =>({
        ...state,
        action: slideActions.type.GET_ALL_SLIDES,
        loading:true,
        error:null
    })),
    on(slideActions.getAllSlidesSuccess,(state,{ slide }) =>{
        return slideState.adapter.addOne(slide, {
            ...state,   
      loading: false,
        })
       
    }),
    on(slideActions.getAllSlidesFail, (state, { error }) => ({
        ...state,
        error: {...error},
        loading: false,
      })),
    
    )

    export function reducer(state: slideState.SlideState, action: Action) {
        return slideReducer(state, action);
      }    