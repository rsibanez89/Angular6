import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectShowcaseModule } from './select-showcase/select-showcase.module';

@NgModule({
  imports: [
    CommonModule,
    SelectShowcaseModule,
  ],
  declarations: [],
  exports: [
    CommonModule,
    SelectShowcaseModule,
  ]
})
export class ShowcaseModule { }
