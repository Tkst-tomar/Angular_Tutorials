import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: [`
  button{
    padding:5px 10px;
    margin:0px 5px;
  }
  `],
})
export class AppComponent {
  title = '11.Form';
}
