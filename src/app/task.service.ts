import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiconfigService } from './apiconfig.service';
import TasklistModel from './models/tasklistmodel';
import Taskmodel from './models/taskmodel';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private apiConfigService : ApiconfigService) { }

  getAllTaskLists(): Observable<TasklistModel[]>{
    return this.apiConfigService.getTaskLists(`tasklists`);
  }

  getAllTasks(tasklistID:string): Observable<Taskmodel[]>{
    return this.apiConfigService.getTask(`tasklists/${tasklistID}`);
  }

  createTasklist(title:string){
    let data ={'title': title}
    return this.apiConfigService.post(`tasklists`, data);
  }

  getTaskForATasklist(tasklistID:string){
    return this.apiConfigService.getTask(`tasklists/${tasklistID}/tasks`);
  }

  taskInsideATasklist(tasklistID:string,title:string){
    let data ={'title':title}
    return this.apiConfigService.post(`tasklists/${tasklistID}/tasks`, data)
  }

  deleteATasklist(tasklistID:string):Observable<TasklistModel>{
    return this.apiConfigService.delete(`tasklists/${tasklistID}`)
  }

  deleteTaskInTasklist(tasklistID:string,taskID:string):Observable<Taskmodel>{
    return this.apiConfigService.delete(`tasklists/${tasklistID}/tasks/${taskID}`)
  }

  updateTaskInATasklist(tasklistID:string, taskObject: Taskmodel){
    let updateData ={'completed': !taskObject.completed}
    return this.apiConfigService.patch(`tasklists/${tasklistID}/tasks/${taskObject._id}`, updateData )
  }
}
