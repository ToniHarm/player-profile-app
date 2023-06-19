import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
  },
  {
    path: 'tab3',
    loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
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
export class Tab2PageRoutingModule {}
