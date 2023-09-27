import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {TabsComponent} from "./components/tabs/tabs.component";

const routes: Routes = [
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  // },
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    component: TabsComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'session',
        loadChildren: () => import('./session/session.module').then( m => m.SessionPageModule)
      },
      {
        path: 'presenter',
        loadChildren: () => import('./presenter/presenter.module').then( m => m.PresenterPageModule)
      },
      {
        path: 'note',
        loadChildren: () => import('./note/note.module').then( m => m.NotePageModule)
      }
    ],
  },
  // { path: "", redirectTo: "home", pathMatch: "full" },
  // { path: "**", redirectTo: "home" },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
