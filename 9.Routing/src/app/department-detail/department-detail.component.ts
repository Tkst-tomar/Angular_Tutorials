import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
  <!-- <button (click)="goBack()">GO BACKKKKK</button> -->
  <button routerLink="../">GO BACKKKKK</button>
    <button (click)="goToDepartments()">Go Back</button>
    <div style="margin-left: 20px;">
      <h1>This is the department details component</h1>
      The ID = {{ depId }}
    </div>
    <a (click)="goPrevious()">Previous</a> <br />
    <a (click)="goNext()">Next</a>
    <hr>
    <div>
      <button (click)="displayFirstChild()">First Child</button>
      <button routerLink="secondChild">Second Child</button>
    </div>
    <hr>
    <div>
      <button (click)="replaceURL()">Replace URL with home</button>
    </div>
    <hr>
    <button routerLink="/home" style="margin: 20px;">Home</button>
    <hr>
    <h1>First Child</h1>
    <router-outlet></router-outlet>    <!-- //? If there is only one <router-outlet></router-outlet> then all the child components will be displayed in that tag only according to the path in url -->
    <hr>
    <h1>Second Child</h1>
    <!-- <router-outlet></router-outlet> -->
  `,
  styles: [],
})
export class DepartmentDetailComponent implements OnInit {
  public depId: any;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    //  console.log('Route Data', this.route);
    let id: any;
    // let id : any = this.route.snapshot.paramMap.get('id')   //! This approach is called snapshot approach and is not recommended

    this.route.paramMap.subscribe((data) => {
      //  console.log('PARAM DATA', data.get('id'), data.getAll('id')); //? get() will give the value of argument in "data" only, whereas getAll() gives all the value in an array that are containing in "data"
      id = data.get('id');
    });
    // this.depId = parseInt(id)
    this.depId = id;
  }
  goPrevious() {
    this.depId--;
    this.router.navigate(['/home', this.depId]);
  }

  goNext() {
    this.depId++;
    this.router.navigate(['/home', this.depId + 1]);
  }

  goBack(){
    this.router.navigate(['../'])
  }

  goToDepartments(){
    let selectedId = this.depId ? this.depId : null
    this.router.navigate([
      "../",                       //! This is used to go to the last / in your url like, "http://localhost:4200/home/abc/aaa/xyz" will be "http://localhost:4200/home/abc/aaa" after one "../"
      {id: selectedId}
    ])
  }

  displayFirstChild(){
    this.router.navigate(
      ['firstChild'],                //? We need to specify the relative route, if not then it will use the url as complete url or we need to specify complete url like '/home/3/firstChild'
     {relativeTo:this.route}
    )
  }

  replaceURL(){
    // this.router.navigateByUrl("home")      //? Using navigateByUrl
    this.router.navigate(['/home/2/firstChild'], {replaceUrl:false})
  }
}
