import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {ReactiveFormsModule} from "../../node_modules/@angular/forms/src/form_providers";
import {StoreModule} from "../../node_modules/@ngrx/store/src/ng2";
import {StoreDevtoolsModule} from "../../node_modules/@ngrx/store-devtools/src/instrument";
import {EffectsModule} from "../../node_modules/@ngrx/effects/src/effects.module";

import { AppComponent } from './app.component';
import {TodosPageComponent} from "./todos-page/todos-page.component";
import { TodoComponent } from './todo/todo.component';
import {TodosComponent} from "./todos/todos.component";
import {AddTodoComponent} from "./add-todo/add-todo.component";
import {FiltersComponent} from "./filters/filters.component";


import {todos} from "../reducers/todo.reducers";
import {visibilityFilter} from "../reducers/visibility-flter.reducer";
import {TodosService} from "../servises/todos.servise";
import {TodosEffects} from "../effects/todos.effects";


@NgModule({
  declarations: [
    AppComponent,
    TodosPageComponent,
    TodoComponent,
    TodosComponent,
    AddTodoComponent,
    FiltersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    StoreModule.provideStore({todos, visibilityFilter}),
    StoreDevtoolsModule.instrumentStore({
      maxAge: 5,
    }),
    EffectsModule.run(TodosEffects),
  ],
  providers: [TodosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
