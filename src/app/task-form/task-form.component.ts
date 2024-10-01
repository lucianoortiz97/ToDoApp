import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  @Output() taskAdded = new EventEmitter<string>();
  newTaskTitle: string = '';

  addTask() {
    if (this.newTaskTitle.trim()) {
      this.taskAdded.emit(this.newTaskTitle);
      this.newTaskTitle = '';
    }
  }
}
