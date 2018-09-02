import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowcaseComponent } from './showcase/showcase.component';
import { ShowcaseModule } from './showcase/showcase.module';
import { SelectShowcaseModule } from './showcase/select-showcase/select-showcase.module';
import { SelectShowcaseComponent } from './showcase/select-showcase/select-showcase.component';

const routes: Routes = [
  {
    path: '',
    component: ShowcaseComponent,
  },
  {
    path: 'select',
    component: SelectShowcaseComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    SelectShowcaseModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
