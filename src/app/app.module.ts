import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { CommonModule } from '@angular/common';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

// Service
import { AuthService } from './services/auth.service';

// Guard
import { AuthGuard } from './guards/auth.guard';

export const firebaseConfig = {
  apiKey: "AIzaSyDkdG5cLdAxroSpogTYWNEkmB_I2-bLgso",
  authDomain: "airmonitoring-bd15d.firebaseapp.com",
  databaseURL: "https://airmonitoring-bd15d.firebaseio.com",
  projectId: "airmonitoring-bd15d",
  storageBucket: "airmonitoring-bd15d.appspot.com",
  messagingSenderId: "157144829846"
 }

// Import containers
import { DefaultLayoutComponent } from './containers';

import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { AppComponent } from './app.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig),
    

  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    LoginComponent,
    RegisterComponent,
  ],
  providers: [ AuthService, AuthGuard,{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [ AppComponent ]
})
export class AppModule { }