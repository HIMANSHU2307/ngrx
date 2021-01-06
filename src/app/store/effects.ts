import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { ApiGetPostData, PostApiSuccess, PostApiError } from './actions';
import { switchMap, catchError, map, mergeMap, tap, concatMap, exhaustMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { PostService } from '../service/post.service';

@Injectable()
export class RootEffects {

  constructor(
    private actions: Actions,
    private postService: PostService){}

  getPostDataEffect$ = createEffect(
    () => this.actions.pipe(
      ofType(ApiGetPostData),
      mergeMap((action) => {
        return this.postService.getPostData().pipe(
          map(res => PostApiSuccess({ data: res })),
          catchError(error => of(PostApiError({ error })))
        )
      }
      )
    )
  )

}
