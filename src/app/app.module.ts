import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildrenComponent } from './children/children.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, ChildrenComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
