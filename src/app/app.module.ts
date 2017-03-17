import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import {TodosComponent} from "./todos/todos.component";
import {StoreModule} from "../../node_modules/@ngrx/store/src/ng2";
import {StoreDevtoolsModule} from "../../node_modules/@ngrx/store-devtools/src/instrument";
import {todos} from "../reducers/todo.reducers";
import {TodosService} from "../servises/todos.servise";
import {EffectsModule} from "../../node_modules/@ngrx/effects/src/effects.module";
import {TodosEffects} from "../effects/todos.effects";
import {AddTodoComponent} from "./add-todo/add-todo.component";
import {ReactiveFormsModule} from "../../node_modules/@angular/forms/src/form_providers";


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodosComponent,
    AddTodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    StoreModule.provideStore({todos}),
    StoreDevtoolsModule.instrumentStore({
      maxAge: 5,
    }),
    EffectsModule.run(TodosEffects),
  ],
  providers: [TodosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
