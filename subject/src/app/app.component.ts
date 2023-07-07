import { Component } from '@angular/core';
import { InteractionService } from './interaction.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'subject';

  constructor(private _interactionSevice: InteractionService){}

  greet(){
    this._interactionSevice.sendMessage("Good Morning")
  }

  appreciate(){
    this._interactionSevice.sendMessage("Well Done")
  }
}
