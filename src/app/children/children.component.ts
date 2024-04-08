import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-children',
  template: `
    <div>{{ name }}</div>
    <input [disabled]="idDisabled" type="text" value="text" />
  `,
  styles: [],
})
export class ChildrenComponent implements OnInit {
  public name = 'name 1';
  public idDisabled = true;

  constructor() {}

  ngOnInit() {}
}
