import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
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
  tasklistID: string=''
  
  constructor(
    private taskService : TaskService,
    private activatedRoute : ActivatedRoute,
    private router : Router
    ) { }

  ngOnInit(): void {
    this.taskService.getAllTaskLists()
    .subscribe(allTasklists => this.taskLists =allTasklists);

    this.activatedRoute.params.subscribe(
      (params: Params)=>{
        this.tasklistID = params['tasklistID'];
        if(this.tasklistID){
          this.taskService.getTaskForATasklist(this.tasklistID).subscribe(
            (tasks: Taskmodel[])=>this.tasks = tasks
          )
        }
      }
    )  
  }
taskClicked(task:Taskmodel){
  console.log(task)
  this.taskService.updateTaskInATasklist(this.tasklistID, task)
  .subscribe(()=> task.completed = !task.completed)
}

deleteTask(task: Taskmodel){
  console.log(task)
  this.taskService.deleteTaskInTasklist(this.tasklistID, task._id)
  .subscribe((taskDeleted:Taskmodel)=>{
   this.tasks = this.tasks.filter(t => t._id != taskDeleted._id);
  });
}

deletTasklist(tasklistClicked: TasklistModel){
  console.log(tasklistClicked)
  this.taskService.deleteATasklist(tasklistClicked._id)
  .subscribe(()=>{
    this.taskLists = this.taskLists = this.taskLists.filter(tL => tL._id != tasklistClicked._id)
  })



  }

  addNewTask() {
    if (this.tasklistID) {
      //route the user to add task screen for the selected task-list
      this.router.navigate(['./new-task'], { relativeTo: this.activatedRoute });
    } else {
      alert("Please select a task list!");
      return;
    }
  }

}
