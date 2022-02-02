import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'cms-mini';
  getName() {
    alert('123');
  }
  getName2(name2: number) {
    alert(name2);
  }

  getName3(name3: string | number) {
    alert(name3);
  }
}
