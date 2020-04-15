import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.css']
})
export class AllCommentsComponent implements OnInit {
  comments: Comment[];

  constructor(private activatedRoute: ActivatedRoute) {
    // all comments from resolver
    console.log('list', this.activatedRoute.snapshot.data.list);

    // comments of single post by postid
    this.activatedRoute.data.subscribe(value => {
      this.comments = value.comments;
    });

  }
  ngOnInit(): void {
  }

}
