import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import TasklistModel from './models/tasklistmodel';
import Taskmodel from './models/taskmodel';

@Injectable({
  providedIn: 'root'
})
export class ApiconfigService {
  API_BASE_URL ='https://backendtaskmanager.herokuapp.com';
  constructor(private httpClient : HttpClient) { }

  getTaskLists(url:string){
    return this.httpClient.get<TasklistModel[]>(`${this.API_BASE_URL}/${url}`);
  }

  getTask(url:string){
    return this.httpClient.get<Taskmodel[]>(`${this.API_BASE_URL}/${url}`);
  }

  post(url:string, data:Object){
    return this.httpClient.post<TasklistModel>(`${this.API_BASE_URL}/${url}`,data);
  }

  put(url:string, data:Object){
    return this.httpClient.put(`${this.API_BASE_URL}/${url}`,data);
  }

  patch(url:string, data:Object){
    return this.httpClient.patch(`${this.API_BASE_URL}/${url}`,data);
  }

  delete(url:string){
    return this.httpClient.delete<Taskmodel>(`${this.API_BASE_URL}/${url}`);
  }
}
