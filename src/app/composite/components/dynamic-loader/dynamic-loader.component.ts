import {
  Component,
  ComponentFactoryResolver,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import {DynamicLoadDirective} from "../../directives/dynamic-load.directive";
import {LeafComponent} from "../leaf/leaf.component";
import {ContainerComponent} from "../container/container.component";
import {IComponent} from "../../interfaces/component.interface";

const componentsMap = {
  leaf: LeafComponent,
  container: ContainerComponent
}

@Component({
  selector: 'app-dynamic-loader',
  templateUrl: './dynamic-loader.component.html',
  styleUrls: ['./dynamic-loader.component.sass']
})
export class DynamicLoaderComponent implements OnInit {
  @Input() type: string | undefined;
  @Output() newChild = new EventEmitter<IComponent>();
  @ViewChild(DynamicLoadDirective, {static: true}) host!: DynamicLoadDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    // @ts-ignore
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentsMap[this.type]);
    const viewContainerRef = this.host.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent<any>(componentFactory);
    this.newChild.emit(componentRef.instance);
  }

}
