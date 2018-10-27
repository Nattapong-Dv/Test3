import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';


@Component({
  templateUrl: 'tables.component.html'
  
})
export class TablesComponent implements OnInit{
  
  DataAll: Observable<any[]>;

  constructor(public db: AngularFireDatabase) {
    this.DataAll = db.list('Data').valueChanges();
    console.log(db.list('Data').valueChanges())
  }
  
  ngOnInit(): void {

  }
  // Export File Functions
  exportfile(){
    console.log('Export to excel file!!')
  }
}
