import { Component, EventEmitter, Output,  } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Task } from 'zone.js/lib/zone-impl';
import { TasksComponent } from '../tasks/tasks.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [TasksComponent, ReactiveFormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent extends TasksComponent{


  addTaskForms = new FormGroup({
    task_name: new FormControl(""),
    category: new FormControl("")
  });
  

addTask() {
  console.log(this.addTaskForms.value);
  this.addTasks(this.addTaskForms);
  Router.navigateByUrl("");
  }
}

