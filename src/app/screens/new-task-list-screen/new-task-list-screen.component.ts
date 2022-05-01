import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import TasklistModel from 'src/app/models/tasklistmodel';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-new-task-list-screen',
  templateUrl: './new-task-list-screen.component.html',
  styleUrls: ['./new-task-list-screen.component.scss']
})
export class NewTaskListScreenComponent implements OnInit {

  constructor(
    private router : Router,
    private taskService : TaskService
  ) { }

  ngOnInit(): void {
  }
  addNewTaskList(title: string){
    if(title){
      this.taskService.createTasklist(title)
      .subscribe(
        (newCreatedTasklist: TasklistModel)=>{
          this.router.navigate(['task-list', newCreatedTasklist._id])

        }
      )
      console.log(title);
    } else{
      alert("Please Enter Task-List Title !");
      return;
    }
    
  }
}
