import { Component, EventEmitter, Output,  } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Task } from 'zone.js/lib/zone-impl';
import { TasksComponent } from '../tasks/tasks.component';
import { Router, RouterModule } from '@angular/router';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [TasksComponent, ReactiveFormsModule, RouterModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent{

  constructor(private router: Router, private taskService: TasksService){
  }

  addTaskForms = new FormGroup({
    task_name: new FormControl(""),
    category: new FormControl("")
  });
  

addTask() {
  console.log(this.addTaskForms.value);
  this.taskService.addTask(this.addTaskForms).subscribe();
  this.router.navigateByUrl("");
  }
}

