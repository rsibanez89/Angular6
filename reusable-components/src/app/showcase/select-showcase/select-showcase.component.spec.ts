import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectShowcaseComponent } from './select-showcase.component';
import { FormsModule, FormControl } from '../../../../node_modules/@angular/forms';
import { ReusableModule } from '../../reusable/reusable.module';
import { DirectivesModule } from '../../reusable/directives/directives.module';
import { By } from '../../../../node_modules/@angular/platform-browser';
import { DebugElement } from '../../../../node_modules/@angular/core';

describe('SelectShowcaseComponent', () => {
  let component: SelectShowcaseComponent;
  let fixture: ComponentFixture<SelectShowcaseComponent>;
  let formElement: DebugElement;
  let selectElement: DebugElement;
  let optionElements: DebugElement[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReusableModule,
        DirectivesModule
      ],
      declarations: [ 
        SelectShowcaseComponent 
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    formElement = fixture.debugElement.query(By.css('form'));
    selectElement = formElement.query(By.css('rc-select'));
    optionElements = selectElement.queryAll(By.css('rc-option'));
  });

  it('should create the component with initial values', () => {
    // Component internal state
    expect(component).toBeTruthy();
    expect(component.model.prop1).toBe(false);
    expect(component.model.prop2).toBe(true);
    expect(component.model.prop3).toBe(false);

    // Component UI
    expect(formElement).toBeTruthy();
    expect(formElement.nativeElement.classList.contains('ng-valid')).toBe(true, 'form is not valid');
    expect(selectElement).toBeTruthy();
    expect(optionElements.length).toBe(3);
    expect(optionElements[0].nativeElement.firstElementChild.classList.contains('selected')).toBe(false, 'selected class was attached to first element');
    expect(optionElements[1].nativeElement.firstElementChild.classList.contains('selected')).toBe(true, 'selected class was not attached');
    expect(optionElements[2].nativeElement.firstElementChild.classList.contains('selected')).toBe(false, 'selected class was attached to third element');
    const error = fixture.debugElement.query(By.css('.error'));
    expect(error).toBeFalsy();
  });

  it('should create the component with initial values', async(() => {
    optionElements[1].nativeElement.firstElementChild.click();
    fixture.detectChanges();
    
    fixture.whenStable().then(() => {
      fixture.detectChanges(); // Called a second time.
      expect(formElement.nativeElement.classList.contains('ng-invalid')).toBe(true, 'form is valid');
      expect(optionElements[0].nativeElement.firstElementChild.classList.contains('selected')).toBe(false, 'selected class was attached to first element');
      expect(optionElements[1].nativeElement.firstElementChild.classList.contains('selected')).toBe(false, 'selected class was attached to second element');
      expect(optionElements[2].nativeElement.firstElementChild.classList.contains('selected')).toBe(false, 'selected class was attached to third element');
      const error = fixture.debugElement.query(By.css('.error'));
      expect(error).toBeTruthy();
    });
  }));
});
