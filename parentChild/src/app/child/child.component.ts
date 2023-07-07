import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnChanges {
  // @Input() loggedIn: boolean; //normal approach for property intercept
  // private _loggedIn: boolean; //we use another approch getter and setter
  @Input() loggedIn: boolean; // used for ngOnchanges()
  message: string;
  name = "Name Surname"
  constructor() {}

  calledFromParent(){
    alert("This method is defined in child and called by parent, using Template Refrence variable.")
  }

  ngOnChanges(changes: SimpleChanges): void {
    const loggedinValue = changes['loggedIn']
    if(loggedinValue.currentValue === true){
      this.message = 'Welcome Back!'
    }else{
      this.message = 'Please Login!'
    }
  }

  // get loggedIn(): boolean {
  //   return this._loggedIn;
  // }

  // @Input() //This is written because value is come from anothe component
  // set loggedIn(value: boolean) {
  //   this._loggedIn = value;
  //   if (value === true) {
  //     this.message = 'Welcome Back!';
  //   } else {
  //     this.message = 'Please Log in';
  //   }
  // }
}
