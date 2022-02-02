import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'cms-mini';
  displayVal = '';
  getValue(val: any) {
    console.log(val);
    this.displayVal = val;
  }
}
