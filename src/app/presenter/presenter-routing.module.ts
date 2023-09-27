import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PresenterPage } from './presenter.page';

const routes: Routes = [
  {
    path: '',
    component: PresenterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PresenterPageRoutingModule {}
