import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagesComponent } from './manages.component';

const routes: Routes = [
  {
    path: '',
    component: ManagesComponent,
    data: {
      title: 'Manages'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagesRoutingModule {}