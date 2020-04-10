import { Injectable } from '@angular/core';
import {Resolve} from '@angular/router';
import {CommentService} from '../comment.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentResolverService implements Resolve<Comment[]>{

  constructor(private commentService: CommentService) { }

  resolve(): Observable<Comment[]> {
    // @ts-ignore
    return this.commentService.getAllData();
  }
}
