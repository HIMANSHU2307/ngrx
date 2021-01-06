import { createAction, props } from '@ngrx/store';

const API_GET_POST_DATA = '[PostList] Post API Get My Data';
const API_ERROR_ACTION = '[PostList] Post API Error';
const API_SUCCESS_ACTION = '[PostList] Post API Success';

export const ApiGetPostData = createAction(API_GET_POST_DATA, props<any>());
export const PostApiError = createAction(API_ERROR_ACTION, props<{ error: any }>());
export const PostApiSuccess = createAction(API_SUCCESS_ACTION, props<{ data: any }>());
