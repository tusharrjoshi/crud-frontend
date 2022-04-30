import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TaskScreenComponent} from './screens/task-screen/task-screen.component'
const routes: Routes = [
  {path:'', redirectTo: 'task-list', pathMatch:'full'},
  {path:'task-list', component: TaskScreenComponent},
  {path:'task-list/:tasklistID', component: TaskScreenComponent} //for the all task in TaskList routing path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
