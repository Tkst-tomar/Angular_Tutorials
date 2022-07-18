import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  template: `
<button (click)="welcomeMessage()">Click to display</button>
<h2 *ngIf="dispName else elseBlock">
  Welcome Tarun
</h2>
<h2>
  This is Buffer Block
</h2>
<ng-template #elseBlock> <!-- //! elseBlock will be rendered in place of *ngIf -->
  <h2>
    Name is Hidden
  </h2>
</ng-template>
<hr>
<h1>Directive in a Separate tag</h1>
<!-- <h1>
  Prefix of buffer box
</h1> -->
<div style="background-color: silver;width: 100vw;display:flex;justify-content:center;">

  <div style="background-color: silver;" *ngIf="dispName then ifTrue  else ifFalse">
    This is the conditional block
  </div>
</div>
<!-- <h1>
  This is buffer for conditional block
</h1> -->
<ng-template #ifTrue>
  <h1>
    Showing
  </h1>
</ng-template>
<!-- <h1>
  Intermediate Buffer
</h1> -->
<ng-template #ifFalse>
  <h1>
    Hidden
  </h1>
</ng-template>
<!-- <h1>
  End of conditional block
</h1> -->

  `,
  styles: [`

  `]
})
export class StructuralDirectivesComponent implements OnInit {
  dispName = true
  constructor() { }

  ngOnInit(): void {
  }

  welcomeMessage(){
    this.dispName = !this.dispName
  }
}

//! There are three types of structural directives:- ngIf[Used for conditional rendering], ngSwitch[Used for conditional rendering] and ngFor[Used to render list of HTML elements]
