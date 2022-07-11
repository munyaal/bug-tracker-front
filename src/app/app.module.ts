import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from "./modules/shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    StoreModule.forRoot({}, {}),
    BrowserAnimationsModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    AppRoutingModule,
    SharedModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
