import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      // {
      //   path: 'scanner',
      //   loadChildren: () => import('../scanner/tab1.module').then(m => m.Tab1PageModule)
      // },
      // {
      //   path: 'advertiser',
      //   loadChildren: () => import('../advertiser/tab2.module').then(m => m.Tab2PageModule)
      // },
      // {
      //   path: 'wifiwizard',
      //   loadChildren: () => import('../wifiWizard/tab3.module').then(m => m.Tab3PageModule)
      // },
      // {
      //   path: 'others',
      //   loadChildren: () => import('../others-plugin/others-plugin.module').then(m => m.OthersPluginPageModule)
      // },
      {
        path: '',
        redirectTo: '/tabs/scanner',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/scanner',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
