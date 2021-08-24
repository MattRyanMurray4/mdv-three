import { Component } from '@angular/core';

@Component({
  selector: 'humans-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Classify-Your-Humans';
  links = [
    { path: '/', icon: 'home', title: 'Login' },
    { path: 'friends', icon: 'view_list', title: 'Friends-List' },
  ];
}
