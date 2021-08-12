import { Component } from '@angular/core';
import { TestConsole } from "../../decorators/test-console.decorator";
import { PromptDelete } from "../../decorators/prompt-delete.decorator";

@TestConsole
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @TestConsole
  add(): void {
    console.log('Child method add');
  }

  @PromptDelete
  delete(): void {
    console.log('Child method delete');
  }

}
