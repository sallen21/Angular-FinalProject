import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Task } from '../models/task';

import { TasksComponent } from '../components/tasks/tasks.component';

@Injectable({
  providedIn: 'root'
})
export class TasksDataService {

  tasksUrl = 'http://localhost:3000/tasks'

  getTasks = (): Observable <Task[]> => {
    return this.http.get<Task[]>(this.tasksUrl);
  }

  getTaskById = (id: number) : Observable <Task> => {
    return this.http.get<Task>(this.tasksUrl+"/"+id);
  }



  constructor(private http: HttpClient) { }
}
