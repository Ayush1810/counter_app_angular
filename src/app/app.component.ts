import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'counter-app';
  counter: number = 0;
  message: string = 'counter is full';

  incCounter() {
    this.counter = this.counter + 1;
  }
  decCounter() {
    this.counter = this.counter - 1;
  }
  resCounter() {
    this.counter = 0;
  }
}
