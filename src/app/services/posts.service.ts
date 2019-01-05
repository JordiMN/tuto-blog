import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import PostItem from "../post-list-item-component/PostItem";
import * as firebase from "firebase";
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private posts : PostItem[] = [];
  postSubject = new Subject<PostItem[]>();

  constructor() {
    this.getPosts();
  }
  emitPosts(){
    this.postSubject.next(this.posts);
  }

  getPosts(){
      firebase.database().ref("/posts").on
        ('value', (data : DataSnapshot) => {
          this.posts = data.val() ? data.val() : [];
          this.emitPosts();
        });
  }

  setServerPostList(){
      firebase.database().ref("/posts").set(this.posts).then(
        () => {
          this.emitPosts();
        },
        (error) => {
          console.log(error);
        }
      );
  }

  addPost(post : PostItem){
    console.log(post);
    this.posts.push(post);
    this.setServerPostList();
    console.log(this.posts);
  }

  toggleLove(search: PostItem, newLove : number){
    const index  = this.posts.findIndex((post) => {
      if(search === post){
        return true;
      }
    });
    this.posts[index].loveIts += newLove;
    this.setServerPostList();
    this.emitPosts();
  }

  removePost(search : PostItem){
    const index = this.posts.findIndex((post) => {
      if(search == post){
        return true;
      }
    });
    this.posts.splice(index, 1);
    this.setServerPostList();
  }
}
