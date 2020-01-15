import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyFirstLibraryModule } from '@literalpie/my-first-library';
import { SecondLibModule } from '@literalpie/my-first-library/second-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MyFirstLibraryModule,
    SecondLibModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
