import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Application';
  disableButton = true;
  status = 'Not clicked yet';
  onButtonClick() {
    this.status = 'clicked';
  }
}
