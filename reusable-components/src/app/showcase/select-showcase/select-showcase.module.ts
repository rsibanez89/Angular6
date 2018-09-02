import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectShowcaseComponent } from './select-showcase.component';
import { ReusableModule } from '../../reusable/reusable.module';
import { FormsModule } from '@angular/forms';
import { DirectivesModule } from '../../reusable/directives/directives.module';

@NgModule({
  imports: [
    CommonModule,
    ReusableModule,
    FormsModule,
    DirectivesModule,
  ],
  declarations: [
    SelectShowcaseComponent
  ]
})
export class SelectShowcaseModule { }
