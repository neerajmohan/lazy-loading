import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { FormRoutingModule } from './form-routing.module';
import { ApplyComponent } from './apply/apply.component';
import { ResponseComponent } from './response/response.component';
import { FormService } from './form.service';


@NgModule({
  declarations: [ApplyComponent, ResponseComponent],
  imports: [
    CommonModule,
    FormRoutingModule,
    ReactiveFormsModule
  ],
  providers: [FormService]
})
export class FormModule { }
