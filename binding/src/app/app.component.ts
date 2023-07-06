import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'binding';
  image = 'https://unsplash.com/photos/xnqJAia0Q-g';
  count = 0;
  name: string;
  userName: string;
  private _customerName: string;
  @ViewChild('userNameRef') userNameElementRef: ElementRef;

  ngAfterViewInit(): void {
    this.userNameElementRef.nativeElement.focus();
    console.log(this.userNameElementRef);
  }

  incrementCount() {
    this.count += 1;
  }

  // Two Approaces for intercept proprty between class and template
  // 1. Split Binding: Property-Binding[] + Event-Binding()
  getAlert(updatedValue) {
    this.userName = updatedValue;
    if (updatedValue === 'alert') {
      alert('Hello this is alert message');
    }
  }

  // 2. Getters and Setter
  get custoomerName(): string {
    return this._customerName;
  }

  set customerName(value: string) {
    this._customerName = value;
    if (this._customerName === 'alert') {
      alert('Hi this is from alert');
    }
  }
}
