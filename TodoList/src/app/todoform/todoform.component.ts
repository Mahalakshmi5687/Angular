import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.css']
})
export class TodoformComponent implements OnInit {

  todoInput = "gdafhla"
  constructor() { }

  ngOnInit(): void {
  }

  addTask(){

  }

  resetForm(){

  }

}
