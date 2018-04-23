import { Component } from '@angular/core';


@Component ({
  selector: 'app-todo',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ToDoComponent implements OnInit {
	data= [{title: "take a bath", priority: "high", estimate: "21/05/2018"}, {title: "go to office", priority: "medium", estimate: "22/05/2018"}, {title: "grab a lunch", priority: "low", estimate: "23/05/2018"}];

  constructor() { }

  ngOnInit() {
  }

  addItem() {
  	console.log("add item is triggered");
  }

  removeItem() {
  	console.log("remove item is triggered");
  }

  onSubmit(f) {
  	console.log(f);
  }

}
