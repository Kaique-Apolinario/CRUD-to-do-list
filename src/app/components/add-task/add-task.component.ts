import { Component, EventEmitter, Output,  } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TasksComponent } from '../tasks/tasks.component';
import { Router, RouterModule } from '@angular/router';
import { TasksService } from '../../services/tasks.service';
import { SubmitReturnButtonsComponent } from "../shared/submit-return-buttons/submit-return-buttons.component";

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [TasksComponent, ReactiveFormsModule, RouterModule, SubmitReturnButtonsComponent],
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
  
  @Output() onAddTask = new EventEmitter<FormGroup>();

  addTask() {
    this.taskService.addTask(this.addTaskForms).subscribe({
      next: (response) => {// Dando certo, reproduz o código abaixo
        console.log('Tarefa adicionada:', response);
        this.onAddTask.emit(this.addTaskForms);
        this.router.navigateByUrl("");
      },
      error: (err) => { // Dando erro, reproduz o código abaixo
        console.error('Erro ao adicionar tarefa:', err);
        // Aqui lida com erros, se necessário
      }
    });
  }
}

