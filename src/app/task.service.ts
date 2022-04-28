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
    return this.apiConfigService.get(`tasklists`);
  }

  createTasklist(title:string){
    let data ={'title': title}
    return this.apiConfigService.post(`tasklists`, data);
  }

  getTaskForATasklist(tasklistID:string){
    this.apiConfigService.get(`tasklists/${tasklistID}/tasks`);
  }

  taskInsideATasklist(tasklistID:string,title:string){
    let data ={'title':title}
    return this.apiConfigService.post(`tasklists/${tasklistID}/tasks`, data)
  }

  deleteATasklist(tasklistID:string){
    return this.apiConfigService.delete(`tasklists/${tasklistID}`)
  }

  deleteTaskInTasklist(tasklistID:string,taskID:string){
    return this.apiConfigService.delete(`tasklists/${tasklistID}/tasks/${taskID}`)
  }

  updateTaskInATasklist(tasklistID:string, taskObject: Taskmodel){
    let updateData ={'completed': !taskObject.completed}
    return this.apiConfigService.patch(`tasklists/${tasklistID}/tasks/${taskObject._id}`, updateData )
  }
}
