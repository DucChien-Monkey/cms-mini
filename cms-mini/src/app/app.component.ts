import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'cms-mini';
  getVal() {
    return 'code step by step';
  }
  num = 100;
}
