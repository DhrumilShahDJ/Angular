import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  // @Input() loggedIn: boolean; //normal approach for property intercept
  private _loggedIn: boolean; //we use another approch getter and setter
  message: string;
  constructor() {}

  ngOnInit(): void {}

  get loggedIn(): boolean {
    return this._loggedIn;
  }

  @Input() //This is written because value is come from anothe component 
  set loggedIn(value: boolean) {
    this._loggedIn = value;
    if (value === true) {
      this.message = 'Welcome Back!';
    } else {
      this.message = 'Please Log in';
    }
  }
}
