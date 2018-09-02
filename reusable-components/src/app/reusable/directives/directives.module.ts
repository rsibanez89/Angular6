import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtLeastOneSelectedDirective } from './at-least-one-selected.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AtLeastOneSelectedDirective
  ],
  exports: [
    AtLeastOneSelectedDirective
  ]
})
export class DirectivesModule { }
