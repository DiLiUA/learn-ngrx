import {Component, Input, Output} from "../../../node_modules/@angular/core/src/metadata/directives";;
import {FormControl} from "../../../node_modules/@angular/forms/src/model";
import {EventEmitter} from "../../../node_modules/@angular/core/src/facade/async";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html'
})
export class FiltersComponent {
  @Input() filters;
  @Output() changeFilter = new EventEmitter<any>();
  filter: FormControl;

  constructor() {
    this.filter = new FormControl;
  }

  @Input() set active( val ) {
    this.filter.setValue(val);
  }
}
