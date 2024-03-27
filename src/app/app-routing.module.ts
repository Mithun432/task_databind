import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrflComponent } from './prfl/prfl.component';

const routes: Routes = [
  {path:'prfl',component:PrflComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
