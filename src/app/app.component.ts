import { Component } from '@angular/core';

@Component({
  // selector: 'app-root', pour une balise <app-root></app-root> dans le html, façon la plus utilisée
  // selector: '[app-root]', pour <div class="container"app-root></div>
  // selector: '.app-root', pour <div class="container app-root"></div>
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  name = 'Aston';

  getText(event) {
    console.log(event);
  }

  sayHello() {
    return 'Hello ' + this.name;
  }
}
