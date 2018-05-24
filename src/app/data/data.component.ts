import { Component } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {
  name: string='';
  task= { text: '' };

  // ci apres des objets dans un tableau
  tasks = [
    {title: 'Task 1', done: false},
    {title: 'Task 2', done: true},
    {title: 'Task 3', done: false},
  ];

  addTask() {
    this.tasks.push({
      title: this.task.text,
      done: false
    })
    console.log(this.task);
  }

  changeName (e: Event) { 
    let input = <HTMLInputElement>e.target;
    this.name= input.value;
  }

}
