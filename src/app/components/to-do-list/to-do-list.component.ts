import {
  Component,
  Input,
  OnInit,
  ViewChild,
  AfterContentChecked,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { TodoList } from '../../models/todo-list.model';
import { TodoItem } from '../../models/todo-item.model';
import { ToDoItemComponent } from '../to-do-item/to-do-item.component';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
})
export class ToDoListComponent implements OnInit, AfterContentChecked {
  @ViewChildren(ToDoItemComponent) items: ToDoItemComponent
  @Input() list: TodoList;

  constructor() {}
  ngAfterContentChecked() {
   
  }
  ngOnInit(): void {

  }

  deleteItem(event,index) {
    console.log(event)
    console.log(index)
  }
}
