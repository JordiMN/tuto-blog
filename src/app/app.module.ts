import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PostListComponentComponent} from './post-list-component/post-list-component.component';
import {PostListItemComponentComponent} from './post-list-item-component/post-list-item-component.component';
import {RouterModule, Routes} from "@angular/router";
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {PostsService} from "./services/posts.service";
import { HeaderComponent } from './header/header.component';
import { NewPostComponent } from './new-post/new-post.component';

const appRoutes: Routes = [
  {path: "posts", component: PostListComponentComponent},
  {path: "new", component: NewPostComponent},
  {path: 'not-found', component: FourOhFourComponent},
  {path: '', redirectTo: "posts", pathMatch: "full"},
  {path: '**', redirectTo: 'not-found'},
];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponentComponent,
    PostListItemComponentComponent,
    FourOhFourComponent,
    HeaderComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
