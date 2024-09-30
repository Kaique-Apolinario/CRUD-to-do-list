import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Task } from '../../../Task';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from '../task-item/task-item.component';
import { FormGroup } from '@angular/forms';
import { HeaderComponent } from "../header/header.component";
import { AddTaskComponent } from "../add-task/add-task.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, TaskItemComponent, HeaderComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {

  tasksList: Task[] = [];

  constructor(private taskService: TasksService) { }

  ngOnInit(): void {
    this.getTasks();
  }


  getTasks() {
    this.taskService.getTasks().subscribe((tasksList) =>
      this.tasksList = tasksList);
  }

  toggleTask(task: Task) {
    task.finished = !task.finished;
    this.taskService.updateToggleTask(task).subscribe();
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe((deletedTask) => this.tasksList = this.tasksList.filter(element => element.id !== deletedTask.id))
  }

}


