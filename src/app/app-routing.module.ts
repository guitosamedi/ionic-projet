import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {TabsComponent} from "./components/tabs/tabs.component";

const routes: Routes = [
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
        loadChildren: () => import('./pages/home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'session',
        loadChildren: () => import('./pages/session/session.module').then(m => m.SessionPageModule),
      },
      {
        path: 'session/:id',
        loadChildren: () => import('./pages/session-detail/session-detail.module').then(m => m.SessionDetailPageModule)
      },
      {
        path: 'speaker',
        loadChildren: () => import('./pages/speaker/speaker.module').then(m => m.SpeakerPageModule)
      },
      {
        path: 'speaker/:id',
        loadChildren: () => import('./pages/speaker-detail/speaker-detail.module').then( m => m.SpeakerDetailPageModule)
      }
      // {
      //   path: 'note',
      //   loadChildren: () => import('./note/note.module').then( m => m.NotePageModule)
      // }
    ],
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
