import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';




import { AppComponent } from '../app.component';
import { ContadorComponent } from './contador.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    ContadorComponent
  ],
  exports: [
    ContadorComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class ContadorModule { }
