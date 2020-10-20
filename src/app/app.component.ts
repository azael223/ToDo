import { Component } from '@angular/core';
import { TodoList } from './models/todo-list.model';
import { TodoItem } from './models/todo-item.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo';
  showComplete =false

  list

  get name(){
    return this.list.user
  }
  addItem(task:string):void{
    this.list.addItem(new TodoItem(task))
  }
}
