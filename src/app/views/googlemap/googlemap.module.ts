import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GooglemapComponent } from './googlemap.component';
import { GooglemapRoutingModule } from './googlemap-routing.module';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  imports: [
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
    GooglemapRoutingModule,
  ],
  declarations: [FormGroup, GooglemapComponent ]
})
export class GooglemapModule { }