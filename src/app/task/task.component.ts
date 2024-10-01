import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() task!: Task;
  @Output() taskCompleted = new EventEmitter<Task>();
  @Output() taskDeleted = new EventEmitter<Task>();

  completeTask() {
    this.task.completed = !this.task.completed;
    this.taskCompleted.emit(this.task);
  }

  deleteTask() {
    this.taskDeleted.emit(this.task);
  }
}
