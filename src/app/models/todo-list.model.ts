import { TodoItem } from './todo-item.model';

export class TodoList {
  private _id: string;
  constructor(public user: string, public list: TodoItem[] = []) {
    this._id = new Date().getTime().toString();
  }

  get id() {
    return this._id;
  }
}
