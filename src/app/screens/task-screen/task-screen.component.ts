import { Component, OnInit } from '@angular/core';
import TasklistModel from 'src/app/models/tasklistmodel';
import Taskmodel from 'src/app/models/taskmodel';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-task-screen',
  templateUrl: './task-screen.component.html',
  styleUrls: ['./task-screen.component.scss']
})
export class TaskScreenComponent implements OnInit {

  taskLists : TasklistModel[]=[]
  tasks : Taskmodel[]=[]
  constructor(private taskService : TaskService) { }

  ngOnInit(): void {
    this.taskService.getAllTaskLists()
    .subscribe(allTasklists => this.taskLists =allTasklists);
  }

}
