import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../../Task';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() task!:Task;
  @Output() onToggleTask = new EventEmitter<Task>();


  toggleTask(task:Task){
    this.onToggleTask.emit(task);
  }
}
