import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select/select.component';
import { OptionComponent } from './option/option.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SelectComponent, 
    OptionComponent,
  ],
  exports: [
    SelectComponent, 
    OptionComponent,
  ]
})
export class ReusableModule { }
