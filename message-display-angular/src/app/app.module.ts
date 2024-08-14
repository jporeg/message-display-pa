import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Keep this import

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule  // Keep this in the imports array
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
