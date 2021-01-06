import { createAction, props } from '@ngrx/store';

const API_GET_POST_DATA = '[Random] Mock API Get My Data';
// const API_GET_MOCK_DATA_WITH_ERROR = '[Random] Mock API Get My Data With Error';
const API_ERROR_ACTION = '[Random] Mock API Error';
const API_SUCCESS_ACTION = '[Random] Mock API Success';

export const ApiGetPostData = createAction(API_GET_POST_DATA, props<any>());
export const PostApiError = createAction(API_ERROR_ACTION, props<{ error: any }>());
export const PostApiSuccess = createAction(API_SUCCESS_ACTION, props<{ data: any }>());
