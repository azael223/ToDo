import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { ToDoListComponent } from 'src/app/components/to-do-list/to-do-list.component';
import { TodoItem } from 'src/app/models/todo-item.model';
import { TodoList } from 'src/app/models/todo-list.model';
import { TodoListService } from 'src/app/services/todo-list.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css'],
})
export class ToDoComponent implements OnInit{
  @ViewChild('task') taskElement: ElementRef<HTMLInputElement>;
  todoList: TodoList;

  constructor(private _todo: TodoListService) {}

  ngOnInit(): void {
    this.getList();
  }
  getList() {
    const list = this._todo.getList('list1');
    if (list) {
      this.todoList = list;
    } else {
      this.todoList = new TodoList('test');
      this._todo.createList('list1', this.todoList);
    }
  }
  addItem(task: string) {
    if (task) {
      this.todoList.list.push(new TodoItem(task));
      this._todo.createList('list1', this.todoList);
      this.taskElement.nativeElement.value = '';
      this.taskElement.nativeElement.focus();
    }
  }
}
