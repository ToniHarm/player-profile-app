import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatchSamplePage } from './match-sample.page';

const routes: Routes = [
  {
    path: '',
    component: MatchSamplePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatchSamplePageRoutingModule {}
