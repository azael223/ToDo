import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { TodoItem } from 'src/app/models/todo-item.model';
import { TodoListService } from 'src/app/services/todo-list.service';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css'],
})
export class ToDoItemComponent implements OnInit, OnDestroy {
  @ViewChild('task', { static: false }) taskElement: ElementRef<
    HTMLInputElement
  >;
  @Input() item: TodoItem;
  edit = false;
  isDeleted = false;
  constructor(private _todo: TodoListService, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {}
  editTask(task: string) {}
  ngOnDestroy() {
    console.log('destroyed')
  }
  editClick() {
    this.edit = !this.edit;
    console.log(this.edit);
    this.taskElement.nativeElement.focus();
    this.item.task = this.taskElement.nativeElement.value;
  }
  deleteItem() {
    this._todo.deleteItem('list1', this.item.id);
    this.isDeleted = true;
  }
}
