import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { ToDoItemComponent } from './components/to-do-item/to-do-item.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { ToDoComponent } from './pages/to-do/to-do.component';
import { CompletedComponent } from './pages/completed/completed.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoItemComponent,
    ToDoListComponent,
    NavbarComponent,
    HomeComponent,
    ToDoComponent,
    CompletedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
