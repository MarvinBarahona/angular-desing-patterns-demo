import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'custom-decorator',
    loadChildren: () => import('./custom-decorator/custom-decorator.module').then(m => m.CustomDecoratorModule),
  },
  {
    path: 'composite',
    loadChildren: () => import('./composite/composite.module').then(m => m.CompositeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
