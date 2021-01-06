import { createReducer, on } from '@ngrx/store';

import { PostApiSuccess } from './actions';

export interface RootState {
  selectedPostData: { id: string, title: string, body: string };
}

export const initialState: RootState = {
  selectedPostData: null,
}

export const rootReducer = createReducer(initialState,
  on(PostApiSuccess, (state, action) => ({ ...state, selectedPostData: action.data, error: null })),
)
