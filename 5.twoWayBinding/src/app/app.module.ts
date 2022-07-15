import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { NgSwitchDirectiveComponent } from './ng-switch-directive/ng-switch-directive.component';
import { ListRenderingComponent } from './list-rendering/list-rendering.component';
import { ChildComponent } from './child/child.component';
import { LastChildComponent } from './last-child/last-child.component';
import { SecondLastChildComponent } from './second-last-child/second-last-child.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    StructuralDirectivesComponent,
    NgSwitchDirectiveComponent,
    ListRenderingComponent,
    ChildComponent,
    LastChildComponent,
    SecondLastChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
