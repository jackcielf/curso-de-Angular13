import { Component } from '@angular/core';

import { Animal } from 'src/app/Animal';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent {
  animals = [
    { name: 'Turca', type: 'Dog' },
    { name: 'Tom', type: 'Cat' },
    { name: 'Frida', type: 'Dog' },
    { name: 'Bob', type: 'Horse' },
  ];

  otherAnimals: Animal[] = [
    { name: 'Turca', type: 'Dog', age: 3 },
    { name: 'Tom', type: 'Cat', age: 7 },
    { name: 'Frida', type: 'Dog', age: 2 },
    { name: 'Bob', type: 'Horse', age: 1 },
  ];

  animalDetails = '';

  constructor(private listService: ListService) {}

  showAge(animal: Animal): void {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`;
  }

  removeAnimal(animal: Animal): void {
    console.log('Remmovendo...');
    this.animals = this.listService.remove(this.otherAnimals, animal);
  }
}
