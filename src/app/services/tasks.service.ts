import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../../Task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http: HttpClient) { }

  private apiUrl: string = "http://localhost:3000/tasks";

  getTasks():Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl);
  }

  addTask(task:Task):Observable<Task>{
    return this.http.post<Task>(this.apiUrl, task);
  }

  toggleTask(task:Task){
    this.http.put(this.apiUrl, task);
  }

}
