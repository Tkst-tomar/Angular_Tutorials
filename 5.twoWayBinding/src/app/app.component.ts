import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div style="text-align: center;">
    <h1>From AppComponent</h1>
  </div>
  <!-- <app-login-form></app-login-form> -->
  <app-structural-directives></app-structural-directives>
  <!-- <switchDirective></switchDirective> -->
  <!-- <listRendering></listRendering> -->
  `,
  styles: [`

  `]
})
export class AppComponent {
  title = '5.LoginForm';
}
