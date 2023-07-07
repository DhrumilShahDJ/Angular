import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit{
  title = 'parentChild';
  isLoggedIn = false;

  @ViewChild(ChildComponent) childComponentRef: ChildComponent;

  ngAfterViewInit(): void {
    this.childComponentRef.message = "Hello this message update from Parent"
  }
}
