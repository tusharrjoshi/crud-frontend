import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import TasklistModel from './models/tasklistmodel';

@Injectable({
  providedIn: 'root'
})
export class ApiconfigService {
  API_BASE_URL ='http://localhost:3000';
  constructor(private httpClient : HttpClient) { }

  get(url:string){
    return this.httpClient.get<TasklistModel[]>(`${this.API_BASE_URL}/${url}`);
  }

  post(url:string, data:Object){
    return this.httpClient.post(`${this.API_BASE_URL}/${url}`,data);
  }

  put(url:string, data:Object){
    return this.httpClient.put(`${this.API_BASE_URL}/${url}`,data);
  }

  patch(url:string, data:Object){
    return this.httpClient.patch(`${this.API_BASE_URL}/${url}`,data);
  }

  delete(url:string){
    return this.httpClient.delete(`${this.API_BASE_URL}/${url}`);
  }
}
