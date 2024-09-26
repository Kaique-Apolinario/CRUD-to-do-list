import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../../Task';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash, faTrashAlt, faTrashCan } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {

  faTrash = faTrash;

  @Input() task!: Task;
  @Output() onToggleTask = new EventEmitter<Task>();
  @Output() onDeleteTask = new EventEmitter<Task>();

  toggleTask(task: Task) {
    this.onToggleTask.emit(task);
  }

  deleteTask(task) {
    this.onDeleteTask.emit(task);
  }
}
