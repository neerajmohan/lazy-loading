import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormRoutingModule } from './form/form-routing.module';
import { PipeRoutingModule } from './pipe/pipe-routing.module';
import { IndexComponent } from './index/index.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormService } from './form/form.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormRoutingModule,
    PipeRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
