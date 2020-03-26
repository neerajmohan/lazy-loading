import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipeRoutingModule } from './pipe-routing.module';
import { Pipe1Component } from './pipe1/pipe1.component';
import { Pipe2Component } from './pipe2/pipe2.component';
import { IndexComponent } from './index/index.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [Pipe1Component, Pipe2Component, IndexComponent],
  imports: [
    CommonModule,
    PipeRoutingModule,
    FormsModule
  ]
})
export class PipeModule { }
