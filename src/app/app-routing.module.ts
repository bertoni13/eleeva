import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListStatesComponent } from './list-states/list-states.component';
const appRoutes: Routes = [
  { path: '',  component: ListStatesComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
export const routingComponents = [ListStatesComponent]
