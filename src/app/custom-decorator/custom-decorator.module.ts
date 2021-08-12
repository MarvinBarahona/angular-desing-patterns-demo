import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from "@angular/router";

import { DecoratorComponent } from "./components/decorator/decorator.component";
import { AnotherChildComponent } from "./components/another-child/another-child.component";
import { ChildComponent } from "./components/child/child.component";

const routes: Routes = [
  {
    path: '',
    component: DecoratorComponent
  }
];

@NgModule({
  declarations: [
    DecoratorComponent, ChildComponent, AnotherChildComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class CustomDecoratorModule { }
