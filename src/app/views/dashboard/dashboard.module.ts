import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
// Firebase
import { firebaseConfig } from '../../app.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { CommonModule } from '@angular/common';
@NgModule({
  imports: [
    FormsModule,
    DashboardRoutingModule,
    CommonModule,
    ChartsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ DashboardComponent ]
})
export class DashboardModule { }
