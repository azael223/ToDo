import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompletedComponent } from './pages/completed/completed.component';
import { HomeComponent } from './pages/home/home.component';
import { ToDoComponent } from './pages/to-do/to-do.component';

const routes: Routes = [
  { path: 'home', component:HomeComponent },
  { path: 'todo', component: ToDoComponent },
  { path: 'completed', component: CompletedComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'todo' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
