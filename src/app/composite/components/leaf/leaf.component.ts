import { Component } from '@angular/core';
import { IComponent } from "../../interfaces/component.interface";

@Component({
  selector: 'app-leaf',
  templateUrl: './leaf.component.html',
  styleUrls: ['./leaf.component.sass']
})
export class LeafComponent implements IComponent {
  title: string;
  completed: boolean;

  constructor() {
    this.title = 'Sub task';
    this.completed = false;
  }

  isCompleted(): boolean {
    return this.completed;
  }
}
