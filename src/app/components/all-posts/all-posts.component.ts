import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PostService} from '../../services/post.service';
import {User} from '../../models/User';
import {Post} from '../../models/Post';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {
  posts: Post[];

  constructor(private postService: PostService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {

    try {
      this.posts = this.activatedRoute.snapshot.data.list;
    } catch (e) {
      console.log(e);
    }

    this.activatedRoute.params.subscribe(value => {
      if (!!value.id) {
        this.postService.getUsersPosts(value.id).subscribe(data => {
          this.posts = data;
        });
      }
  });

    // this.activatedRoute.queryParams.subscribe(
    //   queryParams => this.postService.getPostsOfUserById(queryParams.idOfUser).subscribe(value => console.log(value))
    // );

    // this.postService
    //   .getPostsOfUserById(this.router.getCurrentNavigation().extras.state.user.id)
    //   .subscribe(value => console.log(value));

  }

  ngOnInit(): void {
  }

}
