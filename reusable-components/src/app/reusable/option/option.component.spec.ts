import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionComponent } from './option.component';
import { By } from '../../../../node_modules/@angular/platform-browser';

describe('OptionComponent', () => {
  let component: OptionComponent;
  let fixture: ComponentFixture<OptionComponent>;
  let rootElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    spyOn(component, 'clicked').and.callThrough();
    spyOn(component.selectedChange, 'emit').and.callThrough();

    rootElement = fixture.debugElement.nativeElement;
  });

  it('should create the component with initial values', () => {
    // Component internal state
    expect(component).toBeTruthy();
    expect(component.selected).toBe(false);

    // Component UI
    expect(rootElement.firstElementChild.classList.contains('rc-option')).toBe(true);
    expect(rootElement.firstElementChild.classList.contains('selected')).toBe(false);
  });

  // Testing the methods of the OptionComponent (Unit Test)
  it('should flip selected state and emit the new value when calling component.clicked()', () => {
    component.clicked();
    fixture.detectChanges();

    expect(component.selected).toBe(true);
    expect(component.selectedChange.emit).toHaveBeenCalledWith(true);
  });

  // Testing the UI of the OptionComponent (Full component Test)
  it('should add selected attribute when native element is clicked', () => {
    let element = fixture.debugElement.query(By.css('.rc-option'));
    element.nativeElement.click();

    fixture.detectChanges();
    expect(component.clicked).toHaveBeenCalled();
    expect(rootElement.firstElementChild.classList.contains('selected')).toBe(true, 'selected class was not attached');
  });

  it('should add selected attribute when element is clicked', () => {
    let element = fixture.debugElement.query(By.css('.rc-option'));
    element.triggerEventHandler('click', null);

    fixture.detectChanges();
    expect(component.clicked).toHaveBeenCalled();
    expect(rootElement.firstElementChild.classList.contains('selected')).toBe(true, 'selected class was not attached');
  });
});