import {Component, Input} from "../../../node_modules/@angular/core/src/metadata/directives";
import {ChangeDetectionStrategy} from "../../../node_modules/@angular/core/src/change_detection/constants";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosComponent {
  @Input() todos;

}
