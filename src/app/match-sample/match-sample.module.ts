import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MatchSamplePageRoutingModule } from './match-sample-routing.module';

import { MatchSamplePage } from './match-sample.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatchSamplePageRoutingModule
  ],
  declarations: [MatchSamplePage]
})
export class MatchSamplePageModule {}
