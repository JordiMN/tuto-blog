import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PostsService} from "../services/posts.service";
import PostItem from "../post-list-item-component/PostItem";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  postForm : FormGroup;

  constructor(private formBuilder : FormBuilder,
              private postService : PostsService,
              private router : Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.postForm = this.formBuilder.group({
      title: ["", Validators.required],
      content: ["", Validators.required]
    });
  }

  onSubmit(){
    const values = this.postForm.value;
    console.log(new PostItem("test", "test"));
    this.postService.addPost(new PostItem(values["title"], values["content"]));
    this.router.navigate(["/posts"]);
  }

}
