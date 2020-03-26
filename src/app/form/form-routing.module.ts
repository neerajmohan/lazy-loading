import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplyComponent } from './apply/apply.component';
import { ResponseComponent } from './response/response.component';
import { IndexComponent } from '../index/index.component';


const routes: Routes = [
  {path:'','component':IndexComponent},
  {path:'apply','component':ApplyComponent},
  {path:'response','component':ResponseComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
