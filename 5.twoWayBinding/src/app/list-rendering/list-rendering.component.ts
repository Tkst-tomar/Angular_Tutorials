import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'listRendering',
  template: `
    <div
      *ngFor="
        let x of colors;
        index as i;
        odd as o;
        first as f;
        last as l;
        even as e
      "
    >
      <h2 *ngIf="f">This is First {{ x }}</h2>
      <h2 style="color:{{ x }};">{{ i }} {{ x }} <br /></h2>
      <h2 *ngIf="l">This is Last {{ x }}</h2>
      <!-- is First : {{f}} <br>
    is Last : {{l}} <br>
    is Odd : {{o}} <br>
    is Even : {{e}} <br> -->
    </div>
    <hr />
    <app-child [parentData]="name"></app-child>
  `,
  styles: [``],
})
export class ListRenderingComponent implements OnInit {
  public colors = ['red', 'blue', 'green', 'pink'];
  public name = 'Tarun Tomar';
  constructor() {}

  ngOnInit(): void {}
}
