import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import { AllCommentsComponent } from './components/all-comments/all-comments.component';
import {UserResolverService} from './services/resolvers/user-resolver.service';
import {PostResolverService} from './services/resolvers/post-resolver.service';
import {CommentResolverService} from './services/resolvers/comment-resolver.service';
import { UserComponent } from './components/user/user.component';
import { PostComponent } from './components/post/post.component';
import { CommentComponent } from './components/comment/comment.component';
import {FormsModule} from '@angular/forms';
import {CommentsResolverService} from './services/resolvers/comments-resolver.service';

const routes = [
  {path: '', component: HomeComponent},
  {path: 'users', component: AllUsersComponent, resolve: {list: UserResolverService}, children: [
      {path: ':id/posts', component: AllPostsComponent}
    ]},
  {path: 'posts', component: AllPostsComponent, resolve: {list: PostResolverService}, children: [
      {path: ':id/comments', component: AllCommentsComponent, resolve: {comments: CommentsResolverService}}
    ]},
  {path: 'comments', component: AllCommentsComponent, resolve: {list: CommentResolverService}}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllUsersComponent,
    AllPostsComponent,
    AllCommentsComponent,
    UserComponent,
    PostComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
