import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  template: `
    <div style="text-align: center;">
      <h1>Routing and Navigation</h1>
    </div>
    <hr />
    <h2>Department List</h2>
    <div *ngFor="let item of depList" style="margin:0px 20px;">
      <!-- <p class="listData" routerLink="/home/{{item.id}}">{{ item.id }}. {{ item.tech }}</p> -->
      <p
        class="listData"
        (click)="onSelect(item)"
        [class.selected]="isSelected(item)"
      >
        {{ item.id }}. {{ item.tech }}
      </p>
    </div>
    <hr />
    <nav>
      <ul>
        <li><a routerLink="/home" routerLinkActive="active">Home</a></li>
        <li>
          <a routerLink="/employeesDetails" routerLinkActive="active"
            >First Component</a
          >
        </li>
        <li>
          <a routerLink="/employeesList" routerLinkActive="active"
            >Second Component</a
          >
        </li>
      </ul>
      <hr />
      <h3>Button For Navigation</h3>
      <button routerLink="/home" routerLinkActive="active1">Home</button>
      <button routerLink="/employeesDetails" routerLinkActive="active1">
        Employees Details
      </button>
      <button routerLink="/employeesList" routerLinkActive="active1">
        Employees List
      </button>
    </nav>
  `,
  styles: [
    `
      .active {
        color: black !important;
      }
      .active1 {
        background-color: yellow;
        color: black;
      }
      .listData {
        padding: 5px 7px;
        margin: 2px 0px;
        width: 100px;
        transition: 0.3s;
        cursor: pointer;
      }
      .listData:hover {
        box-shadow: 0px 0px 3px black;
      }
      .selected {
        background-color:grey;
        color:white;
      }
    `,
  ],
})
export class HomeComponent implements OnInit {
  public selectedId: any;
   public depList = [
    { id: 1, tech: 'Angular' },
    { id: 2, tech: 'React' },
    { id: 3, tech: 'Node Js' },
    { id: 4, tech: 'MongoDB' },
    { id: 5, tech: 'JavaScript' },
  ];
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // console.log("Get All", this.route.paramMap)
    this.route.paramMap.subscribe((data) => {
    // console.log("Get Data", data)
      this.selectedId = data.get('id');
    });
  }

  onSelect(department: any) {
    // this.router.navigate([       //! This is Static Routing
    //   '/home', //? This is where the base url is specified
    //   department.id, //? This is the params data
    // ]);
    console.log("Route", this.route)
    this.router.navigate(           //! This is relative routing
      [department.id],              //? This is the params
      {relativeTo: this.route}      //? This is used for relative routing "relativeTo:" will make the path relative to this entry this can only accept activated route
    )
  }

  isSelected(department: any) {
    return department.id === parseInt(this.selectedId);
  }
}
