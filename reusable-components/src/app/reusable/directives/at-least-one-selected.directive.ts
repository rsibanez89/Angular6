import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, ValidatorFn, AbstractControl, Validator } from '@angular/forms';

export function rcAtLeastOneSelected(model: any): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    // Check if object parameter has at least one truthy property
    let isValid = false;
    Object.keys(model)
      .forEach(propertyName => {
        isValid = isValid || model[propertyName];
      });
    console.log(model);
    return isValid ? null : {'atLeastOneChecked': {value: control.value}};
  };
}

@Directive({
  selector: '[rcAtLeastOneSelected]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => AtLeastOneSelectedDirective), multi: true }
  ]
})
export class AtLeastOneSelectedDirective  implements Validator {

  validate(control: AbstractControl): {[key: string]: any} | null {
    //console.log(control);
    return control && control.value ? rcAtLeastOneSelected(control.value)(control) : null;
  }
}
