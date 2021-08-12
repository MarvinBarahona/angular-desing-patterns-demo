import {ChangeDetectionStrategy, Component} from '@angular/core';
import {IComponent} from "../../interfaces/component.interface";

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContainerComponent implements IComponent {
  childrenType: string[];
  children: IComponent[];
  title: string;

  constructor() {
    this.title = 'Task';
    this.childrenType = [];
    this.children = [];
  }

  addContainer(): void {
    this.childrenType = [...this.childrenType, 'container'];
  }

  addLeaf(): void {
    this.childrenType = [...this.childrenType, 'leaf'];
  }

  onNewChild(child: IComponent) {
    this.children = [...this.children, child]
  }

  isCompleted(): boolean {
    return this.children.every((child) => child.isCompleted());
  }

}
