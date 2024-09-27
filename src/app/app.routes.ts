import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from './components/tasks/tasks.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { UpdateTaskComponent } from './components/update-task/update-task.component';

export const routes: Routes = [
    { path: '',  component: TasksComponent},
    { path: 'newtask',  component: AddTaskComponent},
    { path: 'updateTask', component: UpdateTaskComponent}
];
