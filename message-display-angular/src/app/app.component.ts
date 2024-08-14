import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message = '';
  displayText = 'Hello World';

  displayMessage() {
    this.displayText = this.message;
  }
}
