import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import PostItem from "../post-list-item-component/PostItem";
import {Subscription} from "rxjs";
import {PostsService} from "../services/posts.service";

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.css']
})
export class PostListComponentComponent implements OnInit, OnDestroy {
  posts : PostItem[] = [];
  postSubscription : Subscription;

  constructor(private postService : PostsService) {}

  ngOnInit() {
    this.postSubscription = this.postService.postSubject.subscribe(
      (posts : PostItem[]) => {
        this.posts = posts;
      }
    );
    this.postService.emitPosts();
  }

  ngOnDestroy(){
    this.postSubscription.unsubscribe();
  }

}
