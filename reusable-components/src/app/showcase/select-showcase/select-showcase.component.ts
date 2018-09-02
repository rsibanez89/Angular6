import { Component, OnInit } from '@angular/core';

export interface SelectModel {
  prop1: boolean,
  prop2: boolean,
  prop3: boolean
};

@Component({
  selector: 'rc-select-showcase',
  templateUrl: './select-showcase.component.html',
  styleUrls: ['./select-showcase.component.scss']
})
export class SelectShowcaseComponent implements OnInit {

  model: SelectModel;

  constructor() {
    this.model = {
      prop1: false,
      prop2: true,
      prop3: false
    }
  }

  ngOnInit() {
  }

}
