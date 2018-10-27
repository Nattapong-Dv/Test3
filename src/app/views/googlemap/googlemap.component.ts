import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
@Component({
  templateUrl: 'googlemap.component.html',
})
export class GooglemapComponent implements OnInit {

  googleForm: FormGroup = null;

  constructor(private fb: FormBuilder, ) { }

  ngOnInit() {
    this.googlebuildForm();
  }
  googlebuildForm(): void {
    this.googleForm = new FormGroup({
      lat: new FormControl(''),
      long: new FormControl('')
    });
  }
  setmark(): void {
    console.log("Login")
  }
}
