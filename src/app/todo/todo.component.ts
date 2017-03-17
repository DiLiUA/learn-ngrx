import {Component, Input} from "../../../node_modules/@angular/core/src/metadata/directives";
import {ChangeDetectionStrategy} from "../../../node_modules/@angular/core/src/change_detection/constants";

@Component({
  selector: 'app-todo',
  templateUrl: 'todo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent {
  @Input() todo;

}
