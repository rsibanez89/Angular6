import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rc-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.scss']
})
export class OptionComponent implements OnInit {

  @Input() selected: boolean = false;

  @Output() selectedChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  clicked() {
    this.selected = !this.selected;
    this.selectedChange.emit(this.selected);
  }

}
