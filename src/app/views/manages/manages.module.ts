import { NgModule } from '@angular/core';

import { ManagesComponent } from './manages.component';
import { ManagesRoutingModule } from './manages-routing.module';

@NgModule({
  imports: [
    ManagesRoutingModule,
  ],
  declarations: [ ManagesComponent ]
})
export class ManagesModule { }