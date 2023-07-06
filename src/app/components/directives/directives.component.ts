import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  color = 'greenyellow';
  size = 40;

  classes = ['green-title', 'small-title'];
}
