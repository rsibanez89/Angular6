import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rc-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.scss']
})
export class OptionComponent {

  @Input() selected: boolean = false;

  @Output() selectedChange = new EventEmitter();

  constructor() { }

  clicked() {
    this.selected = !this.selected;
    this.selectedChange.emit(this.selected);
  }

}
