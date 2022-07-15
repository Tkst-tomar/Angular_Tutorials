import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ChildFirstComponent } from './child-first/child-first.component';
import { ChildsecondComponent } from './childsecond/childsecond.component';
import { DepDetailsComponent } from './dep-details/dep-details.component';
import { DepListComponent } from './dep-list/dep-list.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'employeesDetails', component: DepDetailsComponent },
  { path: 'employeesList', component: DepListComponent },
  {
    path: 'home/:id',
    component: DepartmentDetailComponent,
    children: [
      {path:'firstChild', component: ChildFirstComponent},
      {path:'secondChild', component: ChildsecondComponent}
    ]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routingComponent = [
  AppComponent,
  HomeComponent,
  DepDetailsComponent,
  DepListComponent,
  PageNotFoundComponent,
  DepartmentDetailComponent,
];
