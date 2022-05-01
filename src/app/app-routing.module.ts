import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewTaskListScreenComponent } from './screens/new-task-list-screen/new-task-list-screen.component';
import { NewTaskScreenComponent } from './screens/new-task-screen/new-task-screen.component';
import {TaskScreenComponent} from './screens/task-screen/task-screen.component'
const routes: Routes = [
  {path:'', redirectTo: 'task-list', pathMatch:'full'},
  {path:'task-list', component: TaskScreenComponent},
  {path:'task-list/:tasklistID', component: TaskScreenComponent}, //for the all task in TaskList routing path
  {path: 'new-task-list', component: NewTaskListScreenComponent},
  {path: 'task-list/:tasklistID/new-task', component: NewTaskScreenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
