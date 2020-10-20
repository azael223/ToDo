import { Injectable } from '@angular/core';
import { TodoList } from '../models/todo-list.model';

@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  constructor() {}

  createList(id: string, list: TodoList) {
    return localStorage.setItem(id, JSON.stringify(list));
  }
  deleteList(id: string) {
    return localStorage.removeItem(id);
  }
  updateList(idList:string,list:TodoList){
    this.deleteList(idList)
    this.createList(idList,list)
  }
  getList(id: string): TodoList {
    return JSON.parse(localStorage.getItem(id)) as TodoList;
  }
  getItem(idList: string, idItem: string) {
    const list = this.getList(idList);
    return list.list.find((item) => item.id === idItem);
  }
  deleteItem(idList: string, idItem: string) {
    const list = this.getList(idList);
    const index = list.list.map((item)=>item.id).indexOf(idItem);
    if (index > -1) {
      list.list.splice(index, 1);
    }
    this.updateList(idList,list)
  }
}
