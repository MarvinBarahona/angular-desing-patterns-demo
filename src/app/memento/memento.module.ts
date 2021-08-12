import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {RouterModule, Routes} from "@angular/router";

import { MementoComponent } from "./components/memento/memento.component";
import { GridComponent } from "./components/grid/grid.component";

const routes: Routes = [
  {
    path: '',
    component: MementoComponent
  }
];

@NgModule({
  declarations: [MementoComponent, GridComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class MementoModule { }
