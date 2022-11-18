import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TasksDataService } from 'src/app/services/tasks-data.service';

import { TasksComponent } from '../tasks/tasks.component';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-tasks-details',
  templateUrl: './tasks-details.component.html',
  styleUrls: ['./tasks-details.component.css']
})
export class TasksDetailsComponent implements OnInit {
  
  @Input() myTask!: Task;
  @Output() taskDeleted: EventEmitter<number> = new EventEmitter();
  id!: number;

  constructor(private tasksData: TasksDataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params["id"];

      this.tasksData.getTaskById(this.id).subscribe(t =>(this.myTask));
    });

    onClickDelete(); {
      this.taskDeleted.emit(this.myTask.id);
    }
  }

}
function onClickDelete() {
  throw new Error('Function not implemented.');
}

