import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab3Page } from './tab3.page';

const routes: Routes = [
  {
    path: '',
    component: Tab3Page,
  },
  {
    path: 'profile',
    loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'sample',
    loadChildren: () => import('../sample/sample.module').then( m => m.SamplePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab3PageRoutingModule {}
