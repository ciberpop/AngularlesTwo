import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../models/Post';
import {API} from '../constants';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {}

  getAllData(): Observable<Post[]> {
    return this.http.get<Post[]>(API + 'posts');
  }
}
