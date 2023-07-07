import { Output } from '@angular/core';
import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Output() sendEvent = new EventEmitter();
  name = 'Dhrumil';
  constructor() {}

  ngOnInit(): void {}

  callParent() {
    this.sendEvent.emit(this.name);
  }
}
