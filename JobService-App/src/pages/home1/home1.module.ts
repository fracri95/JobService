import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage1 } from './home1';

@NgModule({
  declarations: [
   HomePage1,
  ],
  imports: [
    IonicPageModule.forChild(HomePage1),
  ],
  exports: [
    HomePage1
  ]
})
export class HomePage1Module {}
