import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { Slides } from 'src/app/models/slides';

export const adapter = createEntityAdapter<Slides>({
    selectId: (sensor: Slides) => sensor.id,
    sortComparer: false
  });

export interface SlideState extends EntityState<Slides>{
    selectedId: string | null;
    action: string | null;
    loading: boolean;
    loaded: boolean;
    error: any;
  }
  
  export const initialstate: SlideState = adapter.getInitialState({
    selectedId: null,
    action: null,
    loading: false,
    loaded: false,
    error: null
  });
  
  export const featureKey = 'slides';