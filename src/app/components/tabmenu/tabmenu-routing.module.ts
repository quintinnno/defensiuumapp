import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabmenuPage } from './tabmenu.page';

const routes: Routes = [
  {
    path: '',
    component: TabmenuPage,
    children: [
      {
        path: 'principal',
        loadChildren: () => import('../../pages/principal/principal.module').then( m => m.PrincipalPageModule)
      },
      {
        path: 'configuracao',
        loadChildren: () => import('../../pages/configuracao/configuracao.module').then( m => m.ConfiguracaoPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabmenuPageRoutingModule {}
