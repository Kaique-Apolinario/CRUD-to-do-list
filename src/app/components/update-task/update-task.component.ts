import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SubmitReturnButtonsComponent } from "../shared/submit-return-buttons/submit-return-buttons.component";
import { CommonModule } from '@angular/common';
import { Task } from '../../../Task';

@Component({
  selector: 'app-update-task',
  standalone: true,
  imports: [SubmitReturnButtonsComponent, CommonModule],
  templateUrl: './update-task.component.html',
  styleUrl: './update-task.component.css'
})
export class UpdateTaskComponent {

  @Input() task!:Task;
  @Output() onUpdateTask = new EventEmitter<Task>();

  updateTask(task:Task){
    this.onUpdateTask.emit(task);
  }


}
