import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //one way data binding
  title = 'todo-list2';
  oneWayDataBinding = '***here is my one way data binding***';
  btn1 = 'btn-success';
  btn2 = 'btn-danger';

  tasks: Task[] = [
    new Task('task 1'),
    new Task('task 2'),
    new Task('task 3'),
    new Task('task 4'),
    new Task('task 5'),
  ];

  addTodo(newTask: string) {
    this.tasks.push(new Task(newTask));
  }

  //we remove my name
  //we get boolean value from confirm method

  removeTodo(existingTask: Task) {
    var userConfirmed = confirm(
      `Are you sure u want to remove the following task ? \n "${existingTask.title}" `
    );
    //filter the array from the task we pass
    if (userConfirmed) {
      this.tasks = this.tasks.filter((task) => task != existingTask);
    }
  }
}

class Task {
  constructor(public title: string) {}

  //switch or toggle
  toggleIsDone() {
    this.isDone = !this.isDone;
  }
  public isDone = false;
}
