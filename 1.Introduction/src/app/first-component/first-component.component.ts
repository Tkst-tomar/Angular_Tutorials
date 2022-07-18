import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',     //? Can Also define as a class(by using "." before 'app-first-component') or an attribute(by enclosing in [] like [app-first-component])
  templateUrl: './first-component.component.html',  //? we can also define template inline by replacing "templateUrl" with "template" and the path by actual html code
  template:`<p>This is Inline</p>`,  //! The templateUrl has more priority
  styleUrls: ['./first-component.component.css'],   //? we can also define inline style by replacing "styleUrls" with "styles" and the path with [ "define styling normally like div{color:red;}" ]
  styles: [`.firstComp{color:green;}`], //! This will be given first priority

})
export class FirstComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
