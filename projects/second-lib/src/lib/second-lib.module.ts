import { NgModule } from '@angular/core';
import { SecondLibComponent } from './second-lib.component';
import { MyFirstLibraryModule } from '@literalpie/my-first-library';

@NgModule({
  declarations: [SecondLibComponent],
  imports: [
    MyFirstLibraryModule
  ],
  exports: [SecondLibComponent]
})
export class SecondLibModule { }
