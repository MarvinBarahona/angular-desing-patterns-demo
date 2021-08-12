import { Component, OnInit } from '@angular/core';
import {TestConsole} from "../../decorators/test-console.decorator";
import {PromptDelete} from "../../decorators/prompt-delete.decorator";

@Component({
  selector: 'app-another-child',
  templateUrl: './another-child.component.html',
  styleUrls: ['./another-child.component.sass']
})
@TestConsole('class')
export class AnotherChildComponent implements OnInit {
  @TestConsole('property')
  property: string;

  constructor() {
    this.property = '';
  }

  ngOnInit(): void {
  }

  @TestConsole('method')
  add(): void {
    console.log('Another child method add');
  }

  @PromptDelete
  delete(): void {
    console.log('Another child method delete');
  }

}
