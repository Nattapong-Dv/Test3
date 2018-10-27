import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { firebaseConfig } from '../../app.module';
import { ChartJSComponent } from './chartjs.component';
import { ChartJSRoutingModule } from './chartjs-routing.module';
import { CommonModule } from '@angular/common';
// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule,  AngularFireDatabase } from 'angularfire2/database';

@NgModule({
  imports: [
    ChartJSRoutingModule,
    ChartsModule,
    CommonModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  declarations: [ ChartJSComponent ]
})
export class ChartJSModule { }
