import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div style="text-align: center;">
      <div>{{ title }}</div>
      <app-children></app-children>
    </div>
  `,
  styles: [],
})
export class AppComponent {
  title = 'angular-app';
}
