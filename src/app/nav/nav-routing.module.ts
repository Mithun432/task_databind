import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrflComponent } from '../prfl/prfl.component';

const routes: Routes = [
  // {path:'',component:PrflComponent}
];

@NgModule({ 
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavRoutingModule { }
