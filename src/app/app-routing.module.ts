import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { TaskListComponent } from './task-list/task-list.component';

//set routes
const routes: Routes = [
  { component: CalendarComponent, path: '' },
  { component: TaskListComponent, path: 'tasks' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

// <app-task-list></app-task-list>
// <app-calendar></app-calendar>
