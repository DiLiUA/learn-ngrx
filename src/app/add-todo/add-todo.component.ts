import {Component, Output, Input} from "../../../node_modules/@angular/core/src/metadata/directives";
import {ChangeDetectionStrategy} from "../../../node_modules/@angular/core/src/change_detection/constants";
import {FormControl} from "../../../node_modules/@angular/forms/src/model";
import {EventEmitter} from "../../../node_modules/@angular/core/src/facade/async";

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddTodoComponent {
  control : FormControl = new FormControl();

  @Output() add = new EventEmitter();
  @Input()
  public set reset( action ) {
    action && this.control.reset();
  }

}
