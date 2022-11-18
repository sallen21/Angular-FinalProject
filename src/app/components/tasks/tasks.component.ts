import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TasksDataService } from 'src/app/services/tasks-data.service';
import { Task } from 'src/app/models/task';
import { TasksDetailsComponent } from '../tasks-details/tasks-details.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks!: Task[];


  task: any;

  constructor(private tasksData: TasksDataService) { 
    this.tasksData.getTasks().subscribe(t => (this.tasks = t));
  }

  ngOnInit(): void {
    this.getTasks();
  }
  getTasks() {
    throw new Error('Method not implemented.');
  }
}