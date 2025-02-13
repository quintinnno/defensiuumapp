import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'credencial',
    pathMatch: 'full'
  },
  {
    path: 'credencial',
    loadChildren: () => import('./pages/credencial/credencial.module').then( m => m.CredencialPageModule)
  },
  {
    path: 'tabmenu',
    loadChildren: () => import('./components/tabmenu/tabmenu.module').then( m => m.TabmenuPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
