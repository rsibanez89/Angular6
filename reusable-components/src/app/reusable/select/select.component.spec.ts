import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectComponent } from './select.component';
import { OptionComponent } from '../option/option.component';

describe('SelectComponent', () => {
  let component: SelectComponent;
  let fixture: ComponentFixture<SelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectComponent ]
    })

    fixture = TestBed.createComponent(SelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    spyOn(component, 'propagateChange').and.callThrough();
  });

  it('should create the component with initial values', () => {
    expect(component).toBeTruthy();
    expect(component.options.length).toBe(0);
    expect(component.model).toBe(null);
  });

  it('should set the model when write value is called with not null', () => {
    component.writeValue(null);
    expect(component.model).toBe(null);

    let model = { a: '1', b: '2', c: '3'};
    component.writeValue(model);
    expect(component.model).toBe(model);
  });
  
  it('should create a subscription to ContentChildren changes when calling ngAfterViewInit', () => {
    let op1 = new OptionComponent();
    let op2 = new OptionComponent();
    let op3 = new OptionComponent();
    component.options.reset([op1, op2, op3]);
    expect(component.options.length).toBe(3);

    component.ngAfterViewInit();
    op3.selectedChange.emit(false);
    expect(component.propagateChange).toHaveBeenCalledTimes(1);
    expect(component.propagateChange).toHaveBeenCalledWith(component.model);
  });
});
