import { PostApiSuccess, ApiGetPostData } from './actions';
import { RootEffects } from './effects';
import { rootReducer, initialState } from './reducer';

export const ngrxRoot = {
  PostApiSuccess, ApiGetPostData, rootReducer,
  RootEffects, initialState
};

