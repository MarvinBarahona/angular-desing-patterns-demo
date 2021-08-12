import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[dynamicLoad]',
})
export class DynamicLoadDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
