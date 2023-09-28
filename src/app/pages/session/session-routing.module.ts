import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SessionPage } from './session.page';

const routes: Routes = [
  {
    path: '',
    component: SessionPage
  },
  {
    path: 'detail',
    loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SessionPageRoutingModule {}
