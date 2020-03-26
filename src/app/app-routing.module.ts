import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path:'pipe',loadChildren: () => import('./pipe/pipe.module').then(m => m.PipeModule) },
  { path:'form',loadChildren: () => import('./form/form.module').then(m => m.FormModule) },
  { path: '',redirectTo: '',pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
