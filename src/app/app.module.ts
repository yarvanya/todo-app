import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule, MatCheckboxModule, MatListModule} from '@angular/material';

import {AppComponent} from './app.component';
import {AddTodoItemComponent} from './add-todo-item/add-todo-item.component';
import {SearchPipe} from './add-todo-item/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AddTodoItemComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatListModule,
    MatCheckboxModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
