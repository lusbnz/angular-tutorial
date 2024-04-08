import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-children',
  template: `
    <div>{{ name }}</div>
    <input
      [(ngModel)]="name"
      [disabled]="idDisabled"
      #input
      type="text"
      value="text"
    />
    <button (click)="logMessage(input.value)">button</button>

    <div *ngIf="!idDisabled; then thenBlock; else elseBlock"></div>

    <ng-template #thenBlock>
      <h2>lusbnz.</h2>
    </ng-template>
    <ng-template #elseBlock>
      <h2>hidden</h2>
    </ng-template>

    <div *ngFor="let color of colors; index as i">
      <h2>{{ i }} {{ color }}</h2>
    </div>
  `,
  styles: [],
})
export class ChildrenComponent implements OnInit {
  public name = 'lusbnz';
  public idDisabled = false;
  public colors = ['red', 'blue', 'yellow'];

  constructor() {}

  ngOnInit() {}

  logMessage(event: any) {
    this.name = event;
  }
}
