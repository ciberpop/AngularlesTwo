import { Injectable } from '@angular/core';
import {UserService} from '../user.service';
import {Resolve} from '@angular/router';
import {User} from '../../models/User';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserResolverService implements Resolve<User[]> {

  constructor(private userService: UserService) {
  }

  resolve(): Observable<User[]> {
    return this.userService.getAllData();
  }

}
