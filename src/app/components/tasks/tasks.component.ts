import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Task } from '../../../Task';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from '../task-item/task-item.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, TaskItemComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {


  tasksList: Task[] = [];

  constructor(private taskService: TasksService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasksList) =>
      this.tasksList = tasksList
    )
  }

  addTasks(task:Task) {
    this.taskService.addTask(task).subscribe();
  }

  toggleTask(task:Task) {
    task.finished = !task.finished;
    this.taskService.updateTask(task).subscribe();
  }

  
}

