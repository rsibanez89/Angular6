import { Component, OnInit, ViewChild, ViewChildren, AfterViewInit, ContentChildren, QueryList } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '../../../../node_modules/@angular/forms';
import { OptionComponent } from '../option/option.component';

@Component({
  selector: 'rc-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: SelectComponent,
    multi: true
  }]
})
export class SelectComponent implements ControlValueAccessor, AfterViewInit {
  
  @ContentChildren(OptionComponent) options: QueryList<OptionComponent>;

  model: any;

  constructor() {
    this.model = null;
  }

  ngAfterViewInit(): void {
    this.options.forEach(option => {
      option.selectedChange.subscribe(() => {
        this.propagateChange(this.model);
    })});
  }

  propagateChange = (_: any) => { };

  writeValue(obj: any): void {
    if(obj) {
      this.model = obj;
    }
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void { }

  setDisabledState?(isDisabled: boolean): void { }
}
