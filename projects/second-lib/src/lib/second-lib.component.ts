import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-second-lib',
  template: `
    second-lib works! You can tell because that is yellow
    <div style="color: yellow">
      <lib-my-first-library></lib-my-first-library>
    </div>
  `,
  styles: []
})
export class SecondLibComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
