import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import Taskmodel from 'src/app/models/taskmodel';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-new-task-screen',
  templateUrl: './new-task-screen.component.html',
  styleUrls: ['./new-task-screen.component.scss']
})
export class NewTaskScreenComponent implements OnInit {
   
  tasklistID :string = '';
  constructor(
    private activatedRoute : ActivatedRoute,
    private router : Router,
    private taskService : TaskService
  ) { 
    this.activatedRoute.params.subscribe(
      (params: Params)=>{
        this.tasklistID = params['tasklistID']
      }
    )
  }

  ngOnInit(): void {
  }

  addNewTask(title: string){
    if(title){
      this.taskService.taskInsideATasklist(this.tasklistID, title)
      .subscribe(
        ()=>{
          this.router.navigate(['../'], {relativeTo: this.activatedRoute})
        }
      )
      console.log(title);
    } else{
      alert("Please Enter Task-List Title !");
      return;
    }

  }
}
