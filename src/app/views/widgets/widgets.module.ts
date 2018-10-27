import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AgmCoreModule } from '@agm/core';
import { WidgetsComponent } from './widgets.component';
import { WidgetsRoutingModule } from './widgets-routing.module';
import { CommonModule } from '@angular/common';
// Firebase
import { firebaseConfig } from '../../app.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

@NgModule({
  imports: [
    WidgetsRoutingModule,
    CommonModule,
    ChartsModule,
    BsDropdownModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDbODbYmmBzfnJTnh4Hx1uKtGa6WgtdIq8'
    }),
  ],
  declarations: [ WidgetsComponent ]
})
export class WidgetsModule { }
