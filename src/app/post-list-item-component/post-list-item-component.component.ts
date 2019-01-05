import {Component, Input, OnInit} from '@angular/core';
import PostItem from "./PostItem";
import {PostsService} from "../services/posts.service";

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.css']
})
export class PostListItemComponentComponent implements OnInit {
  @Input() post : PostItem;
  constructor(private postService : PostsService) { }

  ngOnInit() {
  }

  toggleLove(value : number){
    this.postService.toggleLove(this.post, value);
  }

  onRemovePost(post : PostItem){
    this.postService.removePost(post);
    this.postService.emitPosts();
  }

}
