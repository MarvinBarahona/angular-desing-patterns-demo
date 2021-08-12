import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {GridState} from "../../interfaces/grid-state.interface";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.sass']
})
export class GridComponent implements OnInit, GridState {
  @Input()
  set setState(state: GridState) {
    this.color1 = state.color1;
    this.color2 = state.color2;
    this.color3 = state.color3;
    this.color4 = state.color4;
  }
  @Output() newSnapshot = new EventEmitter<GridState>();

  color1?: string;
  color2?: string;
  color3?: string;
  color4?: string;

  colors = ['blue', 'red', 'yellow', 'black', 'green', 'orange', 'pink', 'purple'];

  constructor() {}

  ngOnInit(): void {
    this.snapshotState();
  }

  getRandomColor(): string {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }

  changeColor1(): void {
    this.color1 = this.getRandomColor();
  }

  changeColor2(): void {
    this.color2 = this.getRandomColor();
  }

  changeColor3(): void {
    this.color3 = this.getRandomColor();
  }

  changeColor4(): void {
    this.color4 = this.getRandomColor();
  }

  snapshotState(): void {
    this.newSnapshot.emit({
      color1: this.color1,
      color2: this.color2,
      color3: this.color3,
      color4: this.color4,
    });
  }
}
