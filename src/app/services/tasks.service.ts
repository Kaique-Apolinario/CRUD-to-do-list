import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../../Task';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http: HttpClient) { }

  private apiUrl: string = "http://localhost:8080/";

  getTasks():Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl);
  }

  addTask(task:FormGroup):Observable<Task>{
    return this.http.post<Task>(this.apiUrl, task.value);
  }

  getById(id:Number):Observable<Task>{
    return this.http.get<Task>(this.apiUrl);
  }

  updateToggleTask(task:Task):Observable<Task>{
    return this.http.put<Task>(this.apiUrl + task.id, task);
  }

  deleteTask(task:Task):Observable<Task>{
    return this.http.delete<Task>(this.apiUrl + task.id);
  }

}
