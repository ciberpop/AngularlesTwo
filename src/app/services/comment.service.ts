import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Comment} from '../models/Comment';
import {API} from '../constants';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) {}

  getAllData(): Observable<Comment[]> {
    return this.http.get<Comment[]>(API + 'comments');
  }
}
