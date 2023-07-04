import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
})
export class FirstComponentComponent implements OnInit {
  name: string = "Jack";
  age: number = 18;
  hobbies = ["cantar", "dançar", "programar"]; // Array
  car = { /* Objeto */
    name: "BMW",
    year: 2023
  }

  constructor() {}

  ngOnInit(): void {}
}
