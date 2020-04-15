import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  value = '';
  styleToggle = false;
  toggle: any = false;
  now: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
