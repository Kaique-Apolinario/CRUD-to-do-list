import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../../Task';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash, faPencil  } from '@fortawesome/free-solid-svg-icons';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, RouterModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {

  faTrash = faTrash;
  faPencil = faPencil;

  @Input() task!: Task;
  @Output() onToggleTask = new EventEmitter<Task>();
  @Output() onDeleteTask = new EventEmitter<Task>();
  @Output() onUpdateTask = new EventEmitter<Task>();

  toggleTask(task: Task) {
    this.onToggleTask.emit(task);
  }

  deleteTask(task:Task) {
    this.onDeleteTask.emit(task);
  }

  updateTask(task:Task){
    this.onUpdateTask.emit(task);
  }
}
