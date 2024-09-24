import { Component, EventEmitter, Output,  } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Task } from 'zone.js/lib/zone-impl';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  @Output() onSubmitTask = new EventEmitter<any>();

  addTaskForms = new FormGroup({
    task_name: new FormControl(""),
    category: new FormControl("")
  });
  

addTask() {
}
}
