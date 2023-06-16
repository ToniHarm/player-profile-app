import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab3Page } from './tab3.page';

const routes: Routes = [
  {
    path: '',
    component: Tab3Page,
  },
  {
    path: 'tab2',
    loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab3PageRoutingModule {}
