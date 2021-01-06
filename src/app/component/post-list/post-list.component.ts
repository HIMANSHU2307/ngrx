import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PostService } from 'src/app/service/post.service';
import { ngrxRoot } from 'src/app/store';
import { RootState } from 'src/app/store/reducer';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  postList = [];
  filterdPost: any[];
  postListData: Observable<string>;

  constructor(
    private store: Store<{ rootState: RootState }>
  ) {}

  ngOnInit(): void {
    this.store.dispatch(ngrxRoot.ApiGetPostData(''));
    this.store.subscribe(post => {
        this.postList = JSON.parse(JSON.stringify(post.rootState.selectedPostData));
        this.filterdPost = this.postList;
      });
  }

  handleFilter(userID) {
    if(userID.target.value) {
      this.filterdPost =  this.postList.filter(post =>
        post.id == userID.target.value
        )
    } else {
      this.filterdPost = this.postList;
    }
  }

}
