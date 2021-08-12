import { Component } from '@angular/core';
import { GridState } from "../../interfaces/grid-state.interface";

@Component({
  selector: 'app-memento',
  templateUrl: './memento.component.html',
  styleUrls: ['./memento.component.sass']
})
export class MementoComponent {
  states: GridState[] = [];
  state: GridState;

  constructor() {
    this.state = {};
  }

  onGridState(newState: GridState): void {
    this.states = [...this.states, newState];
  }

  setState(state: GridState): void {
    this.state = state;
  }

}
