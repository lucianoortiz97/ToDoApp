import { Component } from '@angular/core';
import { Task, TaskModel } from '../models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks: Task[] = [];

  addTask(title: string) {
    const newTask = new TaskModel(this.tasks.length + 1, title);
    this.tasks.push(newTask);
  }

  completeTask(task: Task) {
    const index = this.tasks.findIndex(t => t.id === task.id);
    this.tasks[index] = task;
  }

  deleteTask(task: Task) {
    this.tasks = this.tasks.filter(t => t.id !== task.id);
  }
}
