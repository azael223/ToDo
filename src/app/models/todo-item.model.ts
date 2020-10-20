export class TodoItem {
  public task: string;
  private _createdDate: Date;
  private _completedDate: Date;
  public completed = false;
  private _id: string;
  constructor(task: string) {
    this.task = task;
    this._createdDate = new Date();
    this._id = new Date().getTime().toString();
  }
  get id() {
    return this._id;
  }
  get isCompleted() {
    return this.completed;
  }
  get createdDate() {
    return this._createdDate;
  }
  get completedDate() {
    return this._completedDate;
  }
  complete() {
    this.completed = true;
    this._completedDate = new Date();
  }
}
