import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Pipe1Component } from './pipe1/pipe1.component';
import { Pipe2Component } from './pipe2/pipe2.component';
import { IndexComponent } from './index/index.component';


const routes: Routes = [
  {path:'','component':IndexComponent},
  {path:'1','component':Pipe1Component},
  {path:'2','component':Pipe2Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PipeRoutingModule { }
