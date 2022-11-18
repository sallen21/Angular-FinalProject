import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksDetailsComponent } from './components/tasks-details/tasks-details.component';
import { TasksComponent } from './components/tasks/tasks.component';

const routes: Routes = [
  {path: "", redirectTo: "list", pathMatch: "full"},
  {path: "list", component: TasksComponent},
  {path: "details/:id", component: TasksDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
