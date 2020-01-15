import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-first-library',
  template: `
    <p class="classy">
      my-first-library works!
    </p>
    <button mat-button>Yes</button>
  `,
  styleUrls: ['./my-first-library.component.scss']
})
export class MyFirstLibraryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
