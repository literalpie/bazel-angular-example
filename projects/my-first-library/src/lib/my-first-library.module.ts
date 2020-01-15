import { NgModule } from '@angular/core';
import { MyFirstLibraryComponent } from './my-first-library.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [MyFirstLibraryComponent],
  imports: [
    MatButtonModule,
  ],
  exports: [MyFirstLibraryComponent]
})
export class MyFirstLibraryModule { }
