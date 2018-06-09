import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RisultatiPage } from './risultati';

@NgModule({
  declarations: [
    RisultatiPage,
  ],
  imports: [
    IonicPageModule.forChild(RisultatiPage),
  ],
  exports: [
    RisultatiPage
  ]
})
export class RisultatiPageModule {}
