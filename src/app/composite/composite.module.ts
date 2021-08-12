import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";

import { ContainerComponent } from "./components/container/container.component";
import { DynamicLoaderComponent } from "./components/dynamic-loader/dynamic-loader.component";
import { LeafComponent } from "./components/leaf/leaf.component";
import { DynamicLoadDirective } from "./directives/dynamic-load.directive";

const routes: Routes = [
  {
    path: '',
    component: ContainerComponent
  }
];

@NgModule({
  declarations: [
    ContainerComponent, DynamicLoaderComponent, LeafComponent, DynamicLoadDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class CompositeModule { }
