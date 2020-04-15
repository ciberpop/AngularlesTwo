import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../models/User';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input()
  user: User;

  @Output()
  forwardUserData = new EventEmitter();

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  navigate(user: User) {

    this.router.navigate([user.id, 'posts'], {relativeTo: this.activatedRoute});
  }
}
