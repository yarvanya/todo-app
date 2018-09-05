import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';

import {AppComponent} from './app.component';
import {AddTodoItemComponent} from './add-todo-item/add-todo-item.component';


@NgModule({
  declarations: [
    AppComponent,
    AddTodoItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
